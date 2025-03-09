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
  selector: 'app-fuel-list',
  templateUrl: './fuel-list.component.html',
  styleUrls: ['./fuel-list.component.scss']
})
export class FuelListComponent implements OnInit {
  @ViewChild(MatPaginator) paginatior: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['Sr.No','FuelFillDate','Vehicle','Quantity','FuelTotalPrice','FuelfilledBy','Comment','Image','Status','Actions'];
  displayedColumns2: string[] = ['Sr.No','FuelFillDate','Vehicle','Quantity','FuelTotalPrice','FuelfilledBy','Comment','Image','Status','Actions'];

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
    { id: 1, name: 'Approved' },
    { id: 2, name: 'Pending' },
    { id: 3, name: 'Rejected' }
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

deleteDetails(id){}

dataSource2 = [
  { Id: 1, FuelFillDate: '2024-03-08T14:30:00Z', Vehicle: 'Audi A4', Quantity: 10, FuelTotalPrice: 500, FuelfilledBy: 'Akshay', Comment: 'Refueled before a long trip', Image: 'https://makereceipt.com/images/gas-fuel-receipt-sample.jpg', Active: 1 },
  { Id: 2, FuelFillDate: '2024-03-07T10:15:00Z', Vehicle: 'BMW X5', Quantity: 15, FuelTotalPrice: 750, FuelfilledBy: 'Rohit', Comment: 'Refilled at highway pump', Image: 'https://makereceipt.com/images/gas-fuel-receipt-sample.jpg', Active: 2 },
  { Id: 3, FuelFillDate: '2024-03-06T18:45:00Z', Vehicle: 'Toyota Fortuner', Quantity: 12, FuelTotalPrice: 600, FuelfilledBy: 'Neha', Comment: 'Added fuel during trip', Image: 'https://makereceipt.com/images/gas-fuel-receipt-sample.jpg', Active: 1 },
  { Id: 4, FuelFillDate: '2024-03-05T08:10:00Z', Vehicle: 'Mercedes C200', Quantity: 20, FuelTotalPrice: 1000, FuelfilledBy: 'Vikram', Comment: 'Full tank refill', Image: 'https://makereceipt.com/images/gas-fuel-receipt-sample.jpg', Active: 3 },
  { Id: 5, FuelFillDate: '2024-03-04T16:20:00Z', Vehicle: 'Hyundai Creta', Quantity: 8, FuelTotalPrice: 400, FuelfilledBy: 'Priya', Comment: 'Refueled at city station', Image: 'https://makereceipt.com/images/gas-fuel-receipt-sample.jpg', Active: 1 },
  { Id: 6, FuelFillDate: '2024-03-03T12:05:00Z', Vehicle: 'Honda City', Quantity: 14, FuelTotalPrice: 700, FuelfilledBy: 'Karan', Comment: 'Added extra fuel for trip', Image: 'https://makereceipt.com/images/gas-fuel-receipt-sample.jpg', Active: 2 },
  { Id: 7, FuelFillDate: '2024-03-02T19:30:00Z', Vehicle: 'Ford Endeavour', Quantity: 18, FuelTotalPrice: 900, FuelfilledBy: 'Rahul', Comment: 'Highway fuel station refill', Image: 'https://makereceipt.com/images/gas-fuel-receipt-sample.jpg', Active: 3 },
  { Id: 8, FuelFillDate: '2024-03-01T07:55:00Z', Vehicle: 'Volkswagen Polo', Quantity: 9, FuelTotalPrice: 450, FuelfilledBy: 'Sonia', Comment: 'City fuel station', Image: 'https://makereceipt.com/images/gas-fuel-receipt-sample.jpg', Active: 1 },
  { Id: 9, FuelFillDate: '2024-02-28T15:40:00Z', Vehicle: 'Tata Harrier', Quantity: 16, FuelTotalPrice: 800, FuelfilledBy: 'Ajay', Comment: 'Needed extra fuel', Image: 'https://makereceipt.com/images/gas-fuel-receipt-sample.jpg', Active: 2 },
  { Id: 10, FuelFillDate: '2024-02-27T11:25:00Z', Vehicle: 'Maruti Suzuki Swift', Quantity: 7, FuelTotalPrice: 350, FuelfilledBy: 'Pooja', Comment: 'Regular refill', Image: 'https://makereceipt.com/images/gas-fuel-receipt-sample.jpg', Active: 1 },
  { Id: 11, FuelFillDate: '2024-02-26T09:50:00Z', Vehicle: 'Nissan Magnite', Quantity: 11, FuelTotalPrice: 550, FuelfilledBy: 'Harish', Comment: 'Highway stop fuel', Image: 'https://makereceipt.com/images/gas-fuel-receipt-sample.jpg', Active: 3 },
  { Id: 12, FuelFillDate: '2024-02-25T18:10:00Z', Vehicle: 'Skoda Octavia', Quantity: 13, FuelTotalPrice: 650, FuelfilledBy: 'Rakesh', Comment: 'City fuel station', Image: 'https://makereceipt.com/images/gas-fuel-receipt-sample.jpg', Active: 2 },
  { Id: 13, FuelFillDate: '2024-02-24T14:00:00Z', Vehicle: 'Kia Seltos', Quantity: 17, FuelTotalPrice: 850, FuelfilledBy: 'Neeraj', Comment: 'Trip fuel top-up', Image: 'https://makereceipt.com/images/gas-fuel-receipt-sample.jpg', Active: 1 },
  { Id: 14, FuelFillDate: '2024-02-23T21:30:00Z', Vehicle: 'MG Hector', Quantity: 19, FuelTotalPrice: 950, FuelfilledBy: 'Manoj', Comment: 'Emergency fuel stop', Image: 'https://makereceipt.com/images/gas-fuel-receipt-sample.jpg', Active: 2 },
  { Id: 15, FuelFillDate: '2024-02-22T08:45:00Z', Vehicle: 'Mahindra XUV700', Quantity: 21, FuelTotalPrice: 1050, FuelfilledBy: 'Sachin', Comment: 'Long drive fuel stop', Image: 'https://makereceipt.com/images/gas-fuel-receipt-sample.jpg', Active: 3 },
  { Id: 16, FuelFillDate: '2024-02-21T17:15:00Z', Vehicle: 'Renault Duster', Quantity: 6, FuelTotalPrice: 300, FuelfilledBy: 'Deepa', Comment: 'Topped up fuel tank', Image: 'https://makereceipt.com/images/gas-fuel-receipt-sample.jpg', Active: 1 },
  { Id: 17, FuelFillDate: '2024-02-20T12:35:00Z', Vehicle: 'Honda Civic', Quantity: 10, FuelTotalPrice: 500, FuelfilledBy: 'Vikas', Comment: 'Fuel station near work', Image: 'https://makereceipt.com/images/gas-fuel-receipt-sample.jpg', Active: 2 },
  { Id: 18, FuelFillDate: '2024-02-19T07:20:00Z', Vehicle: 'Jeep Compass', Quantity: 8, FuelTotalPrice: 400, FuelfilledBy: 'Amit', Comment: 'Morning fuel stop', Image: 'https://makereceipt.com/images/gas-fuel-receipt-sample.jpg', Active: 3 },
  { Id: 19, FuelFillDate: '2024-02-18T22:50:00Z', Vehicle: 'Toyota Innova', Quantity: 14, FuelTotalPrice: 700, FuelfilledBy: 'Varun', Comment: 'Night travel fuel', Image: 'https://makereceipt.com/images/gas-fuel-receipt-sample.jpg', Active: 1 },
  { Id: 20, FuelFillDate: '2024-02-17T05:40:00Z', Vehicle: 'Maruti Brezza', Quantity: 9, FuelTotalPrice: 450, FuelfilledBy: 'Megha', Comment: 'Early morning refill', Image: 'https://makereceipt.com/images/gas-fuel-receipt-sample.jpg', Active: 2 }
];
}
