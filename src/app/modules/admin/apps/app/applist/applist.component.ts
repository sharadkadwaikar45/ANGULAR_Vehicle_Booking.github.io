import { ChangeDetectionStrategy, Component, AfterViewInit, OnDestroy, OnInit, ViewChild, ViewEncapsulation, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { RingService } from 'app/modules/service/ring.service'
import Swal from 'sweetalert2';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-applist',
  templateUrl: './applist.component.html',
  styleUrls: ['./applist.component.scss']
})

export class ApplistComponent implements OnInit {
  @ViewChild(MatPaginator) paginatior: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['Sr.No','AppName','PackageName','ApiUrl','DomainNames','PrimaryDomainName','Description','actions'];
  displayedColumns2: string[] = ['Sr.No','AppName','PackageName','ApiUrl','DomainNames','PrimaryDomainName','Description','actions'];

  appListData: any[];
  dataSource : any;
  appList : FormGroup
  listLoader:boolean = false;
  searchLoader : boolean = false;
  showFullDescription: boolean = false;
  showFullDescription2: boolean = false;
  showFullDescription3: boolean = false;
  searchField : boolean = false;
  page: number = 1;
  pageSize: number = 10;
  startNum:  number = 0;
  sortValue: string = "";
  columnIndex: number = 0;
  recordsTotal: any;
  recordsFiltered: any;
  searchControl = new FormControl();

  checkboxes = [
    { label: 'App Name', element:'AppName', isChecked: true },
    { label: 'Package Name', element:'PackageName', isChecked: true },
    { label: 'Api Url', element:'ApiUrl', isChecked: true },
    { label: 'Domains', element:'DomainNames', isChecked: true },
    { label: 'Primary Domain', element:'PrimaryDomainName', isChecked: true },
    { label: 'Description', element:'Description', isChecked: true }

  ];

  constructor(
    private _formBuilder: FormBuilder,
    private ringService : RingService,
    public _route: Router,
    public dialog: MatDialog,
    ){ }

  ngOnInit() {
    this.searchControl.valueChanges
    .pipe(debounceTime(500)) 
    .subscribe(value => {
      this.appList.value.search = value
      this.applyFilter();
    });

    this.appList = this._formBuilder.group({
        search: [''],
    });
    this.listLoader = true
    this.fetchAppList();
}

search(){
  this.searchField = !this.searchField;
}

setPrimary(appId,domainId): void {
  const selectedValue = domainId;

  this.ringService.updatePrimaryDomain(appId,domainId).subscribe((res) =>{
    if(res.response_message == "Success"){
    }
  })
}

applyFilter() {
  // this.dataSource.filter = filterValue.trim().toLowerCase();
  this.page = 1;
  this.searchLoader = true
  this.fetchAppList()
  setTimeout(() => { this.searchLoader = false; }, 500);
}


onPageChange(event: PageEvent): void {
  this.page = event.pageIndex + 1;
  this.pageSize = event.pageSize;
  this.startNum = (this.pageSize * (event.pageIndex))
  this.fetchAppList()
}

onSortChange(event: MatSort) {
  this.sortValue = event.direction
  this.columnIndex = this.displayedColumns.indexOf(event.active);
  this.fetchAppList()
}

// toggleDescription(element: any): void {
//   element.showFullDescription = !element.showFullDescription;
// }

// toggleDescription2(element: any): void {
//   element.showFullDescription2 = !element.showFullDescription2;
// }

// toggleDescription3(element: any): void {
//   element.showFullDescription3 = !element.showFullDescription3;
// }

fetchAppList(){
  this.ringService.AppTableList(this.page,this.pageSize,this.startNum,this.columnIndex,this.sortValue,this.appList.value.search).subscribe((res) =>{
  if(res.response_message == "Success"){
     this.appListData = res.response_data
     this.recordsTotal = res.total_records
      this.recordsFiltered = res.filter_records
     if(this.appListData?.length != 0){
      this.dataSource = new MatTableDataSource<any>(this.appListData);
//    this.dataSource.sort = this.sort;

     this.listLoader = false;
  }
  else{
    this.listLoader = false;
   }
  }
  else{
    this.listLoader = false;
   }
})
}

addNewApp(){
  this._route.navigate(['apps/apps/addapp']);
}


editAppDetails(appId) {
  this._route.navigate(['apps/apps/addapp/update/'+ appId]);
}

deleteAppDetails(appId){
  Swal.fire({
    title: 'Are you sure?',
    text: 'You want to delete app details',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'Cancel'
  }).then((result) => {
    if (result.isConfirmed) {
      this.ringService.deleteApp(appId).subscribe((res) =>{ 
        if(res.response_message == "Success"){
          this.fetchAppList()
          Swal.fire(
            'Deleted!',
            'App details has been deleted.',
            'success'
          );
        }
      });
     
    } else {
    }
 
})
}

onCheckboxChange(event: Event){
  this.displayedColumns = []
  let demoArray:any[]=[]
  this.checkboxes.forEach((item)=>{
    if(item.isChecked == false){
      demoArray.push(item.element)
    }
  })
  
  this.displayedColumns = this.displayedColumns2.filter(element => !demoArray.includes(element));
  }
}
