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
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss']
})
export class BookingListComponent implements OnInit {
  @ViewChild(MatPaginator) paginatior: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['Sr.No','CustName','DriName','Vehicle','Type','StartPlace','EndPlace','Status','Actions'];
  displayedColumns2: string[] = ['Sr.No','CustName','DriName','Vehicle','Type','StartPlace','EndPlace','Status','Actions'];

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
    {id: '1', name: 'Ongoing'},
    {id: '2', name: 'Trip To Start'},
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

driverDetails(id){
  this._route.navigate(['apps/driver/view/' + id]);
}

vehicleDetails(id){
  this._route.navigate(['apps/vehicle/view/' + id]);
}

customerDetails(id){
  this._route.navigate(['apps/customer/view/' + id]);
}

editDetails(id){
  this._route.navigate(['apps/booking/edit/' + id]);
}

liveDetails(id){
  this._route.navigate(['apps/customer/view/' + id]);
}

deleteDetails(id){
}

dataSource2 = [
  { Id: 1, FirstName: "John", CustName: "Akshay", Vehicle: "Audi", Type: "Single Trip", StartPlace: "Bhosari", EndPlace: "Pmple Gurav", Active: "1" },
  { Id: 2, FirstName: "Jane", CustName: "Akshay", Vehicle: "BMW", Type: "Single Trip", StartPlace: "Hinjewadi", EndPlace: "Kothrud", Active: "2" },
  { Id: 3, FirstName: "Alice", CustName: "Akshay", Vehicle: "Mercedes", Type: "Round Trip", StartPlace: "Baner", EndPlace: "Shivajinagar", Active: "1" },
  { Id: 4, FirstName: "Robert", CustName: "Akshay", Vehicle: "Toyota", Type: "Single Trip", StartPlace: "Wakad", EndPlace: "Viman Nagar", Active: "2" },
  { Id: 5, FirstName: "Michael", CustName: "Akshay", Vehicle: "Honda", Type: "Round Trip", StartPlace: "Hadapsar", EndPlace: "Swargate", Active: "2" },
  { Id: 6, FirstName: "Sarah", CustName: "Akshay", Vehicle: "Ford", Type: "Single Trip", StartPlace: "Katraj", EndPlace: "Magarpatta", Active: "1" },
  { Id: 7, FirstName: "David", CustName: "Akshay", Vehicle: "Hyundai", Type: "Single Trip", StartPlace: "Kondhwa", EndPlace: "Camp", Active: "2" },
  { Id: 8, FirstName: "Emma", CustName: "Akshay", Vehicle: "Chevrolet", Type: "Round Trip", StartPlace: "Pimpri", EndPlace: "Ravet", Active: "2" },
  { Id: 9, FirstName: "James", CustName: "Akshay", Vehicle: "Kia", Type: "Single Trip", StartPlace: "Warje", EndPlace: "Sinhagad", Active: "1" },
  { Id: 10, FirstName: "Olivia", CustName: "Akshay", Vehicle: "Tesla", Type: "Single Trip", StartPlace: "Chinchwad", EndPlace: "Nigdi", Active: "2" },
  { Id: 11, FirstName: "Ethan", CustName: "Akshay", Vehicle: "Mahindra", Type: "Single Trip", StartPlace: "Dhayari", EndPlace: "Nanded City", Active: "2" },
  { Id: 12, FirstName: "Ava", CustName: "Akshay", Vehicle: "Suzuki", Type: "Round Trip", StartPlace: "Balewadi", EndPlace: "Pashan", Active: "1" },
  { Id: 13, FirstName: "William", CustName: "Akshay", Vehicle: "Tata", Type: "Single Trip", StartPlace: "Akurdi", EndPlace: "Talegaon", Active: "2" },
  { Id: 14, FirstName: "Sophia", CustName: "Akshay", Vehicle: "Jeep", Type: "Single Trip", StartPlace: "Moshi", EndPlace: "Charoli", Active: "1" },
  { Id: 15, FirstName: "Mason", CustName: "Akshay", Vehicle: "Fiat", Type: "Round Trip", StartPlace: "Alandi", EndPlace: "Vishrantwadi", Active: "2" },
  { Id: 16, FirstName: "Isabella", CustName: "Akshay", Vehicle: "Renault", Type: "Single Trip", StartPlace: "Vadgaon", EndPlace: "Deccan", Active: "2" },
  { Id: 17, FirstName: "Alexander", CustName: "Akshay", Vehicle: "Volkswagen", Type: "Single Trip", StartPlace: "Narhe", EndPlace: "Kothrud", Active: "1" },
  { Id: 18, FirstName: "Mia", CustName: "Akshay", Vehicle: "Skoda", Type: "Round Trip", StartPlace: "Lohegaon", EndPlace: "Yerwada", Active: "2" },
  { Id: 19, FirstName: "Daniel", CustName: "Akshay", Vehicle: "Nissan", Type: "Single Trip", StartPlace: "Undri", EndPlace: "Camp", Active: "2" },
  { Id: 20, FirstName: "Charlotte", CustName: "Akshay", Vehicle: "Mitsubishi", Type: "Single Trip", StartPlace: "Manjri", EndPlace: "Hadapsar", Active: "1" }
];



}
