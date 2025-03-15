import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingSystemService } from 'app/modules/service/bookingsystem.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addvender',
  templateUrl: './addvender.component.html',
  styleUrls: ['./addvender.component.scss']
})
export class AddvenderComponent implements OnInit {
infoForm: FormGroup;
Loader = false;
showLoader = false;
updatebutton = false;
formName = "Add";
Id: any;
statusList = [
  { id: 1, name: 'Active' },
  { id: 3, name: 'Inactive' },
];

constructor(
  private _formBuilder: FormBuilder,
  private BookingSystemService: BookingSystemService,
  public _route: Router, 
  public _activatedroute: ActivatedRoute,
) {}

ngOnInit(): void {
  const routeParams = this._activatedroute.snapshot.params;
  this.initializeForm()
 
  if (routeParams.Id) {
        this.formName = 'Edit';
        this.updatebutton = true
        this.Loader = true
        this.Id = routeParams.Id;
        this.getDataById(this.Id)
    }
}

initializeForm() {
  this.infoForm = this._formBuilder.group({
    VendorName: ['', Validators.required],
    ContactPerson: ['', Validators.required],
    PhoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
    Email: ['', [Validators.required, Validators.email]],
    CompanyName: ['', Validators.required],
    Address: ['', Validators.required],
    Status: ['', Validators.required]
  });
}

insert() {
  if (this.infoForm.invalid) {
    return;
  }

  this.showLoader = true;
  this.BookingSystemService.addData(this.infoForm.value).subscribe(
    (response) => {
      this.showLoader = false;
      this._route.navigate(['apps/vender/list'])
      this.infoForm.reset();
      Swal.fire('', 'Data added successfully!', 'success')
    },
    (error) => {
      this.showLoader = false;
      Swal.fire('', 'Something went wrong..', 'error')
    }
  );
}

getDataById(id){
  this.BookingSystemService.getDataById(id).subscribe(
    (response) => {
      this.bindData(response)
    })
}

bindData(item) {
  this.infoForm.patchValue({
    VendorName: item.VendorName,
    ContactPerson: item.ContactPerson,
    PhoneNumber: item.PhoneNumber,
    Email: item.Email,
    CompanyName: item.CompanyName,
    Address: item.Address,
    Status: item.Status
  });
  this.Loader = false
}

update() {
  if (this.infoForm.invalid || this.Id === null) {
    return;
  }

  this.showLoader = true;
  this.BookingSystemService.updateData(Number(this.Id), this.infoForm.value).subscribe(
    (response) => {
      console.log(response)
      this.showLoader = false;
      this._route.navigate(['apps/vender/list'])
      Swal.fire('', 'Data updated successfully!', 'success')
      this.infoForm.reset();
      this.updatebutton = false;
      this.formName = "Add";
      this.Id = null;
    },
    (error) => {
      this.showLoader = false;
      Swal.fire('', 'Something went wrong..', 'error')
    }
  );
}

back() {
  this.infoForm.reset();
  this.updatebutton = false;
  this.formName = "Add";
  this.Id = null;
  this._route.navigate(['apps/vender/list'])
}

}
