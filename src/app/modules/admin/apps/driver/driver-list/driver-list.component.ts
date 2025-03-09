import { ChangeDetectionStrategy, Component, AfterViewInit, OnDestroy, OnInit, ViewChild, ViewEncapsulation, TemplateRef } from '@angular/core';
import { RingService } from 'app/modules/service/ring.service'
import Swal from 'sweetalert2';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.scss']
})
export class DriverListComponent implements OnInit {
  @ViewChild(MatPaginator) paginatior: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['Sr.No','Name','MobileNumber','LicenseNo','LicenseExpDate','JoiningDate','Status','Actions'];
  displayedColumns2: string[] = ['Sr.No','Name','MobileNumber','LicenseNo','LicenseExpdate','JoiningDate','status','actions'];

  listDetailsData: any[];
  dataSource : any;
  listDetails : FormGroup
  listLoader : boolean = false;
  searchLoader : boolean = false;
  searchField : boolean = false;

  page: number = 1;
  pageSize: number = 10;
  startNum:  number = 0;
  sortValue: string = "";
  columnIndex: number = 0;
  recordsTotal: any;
  recordsFiltered: any;
  searchControl = new FormControl();
  skeletonItems: number[] = new Array(5); 

  status: any[] = [
    { id: 1, name: "Active" },
    { id: 2, name: "Pending" },
    { id: 3, name: "Suspended" }
  ];
  
  constructor(
    private _formBuilder: FormBuilder,
    private ringService : RingService,
    public _route: Router,
    public dialog: MatDialog,
    public _activatedroute: ActivatedRoute,
  ){ }

