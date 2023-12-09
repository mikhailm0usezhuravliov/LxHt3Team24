import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';


export interface UsersTableItem {
  id: number;
  Name: string;
  Age?: number;
  Location?: string;
  UserType?: 'veteran'| 'other';
  Appeals?: [];
  PhoneNumber?: string;
  GovId?: number;
  Email?: string;
}

const EXAMPLE_DATA: UsersTableItem[] = [
  {id: 1, Name: 'Firstname Secondname', Age : 22, Location: 'SomeSity',UserType: 'veteran', PhoneNumber: '+3807745645621', GovId: 33312312, Email: 'FirstSecondName@mail.com'},
  {id: 2, Name: 'Ovas Orestov', Age : 33, Location: 'SomeSity',UserType: 'veteran', PhoneNumber: '+3807745645621', GovId: 34234234, Email: 'FirstSecondName@mail.com'},
  {id: 3, Name: 'Hormon Dordon', Age : 41, Location: 'SomeTown',UserType: 'veteran', PhoneNumber: '+3807745645621', GovId: 34534534, Email: 'FirstSecondName@mail.com'},
  {id: 4, Name: 'Ikol Polest', Age : 66, Location: 'SomeViladge',UserType: 'other', PhoneNumber: '+3807745645621', GovId: 56756765, Email: 'FirstSecondName@mail.com'},
  {id: 5, Name: 'Sorden Likon', Age : 45, Location: 'SomeViladge',UserType: 'other', PhoneNumber: '+3807745645621', GovId: 56756756, Email: 'FirstSecondName@mail.com'},
  {id: 6, Name: 'Hols Grent', Age : 47, Location: 'SomeSity',UserType: 'other', PhoneNumber: '+3807745645621', GovId: 33312312, Email: 'FirstSecondName@mail.com'},
  {id: 7, Name: 'Reqx Xcent', Age : 35, Location: 'SomeTown',UserType: 'other', PhoneNumber: '+3807745645621', GovId: 67566672, Email: 'FirstSecondName@mail.com'},
  {id: 8, Name: 'Hydogen Pomonor', Age : 26, Location: 'SomeSity',UserType: 'other', PhoneNumber: '+3807745645621', GovId: 11235666, Email: 'FirstSecondName@mail.com'},
  {id: 9, Name: 'Lovera Palmera', Age : 26, Location: 'SomeSity',UserType: 'veteran', PhoneNumber: '+3807745645621', GovId: 11235666, Email: 'FirstSecondName@mail.com'},
];

/**
 * Data source for the UsersTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class UsersTableDataSource extends DataSource<UsersTableItem> {
  data: UsersTableItem[] = EXAMPLE_DATA;
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
  connect(): Observable<UsersTableItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
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
  private getPagedData(data: UsersTableItem[]): UsersTableItem[] {
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
  private getSortedData(data: UsersTableItem[]): UsersTableItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'Name': return compare(a.Name, b.Name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
