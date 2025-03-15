import { Component,  OnInit, ViewChild} from '@angular/core';
import Swal from 'sweetalert2';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { debounceTime } from 'rxjs/operators';
import { BookingSystemService } from 'app/modules/service/bookingsystem.service';
import { UserlistComponent } from 'app/modules/admin/apps/userdata/userlist/userlist.component';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
})
export class ProjectComponent implements OnInit{
  @ViewChild(MatPaginator) paginatior: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['Sr.No','Name','MobileNumber','Email','DOB','Origin','Destination','Vehicle','actions'];
  displayedColumns2: string[] = ['Sr.No','Name','MobileNumber','Email','DOB','Origin','Destination','Vehicle','actions'];

  listDetailsData: any[];
  dataSource: any;
  listDetails: FormGroup;
  listLoader: boolean = false;
  searchLoader: boolean = false;
  searchField: boolean = false;

  page: number = 1;
  pageSize: number = 5;
  startNum: number = 0;
  sortValue: string = '';
  columnIndex: number = 0;
  recordsTotal: any;
  recordsFiltered: any;
  searchControl = new FormControl();
  skeletonItems: number[] = new Array(5);
  index :number = 1
  pageIndex: number = 0;
  
  domainListData: any;
  menuListData: any;
  bannerListData: any;
  domainCount: any;
  menuCount: any;
  bannerCount: any;
  pageListData: any;
  pageCount: any;
  appListData: any;
  appCount: any;
  userListData: any;
  userCount: any;
  dir: { origin: { latitude: number; longitude: number; }; destination: { latitude: any; longitude: any; }; };

  constructor(
    private _formBuilder: FormBuilder,
    public _route: Router,
    public dialog: MatDialog,
    public _activatedroute: ActivatedRoute,
    private BookingSystemService: BookingSystemService, 
) {}

ngOnInit() {
  this.BookingSystemService.getArray("user")
      this.listLoader = true;
      this.getData()
      this.searchControl.valueChanges
          .pipe(debounceTime(500))
          .subscribe((value) => {
              this.listDetails.value.search = value;
              this.applyFilter(this.listDetails.value.search);
          });
  
      this.listDetails = this._formBuilder.group({
          search: [''],
      });
     this.getDirection();
}

search() {
  this.page = 1;
  this.pageIndex = 0
  this.pageSize = 100;
  this.startNum = 0;
  this.getData();
  this.searchField = !this.searchField;
}

convertDate(inputFormat) {
  function pad(s) { return (s < 10) ? '0' + s : s; }

  var monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  var d = new Date(inputFormat);
  var day = pad(d.getDate());
  var month = monthNames[d.getMonth()];
  var year = d.getFullYear();

  var hours = pad(d.getHours());
  var minutes = pad(d.getMinutes());
  var seconds = pad(d.getSeconds());
  // return [day, month, year].join(' ') + ' ' + [hours, minutes, seconds].join(':');
  return [day, month, year].join(' ') ;
}

applyFilter(filterValue) {
  this.dataSource.filter = filterValue.trim().toLowerCase();;
}

onPageChange(event: PageEvent): void {
  console.log(event)
  if(this.searchField == true){
      this.searchField = !this.searchField
  }
  this.pageIndex = event.pageIndex
  this.page = event.pageIndex + 1;
  this.pageSize = event.pageSize;
  this.startNum = this.pageSize * event.pageIndex;
  this.getData();
}

onSortChange(event: MatSort) {
  this.sortValue = event.direction;
  this.columnIndex = this.displayedColumns.indexOf(event.active);
  this.getData();
}

getData() {
  this.index = Number(this.pageIndex * this.pageSize)
  this.BookingSystemService.getData().subscribe((data) => {
      this.listDetailsData = data
      if (this.listDetailsData?.length != 0) {
          let listData = this.listDetailsData.slice((this.pageIndex * this.pageSize), (this.page * this.pageSize));;
          this.dataSource = new MatTableDataSource<any>(listData);                      
      } 
      this.listLoader = false;
    },(error) => { console.error("Error loading data", error); }
  );
}

viewReminder(){
  this._route.navigate(['apps/reminder/list'])
}

viewFuel(){
  this._route.navigate(['apps/fuel/list'])
}



public lat = 24.799448;
public lng = 120.979021;

public origin: any;
public destination: any;

getDirection() {
  this.origin = { lat: 24.799448, lng: 120.979021 };
  this.destination = { lat: 24.799524, lng: 120.975017 };

  // Location within a string
  // this.origin = 'Taipei Main Station';
  // this.destination = 'Taiwan Presidential Office';
}

}

      