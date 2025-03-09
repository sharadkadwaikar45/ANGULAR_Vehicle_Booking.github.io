import { ChangeDetectionStrategy, Component, AfterViewInit, OnDestroy, OnInit, ViewChild, ViewEncapsulation, TemplateRef } from '@angular/core';
import { RingService } from 'app/modules/service/ring.service'
import Swal from 'sweetalert2';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})

export class UserlistComponent implements OnInit {
  @ViewChild(MatPaginator) paginatior: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['Sr.No','RingId','Name','MobileNumber','Email','DOB','actions'];
  displayedColumns2: string[] = ['Sr.No','RingId','Name','MobileNumber','Email','DOB','actions'];

  userDetailsData: any[];
  dataSource : any;
  userDetails : FormGroup
  listLoader : boolean = false;
  searchLoader : boolean = false;
  searchField : boolean = false;

  status: any[] = [
    {id: '1', name: 'Active'},
    {id: '0', name: 'Inactive'},
  ];

  page: number = 1;
  pageSize: number = 10;
  startNum:  number = 0;
  sortValue: string = "";
  columnIndex: number = 0;
  recordsTotal: any;
  recordsFiltered: any;
  searchControl = new FormControl();

  checkboxes = [
    { label: 'Ring Id', element:'RingId', isChecked: true },
    { label: 'Name', element:'Name', isChecked: true },
    { label: 'Mobile', element:'MobileNumber', isChecked: true },
    { label: 'Email', element:'Email', isChecked: true },
    { label: 'Date Of Birth', element:'DOB', isChecked: true }
  ];


  
  constructor(
    private _formBuilder: FormBuilder,
    private ringService : RingService,
    public _route: Router,
    public dialog: MatDialog,
    public _activatedroute: ActivatedRoute,
    ){ }
 
    ngOnInit() {
      this.searchControl.valueChanges
      .pipe(debounceTime(500)) 
      .subscribe(value => {
        this.userDetails.value.search = value
        this.applyFilter();
      });

      this.userDetails = this._formBuilder.group({
          search: [''],
      });
       this.listLoader = true
      this.userDetailsList();
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
    this.userDetailsList()
    setTimeout(() => { this.searchLoader = false; }, 500);
  }
  
  
  onPageChange(event: PageEvent): void {
    this.page = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.startNum = (this.pageSize * (event.pageIndex))
    this.userDetailsList()
  }
  
