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
  
      status = [
          { id: 1, name: 'Active' },
          { id: 2, name: 'Pending' },
          { id: 3, name: 'Inactive' },
      ];
  
      checkboxes = [
        { label: 'Fuel Fill Date', element:'FuelFillDate', isChecked: true },
        { label: 'Vehicle', element:'Vehicle', isChecked: true },
        { label: 'Quantity', element:'Quantity', isChecked: true },
        { label: 'Fuel Total Price', element:'FuelTotalPrice', isChecked: true },
        { label: 'Fuel filled By', element:'FuelfilledBy', isChecked: true },
        { label: 'Address', element:'Address', isChecked: true },
        { label: 'Comment', element:'Comment', isChecked: true },
        { label: 'Image', element:'Image', isChecked: true },
      ];
  
      constructor(
          private _formBuilder: FormBuilder,
          public _route: Router,
          public dialog: MatDialog,
          public _activatedroute: ActivatedRoute,
          private BookingSystemService: BookingSystemService, 
      ) {}
  
      ngOnInit(): void {
          this.BookingSystemService.getArray("fuel")
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
  
      search() {
          this.page = 1;
          this.pageIndex = 0
          this.pageSize = 100;
          this.startNum = 0;
          this.getData();
          this.searchField = !this.searchField;
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
  
      deleteDetails(id: number) {
          if (confirm('Are you sure you want to delete details')) {
              this.BookingSystemService.deleteData(id).subscribe((data) => {
                  Swal.fire('', 'Data deleted succesfully', 'success')
                  this.getData()
              })
          }
      }
  
      onCheckboxChange(event: Event) {
          this.displayedColumns = [];
          let demoArray: any[] = [];
          this.checkboxes.forEach((item) => {
              if (item.isChecked == false) {
                  demoArray.push(item.element);
              }
          });
  
          this.displayedColumns = this.displayedColumns2.filter(
              (element) => !demoArray.includes(element)
          );
      }

      updateStatus(){}

  }
  