import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-driver',
  templateUrl: './view-driver.component.html',
  styleUrls: ['./view-driver.component.scss']
})
export class ViewDriverComponent implements OnInit {
  @ViewChild('callAPIDialog') callAPIDialog: TemplateRef<any>;

  Id: string;
  image: any;
  multepleEventsDocs:any[] = [{image:'assets/images/icons/movingcar.gif'},{image:'assets/images/icons/movingcar.gif'}]
  loader: boolean = false;
  
  constructor(
    public _route: Router,
    public dialog: MatDialog,
    public _activatedroute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const routeParams = this._activatedroute.snapshot.params;
    if (routeParams.id) {
     this.loader = true; 
     this.Id = routeParams.id;
     this.bindData();
   }
  }

  bindData(){
    this.loader = false;
  }

  editDetails(){
    this._route.navigate(['apps/driver/edit/' + this.Id]); 
  }

  openImgDialog(img) {
    const dialogRef = this.dialog.open(this.callAPIDialog);
    dialogRef.afterClosed().subscribe((result) => { });
    this.image = img;
  }

  close() {
    this.dialog.closeAll();
  }

  back(){
      this._route.navigate(['apps/driver/list'])
  } 

}