  onSortChange(event: MatSort) {
    this.sortValue = event.direction
    this.columnIndex = this.displayedColumns.indexOf(event.active);
    this.userDetailsList()
  }

//   userDetailsList(){
//     this.ringService.UserList(this.page,this.pageSize,this.startNum,this.columnIndex,this.sortValue,this.userDetails.value.search).subscribe((res) =>{
//     if(res.response_message == "Success"){
//        this.userDetailsData = res.response_data
//        this.recordsTotal = res.total_records
//       this.recordsFiltered = res.filter_records
//        if(this.userDetailsData?.length != 0){
//         this.dataSource = new MatTableDataSource<any>(this.userDetailsData);
//   //    this.dataSource.sort = this.sort;

//        this.listLoader = false;
//     }else{
//       this.listLoader = false;
//     }
//     }else{
//       this.listLoader = false;
//     }
//   })
// }

userDetailsList(){
     this.userDetailsData = this.dataSource2
     if(this.userDetailsData?.length != 0){
      this.dataSource = new MatTableDataSource<any>(this.userDetailsData);
     this.listLoader = false;
  }else{
    this.listLoader = false;
  }
}

updateStatus(UserId,status){
  this.ringService.updateUserStatus(UserId,status).subscribe((res) =>{
    if(res.response_message == "Success"){
       this.userDetailsList();
    Swal.fire(
      '',
      'User status updated.',
      'success'
    );
  }
})
}

report(userId){
  this._route.navigate(['apps/userdata/history/' + userId]);
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

dataSource2 = [
  { RingId: 1001, FirstName: "John", LastName: "Doe", MobileNo: "9876543210", Email: "john.doe@example.com", DOB: "1990-01-15", Origin: "New York", Destination: "Los Angeles", Vehicle: "Sedan", Active: "1" },
  { RingId: 1002, FirstName: "Jane", LastName: "Smith", MobileNo: "9876543211", Email: "jane.smith@example.com", DOB: "1992-02-20", Origin: "Chicago", Destination: "Houston", Vehicle: "SUV", Active: "0" },
  { RingId: 1003, FirstName: "Alice", LastName: "Johnson", MobileNo: "9876543212", Email: "alice.johnson@example.com", DOB: "1985-03-25", Origin: "San Francisco", Destination: "Seattle", Vehicle: "Hatchback", Active: "1" },
  { RingId: 1004, FirstName: "Robert", LastName: "Brown", MobileNo: "9876543213", Email: "robert.brown@example.com", DOB: "1995-04-10", Origin: "Boston", Destination: "Miami", Vehicle: "Truck", Active: "1" },
  { RingId: 1005, FirstName: "Michael", LastName: "Davis", MobileNo: "9876543214", Email: "michael.davis@example.com", DOB: "1988-05-30", Origin: "Denver", Destination: "Las Vegas", Vehicle: "Van", Active: "0" },
  { RingId: 1006, FirstName: "Sarah", LastName: "Miller", MobileNo: "9876543215", Email: "sarah.miller@example.com", DOB: "1993-06-15", Origin: "Austin", Destination: "Dallas", Vehicle: "Convertible", Active: "1" },
  { RingId: 1007, FirstName: "David", LastName: "Wilson", MobileNo: "9876543216", Email: "david.wilson@example.com", DOB: "1987-07-05", Origin: "San Diego", Destination: "Phoenix", Vehicle: "Coupe", Active: "0" },
  { RingId: 1008, FirstName: "Emma", LastName: "Anderson", MobileNo: "9876543217", Email: "emma.anderson@example.com", DOB: "1996-08-12", Origin: "Nashville", Destination: "Atlanta", Vehicle: "Pickup", Active: "1" },
  { RingId: 1009, FirstName: "James", LastName: "Thomas", MobileNo: "9876543218", Email: "james.thomas@example.com", DOB: "1989-09-18", Origin: "Philadelphia", Destination: "Washington", Vehicle: "Minivan", Active: "0" },
  { RingId: 1010, FirstName: "Olivia", LastName: "Martinez", MobileNo: "9876543219", Email: "olivia.martinez@example.com", DOB: "1997-10-22", Origin: "Detroit", Destination: "Indianapolis", Vehicle: "Electric Car", Active: "1" },
  { RingId: 1011, FirstName: "Ethan", LastName: "Garcia", MobileNo: "9876543220", Email: "ethan.garcia@example.com", DOB: "1994-11-25", Origin: "San Antonio", Destination: "El Paso", Vehicle: "Sports Car", Active: "0" },
  { RingId: 1012, FirstName: "Ava", LastName: "Hernandez", MobileNo: "9876543221", Email: "ava.hernandez@example.com", DOB: "1991-12-30", Origin: "Orlando", Destination: "Tampa", Vehicle: "Hybrid", Active: "1" },
  { RingId: 1013, FirstName: "William", LastName: "Lopez", MobileNo: "9876543222", Email: "william.lopez@example.com", DOB: "1986-01-10", Origin: "Portland", Destination: "Sacramento", Vehicle: "Luxury Car", Active: "1" },
  { RingId: 1014, FirstName: "Sophia", LastName: "Gonzalez", MobileNo: "9876543223", Email: "sophia.gonzalez@example.com", DOB: "1998-02-15", Origin: "Charlotte", Destination: "Raleigh", Vehicle: "Bike", Active: "0" },
  { RingId: 1015, FirstName: "Mason", LastName: "Rodriguez", MobileNo: "9876543224", Email: "mason.rodriguez@example.com", DOB: "1990-03-18", Origin: "Salt Lake City", Destination: "Boise", Vehicle: "Van", Active: "1" },
  { RingId: 1016, FirstName: "Isabella", LastName: "Perez", MobileNo: "9876543225", Email: "isabella.perez@example.com", DOB: "1993-04-25", Origin: "Minneapolis", Destination: "St. Paul", Vehicle: "Sedan", Active: "0" },
  { RingId: 1017, FirstName: "Alexander", LastName: "Smith", MobileNo: "9876543226", Email: "alexander.smith@example.com", DOB: "1985-05-30", Origin: "Memphis", Destination: "Birmingham", Vehicle: "Hatchback", Active: "1" },
  { RingId: 1018, FirstName: "Mia", LastName: "White", MobileNo: "9876543227", Email: "mia.white@example.com", DOB: "1992-06-10", Origin: "Columbus", Destination: "Cincinnati", Vehicle: "Truck", Active: "1" },
  { RingId: 1019, FirstName: "Daniel", LastName: "Harris", MobileNo: "9876543228", Email: "daniel.harris@example.com", DOB: "1995-07-15", Origin: "Omaha", Destination: "Kansas City", Vehicle: "SUV", Active: "0" },
  { RingId: 1020, FirstName: "Charlotte", LastName: "Clark", MobileNo: "9876543229", Email: "charlotte.clark@example.com", DOB: "1988-08-20", Origin: "Louisville", Destination: "Lexington", Vehicle: "Convertible", Active: "1" }
];
}
