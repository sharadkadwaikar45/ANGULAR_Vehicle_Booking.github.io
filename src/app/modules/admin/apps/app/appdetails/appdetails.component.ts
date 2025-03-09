import { Component, OnInit,ViewChild ,TemplateRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators,NgForm, FormArray } from '@angular/forms';
import { RingService } from 'app/modules/service/ring.service'
import { FuseValidators } from '@fuse/validators';
import { GlobalService } from 'app/modules/service/global.service';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
interface Icons {
  id: string;
  name: string
}
interface routerLink{
  id: number;
  name: string
}
interface PlanValidity {
  id: string;
  name: string
}
@Component({
  selector: 'app-appdetails',
  templateUrl: './appdetails.component.html',
  styleUrls: ['./appdetails.component.scss']
})
export class AppdetailsComponent implements OnInit {
  @ViewChild('callAPIDialog1') callAPIDialog1: TemplateRef<any>;
  @ViewChild('callAPIDialog2') callAPIDialog2: TemplateRef<any>;
  @ViewChild('callAPIDialog3') callAPIDialog3: TemplateRef<any>;
  @ViewChild('callAPIDialog4') callAPIDialog4: TemplateRef<any>;
  @ViewChild('callAPIDialog5') callAPIDialog5: TemplateRef<any>;

  appForm : FormGroup;
  menuForm : FormGroup; 
  addMenuForm: FormGroup;
  imagesForm : FormGroup;
  domains: FormGroup;
  gettingDomains : boolean = false
  appListLoader : boolean = false
  appList:any
  appListData : any
  appId: any;
  isDataBound : boolean = false
  showLoader: boolean = false;
  updatebutton : boolean = false;
  selectedMenu: any = [];
  selectedDomains: any[] = [];

  menuListData: any=[];
  menuIds: any;
  MenuDomainMasterId: any;
  bannerMaster: any;
  image: any;
  uploadDocs1: any;
  docLoader : boolean = false;
  tempDocumentArray2: any;

