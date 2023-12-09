import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRootComponent } from './admin-root.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ChatComponent } from './chat/chat.component';
import { MatIconModule } from '@angular/material/icon';
import { AppealsTableComponent } from './appeals-table/appeals-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UsersTableComponent } from './users-table/users-table.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DashComponent } from './dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { CardComponent } from './dash/card/card.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { MultiSeriesChartComponent } from './dash/multi-series-chart/multi-series-chart.component';
import { MultiSeriesColumnChartComponent } from './dash/multi-series-column-chart/multi-series-column-chart.component';
import { StackedColumnChartComponent } from './dash/stacked-column-chart/stacked-column-chart.component';
import { CircleChartComponent } from './dash/circle-chart/circle-chart.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminRootComponent,
    ChatComponent,
    AppealsTableComponent,
    UsersTableComponent,
    DashComponent,
    CardComponent,
    MultiSeriesChartComponent,
    MultiSeriesColumnChartComponent,
    StackedColumnChartComponent,
    CircleChartComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    AdminRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatMenuModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    LayoutModule,
    CanvasJSAngularChartsModule
  ],
  exports: [AdminRootComponent],
})
export class AdminModule {}
