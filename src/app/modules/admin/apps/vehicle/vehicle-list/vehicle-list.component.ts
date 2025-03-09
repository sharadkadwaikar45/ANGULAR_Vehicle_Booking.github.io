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
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {
  @ViewChild(MatPaginator) paginatior: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['Sr.No','Name','RegNumber','ChassisNo','ModelNo','Type','Status','Actions'];
  displayedColumns2: string[] = ['Sr.No','Name','RegNumber','ChassisNo','ModelNo','Type','Status','actions'];

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
    {id: 1, name: 'Active'},
    {id: 0, name: 'Inactive'},
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

//   DetailsList(){
//     this.ringService.UserList(this.page,this.pageSize,this.startNum,this.columnIndex,this.sortValue,this.listDetails.value.search).subscribe((res) =>{
//     if(res.response_message == "Success"){
//        this.listDetailsData = res.response_data
//        this.recordsTotal = res.total_records
//        this.recordsFiltered = res.filter_records
//        if(this.listDetailsData?.length != 0){
//             this.dataSource = new MatTableDataSource<any>(this.listDetailsData);
//             //this.dataSource.sort = this.sort;
//             this.listLoader = false;
//        }else{
//             this.listLoader = false;
//        }
//     }else{
//       this.listLoader = false;
//     }
//   })
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
  this._route.navigate(['apps/vehicle/add']);
}

viewDetails(id){
  this._route.navigate(['apps/vehicle/view/' + id]);
}

editDetails(id){
  this._route.navigate(['apps/vehicle/edit/' + id]); 
}
deleteDetails(id){}

dataSource2 = [
  { Id: 1, FirstName: "John", LastName: "Doe", RegistrationNo: "MH12AB1234", ChassisNo: "CHS123456789", ModelNo: "Swift VXI", Type: "Sedan", Active: 1 },
  { Id: 2, FirstName: "Jane", LastName: "Smith", RegistrationNo: "DL10CD5678", ChassisNo: "CHS987654321", ModelNo: "Honda City", Type: "Sedan", Active: 1 },
  { Id: 3, FirstName: "Alice", LastName: "Brown", RegistrationNo: "KA05EF9012", ChassisNo: "CHS112233445", ModelNo: "Hyundai Creta", Type: "SUV", Active: 0 },
  { Id: 4, FirstName: "Bob", LastName: "Williams", RegistrationNo: "MH01GH3456", ChassisNo: "CHS556677889", ModelNo: "Tata Nexon", Type: "SUV", Active: 1 },
  { Id: 5, FirstName: "Charlie", LastName: "Davis", RegistrationNo: "TN09IJ7890", ChassisNo: "CHS998877665", ModelNo: "Ford Ecosport", Type: "SUV", Active: 1 },
  { Id: 6, FirstName: "David", LastName: "Miller", RegistrationNo: "RJ14KL1234", ChassisNo: "CHS667788990", ModelNo: "Maruti Alto", Type: "Hatchback", Active: 0 },
  { Id: 7, FirstName: "Eve", LastName: "Martinez", RegistrationNo: "GJ18MN5678", ChassisNo: "CHS223344556", ModelNo: "Toyota Fortuner", Type: "SUV", Active: 1 },
  { Id: 8, FirstName: "Frank", LastName: "Garcia", RegistrationNo: "WB20OP9012", ChassisNo: "CHS334455667", ModelNo: "Honda Civic", Type: "Sedan", Active: 1 },
  { Id: 9, FirstName: "Grace", LastName: "Rodriguez", RegistrationNo: "PB30QR3456", ChassisNo: "CHS778899000", ModelNo: "Mercedes Benz C-Class", Type: "Luxury", Active: 0 },
  { Id: 10, FirstName: "Hank", LastName: "Martinez", RegistrationNo: "AP22ST7890", ChassisNo: "CHS445566778", ModelNo: "Hyundai i20", Type: "Hatchback", Active: 1 },
  { Id: 11, FirstName: "Isaac", LastName: "Lopez", RegistrationNo: "UP11UV1234", ChassisNo: "CHS556677889", ModelNo: "Kia Seltos", Type: "SUV", Active: 1 },
  { Id: 12, FirstName: "Jack", LastName: "Gonzalez", RegistrationNo: "MP15WX5678", ChassisNo: "CHS667788990", ModelNo: "BMW X5", Type: "Luxury", Active: 0 },
  { Id: 13, FirstName: "Kelly", LastName: "Wilson", RegistrationNo: "HR26YZ9012", ChassisNo: "CHS112233445", ModelNo: "MG Hector", Type: "SUV", Active: 1 },
  { Id: 14, FirstName: "Leo", LastName: "Anderson", RegistrationNo: "CG07AA3456", ChassisNo: "CHS223344556", ModelNo: "Jeep Compass", Type: "SUV", Active: 1 },
  { Id: 15, FirstName: "Mia", LastName: "Thomas", RegistrationNo: "JK08BB7890", ChassisNo: "CHS334455667", ModelNo: "Tesla Model 3", Type: "Electric", Active: 1 },
  { Id: 16, FirstName: "Nathan", LastName: "Taylor", RegistrationNo: "HP09CC1234", ChassisNo: "CHS778899000", ModelNo: "Toyota Innova", Type: "MUV", Active: 1 },
  { Id: 17, FirstName: "Olivia", LastName: "Harris", RegistrationNo: "BR31DD5678", ChassisNo: "CHS445566778", ModelNo: "Renault Kwid", Type: "Hatchback", Active: 0 },
  { Id: 18, FirstName: "Peter", LastName: "Clark", RegistrationNo: "AS12EE9012", ChassisNo: "CHS556677889", ModelNo: "Mahindra Thar", Type: "SUV", Active: 1 },
  { Id: 19, FirstName: "Quincy", LastName: "Lewis", RegistrationNo: "NL04FF3456", ChassisNo: "CHS667788990", ModelNo: "Maruti Baleno", Type: "Hatchback", Active: 1 },
  { Id: 20, FirstName: "Rachel", LastName: "Walker", RegistrationNo: "TR06GG7890", ChassisNo: "CHS112233445", ModelNo: "Skoda Superb", Type: "Sedan", Active: 1 }
];

}
