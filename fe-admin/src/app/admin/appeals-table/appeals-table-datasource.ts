import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';


export interface iAppeals {
  id: number,
  RegistrationDate: string,
  CloseDate: string,
  Question: string,
  Responsible: number,
  AppealsType: 'ai'| 'human',
  Status: 'New' | 'InProgress' | 'Closed'
}
const EXAMPLE_DATA: iAppeals[] = [
  { id: 1, RegistrationDate: '01.12.2023', CloseDate: '', Question: '', Responsible: 1,AppealsType: 'ai', Status: 'New' },
  { id: 2, RegistrationDate: '02.12.2023', CloseDate: '', Question: '', Responsible: 1,AppealsType: 'human', Status: 'InProgress' },
  { id: 3, RegistrationDate: '03.12.2023', CloseDate: '', Question: '', Responsible: 1,AppealsType: 'human', Status: 'InProgress' },
  { id: 4, RegistrationDate: '03.12.2023', CloseDate: '', Question: '', Responsible: 1,AppealsType: 'human', Status: 'InProgress' },
  { id: 5, RegistrationDate: '11.11.2023', CloseDate: '02.12.2023', Question: '', Responsible: 1,AppealsType: 'ai', Status: 'Closed' },
  { id: 6, RegistrationDate: '11.11.2023', CloseDate: '05.12.2023', Question: '', Responsible: 1,AppealsType: 'ai', Status: 'Closed' },
  { id: 7, RegistrationDate: '22.11.2023', CloseDate: '06.12.2023', Question: '', Responsible: 1,AppealsType: 'ai', Status: 'Closed' },
  { id: 8, RegistrationDate: '22.11.2023', CloseDate: '07.12.2023', Question: '', Responsible: 1,AppealsType: 'ai', Status: 'Closed' },
  { id: 9, RegistrationDate: '15.11.2023', CloseDate: '05.12.2023', Question: '', Responsible: 1,AppealsType: 'ai', Status: 'Closed' },
];

/**
 * Data source for the AppealsTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class AppealsTableDataSource extends DataSource<iAppeals> {
  data: iAppeals[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<iAppeals[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(
        observableOf(this.data),
        this.paginator.page,
        this.sort.sortChange
      ).pipe(
        map(() => {
          return this.getPagedData(this.getSortedData([...this.data]));
        })
      );
    } else {
      throw Error(
        'Please set the paginator and sort on the data source before connecting.'
      );
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: iAppeals[]): iAppeals[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: iAppeals[]): iAppeals[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'AppealsType':
          return compare(a.AppealsType, b.AppealsType, isAsc);
        case 'id':
          return compare(+a.id, +b.id, isAsc);
        default:
          return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(
  a: string | number,
  b: string | number,
  isAsc: boolean
): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
