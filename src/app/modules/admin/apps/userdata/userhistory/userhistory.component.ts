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
import { AppDateAdapter, APP_DATE_FORMATS } from '../../../../service/date.adapter';
import {  MAT_DATE_FORMATS } from '@angular/material/core';
import { DateAdapter } from '@angular/material/core';
import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStates,
  ApexGrid,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexFill
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  labels: any;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  subtitle: ApexTitleSubtitle;
  colors: string[];
  states: ApexStates;
  title: ApexTitleSubtitle;
  legend: ApexLegend;
  tooltip: any; //ApexTooltip;
  responsive: ApexResponsive[];
  fill: ApexFill;
};

export type ChartOptions2 = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  title: ApexTitleSubtitle;

};

@Component({
  selector: 'app-userhistory',
  templateUrl: './userhistory.component.html',
  styleUrls: ['./userhistory.component.scss'],
  providers: [
    {
      provide: DateAdapter, useClass: AppDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    },
  ]

})
export class UserhistoryComponent implements OnInit ,AfterViewInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions2>;

  @ViewChild(MatPaginator) paginatior: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['Sr.No','AppName','DomainName','PackageName','PageName','VisitTime'];
  displayedColumns2: string[] = ['Sr.No','AppName','DomainName','PackageName','PageName','VisitTime'];
  dataSource : any;

  historyList: any[];
  searchForm : FormGroup;
  graphMonth : FormGroup;
  userId: any;
  Loader : boolean = false
  searchButton : boolean = false;
  searchField : boolean = false;
  searchLoader : boolean = false;
  domainLoader : boolean = false
  searchControl = new FormControl();
  appList: any;
  domainList: any;
  page: number = 1;
  pageSize: number = 10;
  startNum:  number = 0;
  sortValue: string = "desc";
  search: string = "";
  columnIndex: number = 0;
  recordsTotal: any;
  recordsFiltered: any;
  MinDate = new Date(new Date().setMonth(new Date().getMonth() - 12));
  MaxDate = new Date(new Date());
  pageList: any;
  userList: any;
  menuList: any;
  countData: any;
  month: string;
  monthLoader:boolean = false
  months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  year: any;
  gahsjd: number;
  visits: any;

  checkboxes = [
    { label: 'App', element:'AppName', isChecked: true },
    { label: 'Domain', element:'DomainName', isChecked: true },
    { label: 'Package', element:'PackageName', isChecked: true },
    { label: 'Page', element:'PageName', isChecked: true },
    { label: 'Visit Date & Time', element:'VisitTime', isChecked: true }
  ];

  constructor(
    private _formBuilder: FormBuilder,
    private ringService : RingService,
    public _route: Router,
    public dialog: MatDialog,
    public _activatedroute: ActivatedRoute,
    ){
      this.chartOptions = {
        series: [
          {
            name: "My-series",
            data: []
          }
        ],
        chart: {
          height:200,
          type: "bar",

        },
        title: {
          text: "App Visit Count"
        },
        xaxis: {
          categories: []
        },
        colors: [],
      };
      
      this.chartOptions2 = {
        series: [],
        chart: {
          width: 500,
          type: "pie",
        },
        labels: [],
        responsive: [
          {
            breakpoint: 400,
            options: {
              chart: {
                width: 100,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      };
     }

    ngOnInit(): void {
      var d = new Date();
      d.setMonth(d.getMonth() );
      this.month = d.toLocaleString("default", { month: "short" });
      this.year = d.getFullYear();
      this.gahsjd = d.getMonth()

      this.fetchAppList();
      this.normalDomainList();
      this.fetchPageList();
      this.fetchMenuList();

      this.searchForm = this._formBuilder.group({
        app: [''],
        domain:[''],
        fromdate:[''],
        todate:[''],
        page:[''],
        user:[''],
      })

    this.graphMonth = this._formBuilder.group({
      monthName:['']
    })
     
      const routeParams = this._activatedroute.snapshot.params;
        if (routeParams.userId) {
          this.Loader = true
          this.userId = routeParams.userId;
          this.fetchUserList();
          this.FetchAppHistory()
          this.getHistoryOfUser(this.userId) 
          
        }
    }

    ngAfterViewInit(): void {
      setTimeout(()=>{
        this.graphMonth.get('monthName').setValue(this.month)
        this.changeMonth(this.month)
      },1000)
    }
 

    getHistoryOfUser(userId){
      this.userId = userId
      this.ringService.getHistoryOfUser(this.userId).subscribe((res) =>{
        if(res.response_message == "Success"){
            this.countData = res.response_data
            let AppNames = this.countData.AppNames
            let newData: number[] = this.countData.UseCount;

            this.chartOptions = {
              series: [
                {
                  name: "Visitors",
                  data: newData
                }
              ],
              chart: {
                height:300,
                type: "bar",
               foreColor: '#373d3f'
              },
              title: {
                text: "Overall App Visit Count"
              },
              dataLabels: {
                style: {
                  colors: ['#feb019']
                }
              },
              xaxis: {
                categories: AppNames
              },
              colors: ['#164a46', '#00E396', '#FEB019', '#FF4560', '#775DD0', 
                '#546E7A', '#26a69a', '#D10CE8', '#7C4DFF'], 
        
            };  
            this.Loader = false
        }
      })
    }

    changeMonth(month){
      if(month != ''){
        this.monthLoader = true
        this.ringService.getHistoryOfUserByMonth(this.userId,month).subscribe((res) =>{
          let AppNames = res.response_data.AppNames
          let newData: number[] = res.response_data.UseCount;
          this.visits = res.response_data.Visits
          this.chartOptions2 = {
            series:newData,
            chart: {
              width: 500,
              type: "pie",
            },
            labels: AppNames,
            title: {
              text: "Monthly App Visit Count"
            },
            responsive: [
              {
                breakpoint: 400,
                options: {
                  chart: {
                    width: 200,
                  },
                  legend: {
                    position: "bottom",
                  },
                },
              },
            ],
          };
          setTimeout(() => { this.monthLoader = false; }, 500);
         
        })
      }
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
      return [day, month, year].join(' ') + ' ' + [hours, minutes, seconds].join(':');
      // return [day, month, year].join(' ') ;
    }

    applyFilter() {
      // this.dataSource.filter = filterValue.trim().toLowerCase();
      this.page = 1;
      this.searchLoader = true
      setTimeout(() => { this.searchLoader = false; }, 500);
      this.FetchAppHistory()
    }

    onPageChange(event: PageEvent): void {
      this.page = event.pageIndex + 1;
      this.pageSize = event.pageSize;
      this.startNum = (this.pageSize * (event.pageIndex))
      this.FetchAppHistory()
    }
    
    onSortChange(event: MatSort) {
      this.sortValue = event.direction
      this.columnIndex = this.displayedColumns?.indexOf(event.active);
      this.FetchAppHistory()
    }

    searchInput(){
      this.searchField = !this.searchField;
    }

    fetchAppList(){
      this.ringService.fetchAppList().subscribe((res) =>{
        if(res.response_message == "Success"){
           this.appList= res.response_data
        }
      })
    }

    fetchUserList(){
      this.ringService.fetchUserList().subscribe((res) =>{
      if(res.response_message == "Success"){
         this.userList = res.response_data
         
         if(this.userId !=''){
          let user
          this.userList.forEach((item)=>{
           if(item.Id == this.userId){
             user = item.Id
           }
           })
         this.searchForm.get('user').setValue(user)
         }
        
      }
    })
    }
  
    normalDomainList(){
      this.ringService.fetchDomainList().subscribe((res) =>{
      if(res.response_message == "Success"){
         this.domainList = res.response_data
      }
    })
    } 

    fetchDomainList(appId){
      this.domainLoader = true
        this.ringService.getDomainByAppId(appId).subscribe((res) =>{
          if(res.response_message == "Success"){
             this.domainList = res.response_data
             this.domainLoader = false
          }else{
            this.domainLoader = false
          }
    })
  }

  fetchPageList(){
    this.ringService.fetchPages().subscribe((res) =>{
      if(res.response_message == "Success"){
         this.pageList = res.response_data
      }
    })
  }

  fetchMenuList(){
    this.ringService.fetchMenuList().subscribe((res) =>{
    if(res.response_message == "Success"){
       this.menuList = res.response_data
    }
  })
  }



  userdata(userId){
    if(userId!= ''){
      this.userId = userId
    }
  }

  reset(){
    this.searchForm.get('app').setValue("")
    this.searchForm.get('domain').setValue("")
    this.searchForm.get('page').setValue("")
    this.searchForm.get('fromdate').setValue("")
    this.searchForm.get('todate').setValue("")

  }

  searchHistory(){
  this.searchButton = true
  this.FetchAppHistory()
  this.userId = this.searchForm.value.user
  this.getHistoryOfUser(this.userId) 
  this.changeMonth(this.month)
  }

 

  FetchAppHistory(){
      let appId = this.searchForm.value.app
      let domainId = this.searchForm.value.domain
      let PageName = this.searchForm.value.page
      let fromdate = this.searchForm.value.fromdate
      let todate = this.searchForm.value.todate
      if(this.searchForm.value.user !=''){
        this.userId = this.searchForm.value.user
      }
      this.ringService.FetchAppHistory(this.page,this.pageSize,this.startNum,this.columnIndex,this.sortValue,this.search,
        appId,this.userId,domainId,fromdate,todate,PageName).subscribe((res) =>{
        if(res.response_message == "Success"){
          this.historyList = res.response_data
          this.recordsTotal = res.total_records
         this.recordsFiltered = res.filter_records
          if(this.historyList?.length != 0){
           this.dataSource = new MatTableDataSource<any>(this.historyList);
           this.Loader = false;
           this.searchButton = false
       }else{
         this.Loader = false;
         this.searchButton = false
       }
       }else{
         this.Loader = false;
       }
  })
  }



back(){
  this._route.navigate(['apps/userdata/userlist']);

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
