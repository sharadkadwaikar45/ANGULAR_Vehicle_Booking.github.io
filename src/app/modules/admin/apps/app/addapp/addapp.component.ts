import { Component, OnInit,ViewChild ,TemplateRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators,NgForm } from '@angular/forms';
import { RingService } from 'app/modules/service/ring.service'
import { FuseValidators } from '@fuse/validators';
import { GlobalService } from 'app/modules/service/global.service';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addapp',
  templateUrl: './addapp.component.html',
  styleUrls: ['./addapp.component.scss']
})
export class AddappComponent implements OnInit {
  appForm : FormGroup; 
  showLoader: boolean = false;
  updatebutton : boolean = false;
  Loader : boolean = false;
  appId: any;
  appData: any;
  domainListData: any[] = [];
  selectedDomains: any[] = [];
  domainIds: any;
  primaryDomainId: any;

  constructor(
    private _formBuilder: FormBuilder,
    private ringService : RingService,
    public globalService: GlobalService,
    public dialog: MatDialog,
    public _activatedroute: ActivatedRoute,
    public _route: Router, ) { }

    ngOnInit(): void {
      this.fetchDomainList()
      this.appForm = this._formBuilder.group({
        appName: ['',[Validators.required]],
        description: [''],
        packageName: ['',[Validators.required]],
        apiUrl: ['',[Validators.required]],
        domain: ['',[Validators.required]],
     });
    
     const routeParams = this._activatedroute.snapshot.params;
     if (routeParams.appId) {
      this.updatebutton = true
      this.Loader = true
      this.appId = routeParams.appId;
      this.editApp();
    }

}

fetchDomainList(){
  this.ringService.fetchDomainList().subscribe((res) =>{
  if(res.response_message == "Success"){
     this.domainListData = res.response_data
  }
})
}

setPrimary(domainId): void {
  const selectedValue = domainId;
  this.primaryDomainId = domainId
}

changeDomains(selected: any) {
  this.selectedDomains = selected;
}

removeDomains(index: number, id: any) {
  if (id != null) {
    this.selectedDomains = this.selectedDomains.filter(item => item.Id !== id);
    const DomainsControl = this.appForm.get('domain');
    if (DomainsControl) {
      DomainsControl.setValue(this.selectedDomains);
    }
  }
}

editApp(){
  this.ringService.editApp(this.appId).subscribe((res) =>{
  if(res.response_message == "Success"){
     this.appData = res.response_data

     this.appForm.get('appName').setValue(this.appData.AppName);
     this.appForm.get('description').setValue(this.appData.Description);
     this.appForm.get('packageName').setValue(this.appData.PackageName);
     this.appForm.get('apiUrl').setValue(this.appData.ApiUrl);
     this.primaryDomainId = this.appData.PrimaryDomain
     setTimeout(()=>{
      this.domainIds = this.appData.Domains.split(',')
      if(this.domainListData != undefined){
       this.domainIds.forEach((item) => {
         this.domainListData.forEach((itemm) => {
         if (item == itemm.Id) {
           this.selectedDomains.push(itemm);
           this.changeDomains;
         }
       });
       this.appForm.get('domain').setValue(this.selectedDomains);
         this.changeDomains(this.appForm.value.domain);
     })
       }
     },1000)
    

     this.Loader = false
  }
})
}

insertAppDetails(){
  if(this.appForm.status == "INVALID"){
    this.appForm.markAllAsTouched();
    Swal.fire('', 'Please fill all mandatory data', 'error')
      return
   }

  this.showLoader = true
  let AppName = this.appForm.value.appName.charAt(0).toUpperCase() + this.appForm.value.appName.slice(1)
  let description = this.appForm.value.description
  let PackageName = this.appForm.value.packageName
  let ApiUrl = this.appForm.value.apiUrl
  let Domain = this.selectedDomains
  let PrimaryDomain = this.primaryDomainId

  this.ringService.insertAppData(AppName,description,PackageName,ApiUrl,PrimaryDomain,Domain).subscribe((res) =>{
    if(res.response_message == "Success"){
      this.showLoader = false
      Swal.fire({
        text: 'App details added successful',
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: "#3290d6 !important",
        confirmButtonText: 'Ok'
      }).then((result) => {
        if (result.isConfirmed) {
          this._route.navigate(['apps/apps/applist']);
        } 
      });
    }else{
      this.showLoader = false
      Swal.fire('', res.response_message , 'error')
    }
    
  })
}

updateAppDetails(){
  if(this.appForm.status == "INVALID"){
    this.appForm.markAllAsTouched();
    Swal.fire('', 'Please fill all mandatory data', 'error')
      return
   }
  this.showLoader = true
  let AppName = this.appForm.value.appName.charAt(0).toUpperCase() + this.appForm.value.appName.slice(1)
  let description = this.appForm.value.description
  let PackageName = this.appForm.value.packageName
  let ApiUrl = this.appForm.value.apiUrl
  let Domain = this.selectedDomains
  let PrimaryDomain = this.primaryDomainId

  this.ringService.updateApp(this.appId,AppName,description,PackageName,ApiUrl,PrimaryDomain,Domain).subscribe((res) =>{
    if(res.response_message == "Success"){
      this.showLoader = false
      Swal.fire({
        text: 'App details updated successful',
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: "#3290d6 !important",
        confirmButtonText: 'Ok'
      }).then((result) => {
        if (result.isConfirmed) {
          this._route.navigate(['apps/apps/applist']);
        } 
      });
    }else{
      this.showLoader = false
      Swal.fire('', res.response_message , 'error')
    }
    
  })
}

back(){
  this._route.navigate(['apps/apps/applist']);
}
}
