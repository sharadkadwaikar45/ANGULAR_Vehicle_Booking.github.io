import { Component, OnInit,ViewChild ,TemplateRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators,NgForm, FormControl } from '@angular/forms';
import { RingService } from 'app/modules/service/ring.service'
import { FuseValidators } from '@fuse/validators';
import { GlobalService } from 'app/modules/service/global.service';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { debounceTime } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
})
export class ProjectComponent implements OnInit{
  @ViewChild(MatPaginator) paginatior: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['Sr.No','RingId','Name','MobileNumber','Origin','Destination','Vehicle','DOB','actions'];
  displayedColumns2: string[] = ['Sr.No','RingId','Name','MobileNumber','Email','DOB','actions'];
  userDetailsData: any[];
  dataSource : any;
  userDetails : FormGroup
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
    private ringService : RingService,
    public globalService: GlobalService,
    public _activatedroute: ActivatedRoute,
    public _route: Router, ) {
    
  }

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

  this.userDetailsList();
  this.fetchUserList();
  this.fetchAppList();
    // this.updateChartData()
    // this.getDirection(29.9809683,45.77777733)
    this.getDirection();
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

userDetailsList(){
  // this.ringService.UserList(this.page,this.pageSize,this.startNum,this.columnIndex,this.sortValue,this.userDetails.value.search).subscribe((res) =>{
  // if(res.response_message == "Success"){
     this.userDetailsData = this.dataSource2
    //  this.recordsTotal = res.total_records
    // this.recordsFiltered = res.filter_records
     if(this.userDetailsData?.length != 0){
      this.dataSource = new MatTableDataSource<any>(this.userDetailsData);
//    this.dataSource.sort = this.sort;

     this.listLoader = false;
  }else{
    this.listLoader = false;
  }
  // }else{
  //   this.listLoader = false;
  // }
// })
}





fetchUserList(){
  this.ringService.fetchUserList().subscribe((res) =>{
  if(res.response_message == "Success"){
     this.userListData = res.response_data.slice(0, 5)
     this.userCount =  res.response_data?.length
  }
})
} 





fetchAppList(){
  this.ringService.fetchAppList().subscribe((res) =>{
    if(res.response_message == "Success"){
       this.appListData = res.response_data.slice(0, 5);
       this.appCount = res.response_data?.length
    }
  })
}

editPage(pageId){
  this._route.navigate(['apps/pages/addpages/update/' + pageId]);
}

viewReminder(){
  this._route.navigate(['apps/reminder/list'])
}

viewFuel(){
  this._route.navigate(['apps/fuel/list'])
}

// getDirection(dirLat: any, dirLng: any) {
//   let srcLat, srcLng;
//   if ('geolocation' in navigator) {
//     navigator.geolocation.getCurrentPosition((position) => {
//     srcLat = position.coords.latitude;
//     srcLng = position.coords.longitude;
//     });
//   }
//   this.dir = {
//     origin: { latitude: 29.9809683, longitude: 31.3377553 },
//     destination: { latitude: dirLat, longitude: dirLng }
//   };


//  // prints the values correctly for origin and destination{latitude: 29.9809683, longitude: 31.3377553}

