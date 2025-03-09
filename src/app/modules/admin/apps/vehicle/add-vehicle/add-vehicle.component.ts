import { Component, OnInit,ViewChild ,TemplateRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators,NgForm } from '@angular/forms';
import { RingService } from 'app/modules/service/ring.service'
import { FuseValidators } from '@fuse/validators';
import { GlobalService } from 'app/modules/service/global.service';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss']
})

export class AddVehicleComponent implements OnInit {
  detailsForm : FormGroup; 
  showLoader: boolean = false;
  updatebutton : boolean = false;
  Loader : boolean = false;
  Id: any;
  retriveData: any;
  formName :string = 'Add'
  
  constructor(
    private _formBuilder: FormBuilder,
    private ringService : RingService,
    public globalService: GlobalService,
    public dialog: MatDialog,
    public _activatedroute: ActivatedRoute,
    public _route: Router, ) { }

  ngOnInit(): void {
      this.detailsForm = this._formBuilder.group({
        Name: ['',[Validators.required]],
        regNo: ['',[Validators.required]],
        chassisNo: ['',[Validators.required]],
        modelNo: ['',[Validators.required]],
        engineNo: ['',[Validators.required]],
        vehicleType: ['',[Validators.required]],
        vehColor: ['',[Validators.required]],
        description: ['']
     });

     const routeParams = this._activatedroute.snapshot.params;
     if (routeParams.id) {
      this.formName = 'Edit';
      this.updatebutton = true
      this.Loader = true
      this.Id = routeParams.id;
      this.edit();
    }
}

edit(){
  this.ringService.editApp(this.Id).subscribe((res) =>{
  if(res.response_message == "Success"){
     this.retriveData = res.response_data

    //  this.detailsForm.get('Name').setValue(this.retriveData.AppName);
    //  this.detailsForm.get('description').setValue(this.retriveData.Description);
    //  this.detailsForm.get('packageName').setValue(this.retriveData.PackageName);
    //  this.detailsForm.get('apiUrl').setValue(this.retriveData.ApiUrl);
     this.Loader = false
  }
})
}

back(){
  this._route.navigate(['apps/vehicle/list'])
}
}