  menuData: any;
  menuMasterId : any;
  orders: any=[];
  pageListData: any;
  Loader : boolean = false;
  routerlink: any;
  isChecked: any;
  Icons: Icons[] = [
    {id: '1' , name:'SVG'}]
  
RoutrLink: routerLink[]=[
    {id : 1 , name:'Page Link'},
    {id : 2 , name:'Page Component'}
]

iconList: string[] = ['appointment.png','healthdeclare.png', 'health-insurance.png',
                      'ipd.png', 'logout.png', 'opd.png', 'previous-visit.png', 
                      'profile.png','Switch.png', 'vitals.png'];


planForm : FormGroup; 
descriptionData : FormGroup;
discountValue: number = 0;
selectedPlanMenus: any = [];
subscribeMenuList: any
showAddButton : boolean = false;
planData: any = [];
planMasterId : any;
PlanValidity: PlanValidity[] = [
  {id: '1' , name:'6 Months'},
  {id: '2' , name:'12 Months'},
  {id: '3' , name:'18 Months'},
  {id: '4' , name:'24 Months'}
]
  domainListData: any;
  appIdforRadio: any;
constructor(
    private _formBuilder: FormBuilder,
    private ringService : RingService,
    public globalService: GlobalService,
    public dialog: MatDialog,
    public _activatedroute: ActivatedRoute,
    public _route: Router, ) { }

ngOnInit(): void {
    this.fetchAppList()
    this.fetchDomainList()
    this.fetchMenuList();
    this.fetchPageList();
    this.getSubscribeMenuList();
    this.appForm = this._formBuilder.group({
      appId: [''],
    });

    this.domains = this._formBuilder.group({
      radio: [''],
    });

   this.orders.length = 20
    this.menuForm = this._formBuilder.group({
      menuName: ['',[Validators.required]],
      iconName: ['',[Validators.required]],
      iconType: ['',[Validators.required]],
      routerlinkType: ['',[Validators.required]],   
      attribute: [''], 
      clickMethod: [''], 
      pageLink:[''],
      pageComponent:[''],
      order: [''], 
      isPremium: [0]
     });

   this.addMenuForm = this._formBuilder.group({
    menuAppId: [''],
    menuDomainId: [''],
    appMenus: [''],
   });

   this.imagesForm = this._formBuilder.group({
    banner: ['',[Validators.required]],
    bannerApp: [''],
    bannerDomain: [''],
    bannerDesc: [''],
    bannerDocument_FrontFilePath : [''],
    bannerDocument_FrontFileType:'' ,
    bannerDocument_FrontFileName:'' ,
  })

  this.planForm = this._formBuilder.group({
    plan: ['',[Validators.required]],
    price: ['',[Validators.required]],  
    discount: [''],
    domain: ['',[Validators.required]],
    planValidity: ['',[Validators.required]],
    planMenus:['',[Validators.required]],
 });

 this.descriptionData = this._formBuilder.group({
  descriptionArray: this._formBuilder.array([]),
});
this.addItem()
}

setPrimary(domainId): void {
  const selectedValue = domainId;
  Swal.fire({
    text: 'You want to set primary domain ?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: "#3290d6 !important",
    confirmButtonText: 'Yes'
  }).then((result) => {
    if (result.isConfirmed) {
      this.ringService.updatePrimaryDomain(this.appId,domainId).subscribe((res) =>{
        if(res.response_message == "Success"){
        }
      })
    } else{
      this.getAppDataByID(this.appIdforRadio)
    }
  });
  
}

fetchAppList(){
  this.appListLoader = true
    this.ringService.fetchAppList().subscribe((res) =>{
    if(res.response_message == "Success"){
       this.appList = res.response_data
       this.appListLoader = false
    }
  })
}

fetchPageList(){
    this.ringService.fetchPages().subscribe((res) =>{
    if(res.response_message == "Success"){
       this.pageListData = res.response_data
    }
    }) 
}

getAppDataByID(appId){
  this.appIdforRadio = appId
  this.gettingDomains = true
    this.ringService.getAppDataByID(appId).subscribe((res) =>{
    if(res.response_message == "Success"){
       this.appListData = res.response_data.DomainData
       this.appId = res.response_data.Id
       this.gettingDomains = false

     
  }
  })
}

updateTopMenuValue(event: any) {
    this.isChecked = event?.checked;
    this.menuForm.get('isPremium').setValue(this.isChecked ? 1 : 0);
}
  
updateLinkValue(){
    this.menuForm.get('pageLink').setValue('');
    this.menuForm.get('pageComponent').setValue('')
}


//------------------------------------- Menu Details --------------------------------------//
 
viewMenuDetails(menuId){
    this.menuMasterId = menuId
    const dialogRef = this.dialog.open(this.callAPIDialog1);
    dialogRef.afterClosed().subscribe((result) => { });

    this.updatebutton = true
    this.Loader = true
    this.ringService.editMenu(menuId).subscribe((res) =>{
      if(res.response_message == "Success"){
         this.menuData = res.response_data
    
        this.menuForm.get('menuName').setValue(this.menuData.MenuName);
        this.menuForm.get('iconName').setValue(this.menuData.IconName);
        this.menuForm.get('iconType').setValue(this.menuData.IconType);
        this.menuForm.get('routerlinkType').setValue(this.menuData.RouterLinkType);
        this.menuForm.get('attribute').setValue(this.menuData.Attribute);
        this.menuForm.get('clickMethod').setValue(this.menuData.ClickMethod);
        this.menuForm.get('order').setValue(this.menuData.OrderColumn);
    
          
        if(this.menuData?.RouterLinkType == 'Page Link'){
            this.menuForm.get('pageLink').setValue(this.menuData?.RouterLink)
        }else{
            this.menuForm.get('pageComponent').setValue(this.menuData?.RouterLink)
        }
    
        if(this.menuData?.isPremium == '1'){
          this.menuForm.get('isPremium').setValue(1)
        }else{
          this.menuForm.get('isPremium').setValue(0)
        }

        this.Loader = false
        
    
      }
    })
}

updateDomainMenuMaster(){
    if(this.menuForm.status == "INVALID"){
      this.menuForm.markAllAsTouched();
      Swal.fire('', 'Please fill all mandatory data', 'error')
        return
     }
    this.showLoader = true
    let menuName = this.menuForm.value.menuName.charAt(0).toUpperCase() + this.menuForm.value.menuName.slice(1)
    let iconName = this.menuForm.value.iconName
    let iconType = this.menuForm.value.iconType
    let routerlinkType = this.menuForm.value.routerlinkType
    if(this.menuForm.value.routerlinkType == 'Page Link'){
      this.routerlink = this.menuForm.value.pageLink
    }else{
      this.routerlink = this.menuForm.value.pageComponent
    }
    let attribute = this.menuForm.value.attribute
    let clickMethod = this.menuForm.value.clickMethod
    let order = this.menuForm.value.order
    let isPremium = this.menuForm.value.isPremium
  
    this.ringService.updateMenu(this.menuMasterId,menuName,iconName,iconType,routerlinkType, this.routerlink,attribute,clickMethod,order,isPremium).subscribe((res) =>{
      if(res.response_message == "Success"){
        this.showLoader = false
        Swal.fire({
          text: 'Menu details updated successful',
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: "#3290d6 !important",
          confirmButtonText: 'Ok'
        }).then((result) => {
          if (result.isConfirmed) {
            this._route.navigate(['apps/menu/menulist']);
          } 
        });
      }else{
        this.showLoader = false
        Swal.fire('', res.response_message , 'error')
      }
      
    })
}

changeMenu(selected: any) {
    this.selectedMenu = selected;
}

removeMenu(index: number, id: any,menuIndex: number) {
    if (id != null) {
      this.selectedMenu = this.selectedMenu.filter(item => item.Id !== id);
      const menuControl = this.addMenuForm.get('appMenus');
      if (menuControl) {
        menuControl.setValue(this.selectedMenu);
      }
    }
}

fetchMenuList(){
    this.ringService.fetchMenuList().subscribe((res) =>{
    if(res.response_message == "Success"){
      this.menuListData = res.response_data
      if(this.menuListData.length != 0){
      }  
    }
  })
}


addMenus(domainId) {
  this.isDataBound = true
  this.addMenuForm.get('appMenus').setValue('');
  this.selectedMenu=[]
  this.updatebutton = false
    this.addMenuForm.get('menuAppId').setValue(this.appId)
    this.addMenuForm.get('menuDomainId').setValue(domainId)


    const dialogRef = this.dialog.open(this.callAPIDialog2);
    dialogRef.afterClosed().subscribe((result) => { });
}

editMenus(data){
  this.updatebutton = true
  this.addMenuForm.get('appMenus').setValue('');
  this.selectedMenu=[]
    this.MenuDomainMasterId = data.MenuDomainMasterId
    this.isDataBound = true
    this.addMenuForm.get('menuAppId').setValue(this.appId)
    this.addMenuForm.get('menuDomainId').setValue(data.Id)

    data.Menus.forEach((data)=>{
      this.menuListData.forEach((item) => {
          if(item.Id == data.Id){
              this.selectedMenu.push(item)
              this.changeMenu;
          } 
      })
      this.addMenuForm.get('appMenus').setValue(this.selectedMenu);
      this.changeMenu(this.addMenuForm.value.appMenus);
      
  })
  
    const dialogRef = this.dialog.open(this.callAPIDialog2);
    dialogRef.afterClosed().subscribe((result) => { });
}

insertMenuDetails() {
    if(this.addMenuForm.status == "INVALID"){
      Swal.fire('', 'Please fill all mandatory data', 'error')
        return
     }
    this.showLoader = true
    let MenuData = [{domainId: this.addMenuForm.value.menuDomainId,
                     menu:this.selectedMenu}]
  
    this.ringService.InsertMenusForDomainId(this.appId,MenuData).subscribe((res) => {
        if (res.response_message == "Success") {
            this.showLoader = false
            Swal.fire({
                text: 'Menus added successful',
                icon: 'success',
                showCancelButton: false,
                confirmButtonColor: "#3290d6 !important",
                confirmButtonText: 'Ok'
            }).then((result) => {
                if (result.isConfirmed) {
                  this.getAppDataByID(this.appId)
                  this.dialog.closeAll()
                }
            });
        } else {
            this.showLoader = false
            Swal.fire('', res.response_message, 'error')
        }
    })
}

updateMenuDetails() {
    this.showLoader = true
  
    let MenuData = [{domainId: this.addMenuForm.value.menuDomainId,
      menu:this.selectedMenu}]

    this.ringService.UpdatetMenusForDomainId(this.MenuDomainMasterId,this.appId,MenuData).subscribe((res) => {
        if (res.response_message == "Success") {
            this.showLoader = false
            Swal.fire({
                text: 'Menus updated successful',
                icon: 'success',
                showCancelButton: false,
                confirmButtonColor: "#3290d6 !important",
                confirmButtonText: 'Ok'
            }).then((result) => {
                if (result.isConfirmed) {
                  this.getAppDataByID(this.appId)
                  this.dialog.closeAll()
                }
            });
        } else {
            this.showLoader = false
            Swal.fire('', res.response_message, 'error')
        }
  
    })
}

//------------------------------------- Banner Details --------------------------------------//

addBanner(domainId){
    this.isDataBound = true
    this.updatebutton = false
    this.imagesForm.get('banner').setValue('')
    this.imagesForm.get('bannerDesc').setValue('')
    this.imagesForm.get('bannerDocument_FrontFilePath').setValue('')
    this.imagesForm.get('bannerDocument_FrontFileName').setValue('');

    this.imagesForm.get('bannerApp').setValue(this.appId)
    this.imagesForm.get('bannerDomain').setValue(domainId)

    const dialogRef = this.dialog.open(this.callAPIDialog4);
    dialogRef.afterClosed().subscribe((result) => { });
}

editBanner(data){
    this.updatebutton = true
    this.imagesForm.get('banner').setValue(data.Banner.BannerName)
    this.imagesForm.get('bannerApp').setValue(this.appId)
    this.imagesForm.get('bannerDomain').setValue(data.Id)
    this.imagesForm.get('bannerDesc').setValue(data.Banner.Description)
    this.imagesForm.get('bannerDocument_FrontFilePath').setValue(data.Banner.Image)
    this.imagesForm.get('bannerDocument_FrontFileName').setValue(data.Banner.Image);

    this.bannerMaster = data.Banner.Id
    const dialogRef = this.dialog.open(this.callAPIDialog4);
    dialogRef.afterClosed().subscribe((result) => { });

}

onFileChange(event, docName, files: FileList) {
    const file = new FormData();
    file.append('file', event.target.files[0]);
    if (docName == 'bannerDocument') {
      this.docLoader = true;
    }
    this.ringService.uploadBannerImage(file).subscribe(res => {
  
    if(res.response_message == "Success"){
      let fileType = res.file_name.split(".");
      fileType = fileType[fileType.length - 1];
      fileType = fileType == "pdf" ? "PDF" : "IMG";
      let formArrayValue: any = this.imagesForm.value;
      formArrayValue[docName] = res.file_name;
      formArrayValue[docName + "FilePath"] = res.image_path;
      this.tempDocumentArray2 = {
        file_name: res.file_name,
        file_dir: res.image_path,
        docName: docName,
        DocumentExtn: "png",
      }

      if (docName == 'bannerDocument') {
        this.docLoader = false;
        this.imagesForm?.get('bannerDocument_FrontFilePath')?.setValue(res.image_path);
        this.imagesForm?.get('bannerDocument_FrontFileType')?.setValue(fileType);
        this.imagesForm?.get('bannerDocument_FrontFileName')?.setValue(res.file_name);
      }
 
      if (this.tempDocumentArray2.file_name == 'bannnerDocument') {
        this.uploadDocs1 = this.tempDocumentArray2.file_dir;
      }
   
    }else{
      this.docLoader = false;
      Swal.fire('', res.response_message, 'error');
    }
    });
}

insertBannerDetails(){
  if(this.imagesForm.status == "INVALID"){
    this.imagesForm.markAllAsTouched();
    Swal.fire('', 'Please fill all mandatory data', 'error')
      return
  }

  if(this.imagesForm.value.bannerDocument_FrontFilePath == ""){
    Swal.fire('', 'Please upload banner image', 'error')
      return
  }

  this.showLoader = true
  let bannerName = this.imagesForm.value.banner.charAt(0).toUpperCase() + this.imagesForm.value.banner.slice(1)
  let description = this.imagesForm.value.bannerDesc
  let image = this.imagesForm.value.bannerDocument_FrontFilePath
  let appId = this.imagesForm.value.bannerApp
  let domainId = this.imagesForm.value.bannerDomain

  this.ringService.insertBannerData(bannerName,description,image,appId,domainId).subscribe((res) =>{
    if(res.response_message == "Success"){
      this.showLoader = false
      Swal.fire({
        text: 'Banner details added successful',
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: "#3290d6 !important",
        confirmButtonText: 'Ok'
      }).then((result) => {
        if (result.isConfirmed) {
          this.getAppDataByID(this.appId)
          this.dialog.closeAll()
        } 
      });
    }else{
      this.showLoader = false
      Swal.fire('', res.response_message , 'error')
    }
  })
}

updateBannerDetails(){
  if(this.imagesForm.status == "INVALID"){
    this.imagesForm.markAllAsTouched();
    Swal.fire('', 'Please fill all mandatory data', 'error')
      return
   }
  this.showLoader = true
  let bannerName = this.imagesForm.value.banner.charAt(0).toUpperCase() + this.imagesForm.value.banner.slice(1)
  let description = this.imagesForm.value.bannerDesc
  let image = this.imagesForm.value.bannerDocument_FrontFilePath
  let appId = this.imagesForm.value.bannerApp
  let domainId = this.imagesForm.value.bannerDomain

  this.ringService.updateBanner(this.bannerMaster,bannerName,description,image,appId,domainId).subscribe((res) =>{
    if(res.response_message == "Success"){
      this.showLoader = false
      Swal.fire({
        text: 'Banner details updated successful',
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: "#3290d6 !important",
        confirmButtonText: 'Ok'
      }).then((result) => {
        if (result.isConfirmed) {
          this.getAppDataByID(this.appId)
          this.dialog.closeAll()
        } 
      });
    }else{
      this.showLoader = false
      Swal.fire('', res.response_message , 'error')
    }
  })
}

openImgDialog(img) {
  const dialogRef = this.dialog.open(this.callAPIDialog3);
  dialogRef.afterClosed().subscribe((result) => { });
  this.image = img;
}

//------------------------------------- Plan Details --------------------------------------//

descriptionArray(): FormArray {
  return this.descriptionData.get("descriptionArray") as FormArray;
}

getSubscribeMenuList(){
  this.ringService.getSubscribeMenuList().subscribe((res) =>{
  if(res.response_message == "Success"){
     this.subscribeMenuList = res.response_data;
  }
})
}

multiFields(): FormGroup {
  return this._formBuilder.group({
    id:[''],
    description : [''],
  });
}

addItem(): void {
  this.descriptionArray().push(this.multiFields());
  this.showAddButton = false
}

addMember(){
  if(this.descriptionData.status == "VALID"){
   this.showAddButton = true
  }else{
    this.showAddButton = false
  }
}

removeItem(descriptionArray,viewIndex) {
  let descId = descriptionArray.value.id
  if(descId ==''){
    this.descriptionArray().removeAt(viewIndex)
    this.addMember()
    return
  }
  
  Swal.fire({
    title: 'Are you sure?',
    text: 'You want to delete description details',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'Cancel'
  }).then((result) => {
    if (result.isConfirmed) {
      this.ringService.deleteDescriptionById(descId).subscribe((res) =>{
        if(res.response_message == "Success"){
          this.descriptionArray().removeAt(viewIndex)
          this.addMember()
          Swal.fire(
            'Deleted!',
            'Description has been deleted.',
            'success'
          );
        }
      });
     
    }
 
})

}

checkValidInputData(event: any, type) {
  this.globalService.checkValidInputData(event, type);
}

calculatValue(){
  this.discountValue = 0
  this.discountValue = (this.planForm.value.price * (1- (this.planForm.value.discount)/100))
}

changePlanMenus(selected: any) {
  this.selectedPlanMenus = selected;
}

removeMenus(index: number, id: any) {
  if (id != null) {
    this.selectedPlanMenus = this.selectedPlanMenus.filter(item => item.Id !== id);
    const MenusControl = this.planForm.get('planMenus');
    if (MenusControl) {
      MenusControl.setValue(this.selectedPlanMenus);
    }
  }
}

changeDomains(selected: any) {
  this.selectedDomains = selected;
}

removeDomains(index: number, id: any) {
  if (id != null) {
    this.selectedDomains = this.selectedDomains.filter(item => item.Id !== id);
    const DomainsControl = this.planForm.get('domain');
    if (DomainsControl) {
      DomainsControl.setValue(this.selectedDomains);
    }
  }
}

addPlan(domainId){
  this.isDataBound = true
  this.planForm.get('planMenus').setValue('');
  this.selectedPlanMenus.length = 0
  this.planForm.get('plan').setValue('');
  this.planForm.get('price').setValue('');
  this.planForm.get('discount').setValue('');
  this.calculatValue()
  this.planForm.get('planValidity').setValue('');
  this.planForm.get('domain').setValue(domainId);


  this.descriptionArray().controls.length = 1
  this.descriptionArray().controls[0].get('id').setValue('')
  this.descriptionArray().controls[0].get('description').setValue('')
  this.showAddButton = false
  

  this.planData.length = 0
  this.updatebutton = false

  const dialogRef = this.dialog.open(this.callAPIDialog5);
  dialogRef.afterClosed().subscribe((result) => { });
}

fetchDomainList(){
  this.ringService.fetchDomainList().subscribe((res) =>{
  if(res.response_message == "Success"){
     this.domainListData = res.response_data
  }
})
} 

viewPlanDetails(planId){
  this.planForm.get('planMenus').setValue('');
  this.selectedPlanMenus.length = 0;

  this.descriptionArray().controls.length = 1
  this.descriptionArray().controls[0].get('id').setValue('')
  this.descriptionArray().controls[0].get('description').setValue('')
  this.showAddButton = false

  this.planMasterId = planId
  this.Loader = true
  this.isDataBound = true
  this.updatebutton = true
  const dialogRef = this.dialog.open(this.callAPIDialog5);
  dialogRef.afterClosed().subscribe((result) => { });

  this.ringService.getPlanDetailsById(planId).subscribe((res) =>{
    if(res.response_message == "Success"){
       this.planData = res.response_data
  
      this.planForm.get('plan').setValue(this.planData.PlanName);
      this.planForm.get('price').setValue(this.planData.Price);
      this.planForm.get('discount').setValue(this.planData.Discount);
      this.calculatValue()
      this.planForm.get('planValidity').setValue(this.planData.PlanValidity);
      // this.planForm.get('domain').setValue(this.planData.DomainId);

      let menusIds = this.planData.PremiumMenuId.split(',')
     if(this.subscribeMenuList != undefined){
      menusIds.forEach((item) => {
        this.subscribeMenuList.forEach((itemm) => {
        if (item == itemm.Id) {
          this.selectedPlanMenus.push(itemm);
          this.changePlanMenus;
        }
      });
      this.planForm.get('planMenus').setValue(this.selectedPlanMenus);
        this.changePlanMenus(this.planForm.value.planMenus);
    })
      }



      if(this.domainListData != undefined){
        this.planData.Domains.forEach((item) => {
         this.domainListData.forEach((itemm) => {
         if (item.Id == itemm.Id) {
           this.selectedDomains.push(itemm);
           this.changeDomains;
         }
       });
       this.planForm.get('domain').setValue(this.selectedDomains);
         this.changeDomains(this.planForm.value.domain);
     })
       }





      this.planData.description.forEach((data,index) => {
        if(index!=0){
        this.addItem();
       }
        this.descriptionArray().controls[index].get('id').setValue(data.Id)
        this.descriptionArray().controls[index].get('description').setValue(data.Description)
      });
      this.addMember()
      this.Loader = false
    }
  })
   
}

insertPlanDetails(){
  if(this.planForm.status == "INVALID"){
    this.planForm.markAllAsTouched();
    Swal.fire('', 'Please fill all mandatory data', 'error')
      return
   }
  this.showLoader = true
  let plan = this.planForm.value.plan
  let price = this.planForm.value.price
  let discount = this.planForm.value.discount
  let planValidity = this.planForm.value.planValidity
  let domain = this.selectedDomains
  let menus = this.selectedPlanMenus
  let description = this.descriptionData.controls.descriptionArray.value
  this.ringService.insertPlan(plan,price,discount,domain,planValidity,description,menus).subscribe((res) =>{
    if(res.response_message == "Success"){
      this.showLoader = false
      Swal.fire({
        text: 'Plan details added successful',
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: "#3290d6 !important",
        confirmButtonText: 'Ok'
      }).then((result) => {
        if (result.isConfirmed) {
          this.dialog.closeAll();
        } 
      });
    }else{
      this.showLoader = false
      Swal.fire('', res.response_message , 'error')
    }
    
  })
}

updatePlanDetails(){
  if(this.planForm.status == "INVALID"){
    this.planForm.markAllAsTouched();
    Swal.fire('', 'Please fill all mandatory data', 'error')
      return
   }
  this.showLoader = true
  let plan = this.planForm.value.plan
  let price = this.planForm.value.price
  let discount = this.planForm.value.discount
  let planValidity = this.planForm.value.planValidity
  let domain = this.selectedDomains
  let description = this.descriptionData.controls.descriptionArray.value
  let menus = this.selectedPlanMenus

  this.ringService.updatePlan(this.planMasterId,plan,price,discount,domain,planValidity,description,menus).subscribe((res) =>{
    if(res.response_message == "Success"){
      this.showLoader = false
      Swal.fire({
        text: 'Plan details updated successful',
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: "#3290d6 !important",
        confirmButtonText: 'Ok'
      }).then((result) => {
        if (result.isConfirmed) {
          this.dialog.closeAll();
        } 
      });
    }else{
      this.showLoader = false
      Swal.fire('', res.response_message , 'error')
    }
    
  })
}
 
close() {
    this.dialog.closeAll();
}


}