//   console.log('originDest', this.dir.origin, this.dir.destination);
//   //in the below url, dir.origin and dir.destination does not get the values
//   var p ='origin';
//   var d = 'destination';
//   window.open('https://www.google.com/maps/dir/?api=1&origin='+p+'&destination='+d+'&travelmode=driving','_blank' );
// }

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

 dataSource2 = [
  { RingId: 1001, FirstName: "John", LastName: "Doe", MobileNo: "9876543210", Email: "john.doe@example.com", DOB: "1990-01-15", Origin: "New York", Destination: "Los Angeles", Vehicle: "Sedan" },
  { RingId: 1002, FirstName: "Jane", LastName: "Smith", MobileNo: "9876543211", Email: "jane.smith@example.com", DOB: "1992-02-20", Origin: "Chicago", Destination: "Houston", Vehicle: "SUV" },
  { RingId: 1003, FirstName: "Alice", LastName: "Johnson", MobileNo: "9876543212", Email: "alice.johnson@example.com", DOB: "1985-03-25", Origin: "San Francisco", Destination: "Seattle", Vehicle: "Hatchback" },
  { RingId: 1004, FirstName: "Robert", LastName: "Brown", MobileNo: "9876543213", Email: "robert.brown@example.com", DOB: "1995-04-10", Origin: "Boston", Destination: "Miami", Vehicle: "Truck" },
  { RingId: 1005, FirstName: "Michael", LastName: "Davis", MobileNo: "9876543214", Email: "michael.davis@example.com", DOB: "1988-05-30", Origin: "Denver", Destination: "Las Vegas", Vehicle: "Van" },
  { RingId: 1006, FirstName: "Sarah", LastName: "Miller", MobileNo: "9876543215", Email: "sarah.miller@example.com", DOB: "1993-06-15", Origin: "Austin", Destination: "Dallas", Vehicle: "Convertible" },
  { RingId: 1007, FirstName: "David", LastName: "Wilson", MobileNo: "9876543216", Email: "david.wilson@example.com", DOB: "1987-07-05", Origin: "San Diego", Destination: "Phoenix", Vehicle: "Coupe" },
  { RingId: 1008, FirstName: "Emma", LastName: "Anderson", MobileNo: "9876543217", Email: "emma.anderson@example.com", DOB: "1996-08-12", Origin: "Nashville", Destination: "Atlanta", Vehicle: "Pickup" },
  { RingId: 1009, FirstName: "James", LastName: "Thomas", MobileNo: "9876543218", Email: "james.thomas@example.com", DOB: "1989-09-18", Origin: "Philadelphia", Destination: "Washington", Vehicle: "Minivan" },
  { RingId: 1010, FirstName: "Olivia", LastName: "Martinez", MobileNo: "9876543219", Email: "olivia.martinez@example.com", DOB: "1997-10-22", Origin: "Detroit", Destination: "Indianapolis", Vehicle: "Electric Car" },
  { RingId: 1011, FirstName: "Ethan", LastName: "Garcia", MobileNo: "9876543220", Email: "ethan.garcia@example.com", DOB: "1994-11-25", Origin: "San Antonio", Destination: "El Paso", Vehicle: "Sports Car" },
  { RingId: 1012, FirstName: "Ava", LastName: "Hernandez", MobileNo: "9876543221", Email: "ava.hernandez@example.com", DOB: "1991-12-30", Origin: "Orlando", Destination: "Tampa", Vehicle: "Hybrid" },
  { RingId: 1013, FirstName: "William", LastName: "Lopez", MobileNo: "9876543222", Email: "william.lopez@example.com", DOB: "1986-01-10", Origin: "Portland", Destination: "Sacramento", Vehicle: "Luxury Car" },
  { RingId: 1014, FirstName: "Sophia", LastName: "Gonzalez", MobileNo: "9876543223", Email: "sophia.gonzalez@example.com", DOB: "1998-02-15", Origin: "Charlotte", Destination: "Raleigh", Vehicle: "Bike" },
  { RingId: 1015, FirstName: "Mason", LastName: "Rodriguez", MobileNo: "9876543224", Email: "mason.rodriguez@example.com", DOB: "1990-03-18", Origin: "Salt Lake City", Destination: "Boise", Vehicle: "Van" },
  { RingId: 1016, FirstName: "Isabella", LastName: "Perez", MobileNo: "9876543225", Email: "isabella.perez@example.com", DOB: "1993-04-25", Origin: "Minneapolis", Destination: "St. Paul", Vehicle: "Sedan" },
  { RingId: 1017, FirstName: "Alexander", LastName: "Smith", MobileNo: "9876543226", Email: "alexander.smith@example.com", DOB: "1985-05-30", Origin: "Memphis", Destination: "Birmingham", Vehicle: "Hatchback" },
  { RingId: 1018, FirstName: "Mia", LastName: "White", MobileNo: "9876543227", Email: "mia.white@example.com", DOB: "1992-06-10", Origin: "Columbus", Destination: "Cincinnati", Vehicle: "Truck" },
  { RingId: 1019, FirstName: "Daniel", LastName: "Harris", MobileNo: "9876543228", Email: "daniel.harris@example.com", DOB: "1995-07-15", Origin: "Omaha", Destination: "Kansas City", Vehicle: "SUV" },
  { RingId: 1020, FirstName: "Charlotte", LastName: "Clark", MobileNo: "9876543229", Email: "charlotte.clark@example.com", DOB: "1988-08-20", Origin: "Louisville", Destination: "Lexington", Vehicle: "Convertible" }
];

}

      