  ngOnInit(): void {
    this.searchControl.valueChanges
    .pipe(debounceTime(500)) 
    .subscribe(value => {
      this.listDetails.value.search = value
      this.applyFilter();
    });

    this.listDetails = this._formBuilder.group({
        search: [''],
    });
     this.listLoader = true
    this.DetailsList();
}

search(){
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

applyFilter() {
  // this.dataSource.filter = filterValue.trim().toLowerCase();
  this.page = 1;
  this.searchLoader = true
  this.DetailsList()
  setTimeout(() => { this.searchLoader = false; }, 500);
}

onPageChange(event: PageEvent): void {
  this.page = event.pageIndex + 1;
  this.pageSize = event.pageSize;
  this.startNum = (this.pageSize * (event.pageIndex))
  this.DetailsList()
}

onSortChange(event: MatSort) {
  this.sortValue = event.direction
  this.columnIndex = this.displayedColumns.indexOf(event.active);
  this.DetailsList()
}

// DetailsList(){
//   this.ringService.UserList(this.page,this.pageSize,this.startNum,this.columnIndex,this.sortValue,this.listDetails.value.search).subscribe((res) =>{
//   if(res.response_message == "Success"){
//      this.listDetailsData = res.response_data
//      this.recordsTotal = res.total_records
//      this.recordsFiltered = res.filter_records
//      if(this.listDetailsData?.length != 0){
//           this.dataSource = new MatTableDataSource<any>(this.listDetailsData);
//           //this.dataSource.sort = this.sort;
//           this.listLoader = false;
//      }else{
//           this.listLoader = false;
//      }
//   }else{
//     this.listLoader = false;
//   }
// })
// }

DetailsList(){
  this.listDetailsData = this.dataSource2
  if(this.listDetailsData?.length != 0){
   this.dataSource = new MatTableDataSource<any>(this.listDetailsData);
  this.listLoader = false;
}else{
 this.listLoader = false;
}
}

add(){
this._route.navigate(['apps/driver/add']);
}

viewDetails(id){
this._route.navigate(['apps/driver/view/' + id]);
}

editDetails(id){
this._route.navigate(['apps/driver/edit/' + id]); 
}

deleteDetails(id){}

dataSource2 = [
  { Id: 1, FirstName: "John", LastName: "Doe", MobileNo: "9876543210", Email: "JH12AB3456", DOB: "2025-12-15", JoiningDate: "2022-05-10", Active: 1 },
  { Id: 2, FirstName: "Jane", LastName: "Smith", MobileNo: "8765432109", Email: "MH34XY7890", DOB: "2024-11-20", JoiningDate: "2021-07-12", Active: 2 },
  { Id: 3, FirstName: "Alice", LastName: "Brown", MobileNo: "7654321098", Email: "KA56CD1234", DOB: "2026-06-30", JoiningDate: "2023-02-18", Active: 1 },
  { Id: 4, FirstName: "Robert", LastName: "White", MobileNo: "6543210987", Email: "DL78EF5678", DOB: "2025-09-10", JoiningDate: "2020-11-05", Active: 3 },
  { Id: 5, FirstName: "Michael", LastName: "Johnson", MobileNo: "5432109876", Email: "TN90GH2345", DOB: "2023-03-25", JoiningDate: "2019-12-22", Active: 2 },
  { Id: 6, FirstName: "Sarah", LastName: "Taylor", MobileNo: "4321098765", Email: "UP12IJ5678", DOB: "2024-08-14", JoiningDate: "2018-09-15", Active: 1 },
  { Id: 7, FirstName: "David", LastName: "Martinez", MobileNo: "3210987654", Email: "GJ45KL7890", DOB: "2026-05-08", JoiningDate: "2021-06-01", Active: 3 },
  { Id: 8, FirstName: "Emma", LastName: "Anderson", MobileNo: "2109876543", Email: "RJ67MN2345", DOB: "2025-07-23", JoiningDate: "2022-03-19", Active: 2 },
  { Id: 9, FirstName: "James", LastName: "Thomas", MobileNo: "1098765432", Email: "WB89OP5678", DOB: "2024-02-17", JoiningDate: "2020-08-14", Active: 1 },
  { Id: 10, FirstName: "Olivia", LastName: "Harris", MobileNo: "9876012345", Email: "HR23QR7890", DOB: "2023-11-28", JoiningDate: "2019-04-10", Active: 2 },
  { Id: 11, FirstName: "Ethan", LastName: "Clark", MobileNo: "8765023456", Email: "MP45ST1234", DOB: "2025-10-05", JoiningDate: "2017-10-05", Active: 3 },
  { Id: 12, FirstName: "Ava", LastName: "Lewis", MobileNo: "7654034567", Email: "CG67UV5678", DOB: "2026-01-12", JoiningDate: "2021-09-25", Active: 1 },
  { Id: 13, FirstName: "William", LastName: "Walker", MobileNo: "6543045678", Email: "KL89WX7890", DOB: "2023-12-03", JoiningDate: "2018-07-30", Active: 2 },
  { Id: 14, FirstName: "Sophia", LastName: "Allen", MobileNo: "5432056789", Email: "AP12YZ2345", DOB: "2025-04-27", JoiningDate: "2020-06-15", Active: 1 },
  { Id: 15, FirstName: "Mason", LastName: "Young", MobileNo: "4321067890", Email: "OR34AB5678", DOB: "2024-09-09", JoiningDate: "2023-02-08", Active: 3 },
  { Id: 16, FirstName: "Isabella", LastName: "King", MobileNo: "3210978901", Email: "PB56CD7890", DOB: "2023-05-15", JoiningDate: "2021-11-12", Active: 2 },
  { Id: 17, FirstName: "Alexander", LastName: "Scott", MobileNo: "2109870123", Email: "GA78EF2345", DOB: "2026-07-20", JoiningDate: "2019-01-22", Active: 1 },
  { Id: 18, FirstName: "Mia", LastName: "Green", MobileNo: "1098761234", Email: "MH90GH5678", DOB: "2025-06-18", JoiningDate: "2020-05-30", Active: 3 },
  { Id: 19, FirstName: "Daniel", LastName: "Adams", MobileNo: "9876013456", Email: "JK12IJ7890", DOB: "2024-01-22", JoiningDate: "2022-07-18", Active: 2 },
  { Id: 20, FirstName: "Charlotte", LastName: "Nelson", MobileNo: "8765024567", Email: "BR34KL2345", DOB: "2023-08-29", JoiningDate: "2018-10-28", Active: 1 }
];



}
