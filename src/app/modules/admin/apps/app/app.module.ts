import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from 'app/shared/shared.module';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
 
import { AddappComponent } from './addapp/addapp.component';
import { ApplistComponent } from './applist/applist.component';
import { appRoutes } from './app.routing';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { AppdetailsComponent } from './appdetails/appdetails.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations: [
    AddappComponent,
    ApplistComponent,
    AppdetailsComponent
  ],
  imports: [
    RouterModule.forChild(appRoutes),
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatProgressBarModule,
    MatRippleModule,
    MatSortModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTooltipModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
 
    CommonModule,
    NgxMatSelectSearchModule,
    MatExpansionModule,
    MatListModule,
    MatRadioModule
  ]
})
export class AppModule { }
