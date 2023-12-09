import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRootComponent } from './admin-root.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DashboardComponent } from './dashboard/dashboard.component';
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

@NgModule({
  declarations: [AdminRootComponent, DashboardComponent, ChatComponent, AppealsTableComponent, UsersTableComponent],
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
    MatFormFieldModule,
    MatInputModule
  ],
  exports:[
    AdminRootComponent
  ]
})
export class AdminModule {}
