import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, map ,switchMap} from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { GlobalService } from "app/modules/service/global.service";
import { config } from 'app/config';
import { environment } from '../../../environments/environment';
import { UserService } from 'app/core/user/user.service';
@Injectable({
  providedIn: 'root'
})
export class RingService {
 
  apiurl3: string = config.apiurl3; //ring admin
  private _authenticated: boolean = false;

      set accessToken(token: string)
      {
          localStorage.setItem('accessToken', token);
      }
  
      get accessToken(): string
      {
          return localStorage.getItem('accessToken') ?? '';
      }
   
  constructor(private httpClient: HttpClient,
    public _globalService: GlobalService,
    private _userService: UserService) {}

    
  public handleError(error) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
      } else {
          // server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
  }

//------------------------------ insertDomainData -------------------------------------//

public insertDomainData(domainName,description,status,MenuData,DomainUrl): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}DomainMaster/insertDomainMasterData`,
    {   
        domainName :domainName,
        description :description,
        status :status,
        MenuData:MenuData,
        DomainUrl: DomainUrl
    }
)}

//------------------------------ updateDomain ---------------------------------------//

public updateDomain(domainId,domainName,description,status,DomainUrl): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}DomainMaster/updateDomain`,
    {   
        DomainId:domainId,
        domainName :domainName,
        description :description,
        status :status,
        DomainUrl: DomainUrl
    }
)}

//------------------------------ editDomain ---------------------------------------//

public editDomain(domainId): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}DomainMaster/editDomain`,
    {   
        DomainId:domainId
    }
)}

//------------------------------ deleteDomain ---------------------------------------//

public deleteDomain(domainId): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}DomainMaster/deleteDomainMaster`,
    {   
        DomainId:domainId
    }
)}

//------------------------------ fetchDomainList ---------------------------------------//

public fetchDomainList(): Observable<any> {
    return this.httpClient.get(`${this.apiurl3}DomainMaster/fetchDomainList`,
    {}
)}

//------------------------------ DomainTableList ---------------------------------------//

public DomainTableList(page,pageSize,startNum,columnIndex,sortValue,search): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}DomainMaster/DomainTableList`,
    { 
        draw: page,
        length: pageSize,
        start: startNum,
        order: [
           {
              column : columnIndex, 
              dir: sortValue
           }
           ],
            search: {
              value: search
         }
        
    }
)}

//------------------------------ getDomainByAppId ---------------------------------------//

public getDomainByAppId(appId): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}DomainMaster/getDomainByAppId`,
    {   
        Id:appId
    }
)}

//------------------------------ updateDomainStatus ---------------------------------------//

public updateDomainStatus(appId,status): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}DomainMaster/updateDomainStatus`,
    {   
        Id:appId,
        status:status
    }
)}

//------------------------------ fetchMenusForDomain ---------------------------------------//

public fetchMenusForDomain(): Observable<any> {
    return this.httpClient.get(`${this.apiurl3}DomainMaster/fetchMenusForDomain`,
    {}
)}

//------------------------------ DomainMenuTableList ---------------------------------------//

public DomainMenuTableList(page,pageSize,startNum,columnIndex,sortValue,search): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}DomainMaster/DomainMenuTableList`,
    { 
        draw: page,
        length: pageSize,
        start: startNum,
        order: [
           {
              column : columnIndex, 
              dir: sortValue
           }
           ],
            search: {
              value: search
         }
        
    }
)}

//------------------------------ InsertMenusForDomainId ---------------------------------------//

public InsertMenusForDomainId(AppId,MenuData): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}App/InsertMenusForDomainId`,
    {   
        AppId:AppId,
        MenuData:MenuData
    }
)}

//------------------------------ UpdatetMenusForDomainId ---------------------------------------//

public UpdatetMenusForDomainId(appId,AppId,MenuData): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}DomainMaster/updateMenusForDomainId`,
    {   
        Id:appId,
        AppId:AppId,
        MenuData:MenuData
    }
)}

//------------------------------ getMenusByAppId_DomainId ---------------------------------------//

public getMenusByAppId_DomainId(appId): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}DomainMaster/getMenusByAppId_DomainId`,
    {   
        Id:appId
    }
)}

//------------------------------ deleteMenusByAppId_DomainId ---------------------------------------//

public deleteMenusByAppId_DomainId(appId): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}DomainMaster/deleteMenusByAppId_DomainId`,
    {   
        Id:appId
    }
)}

//------------------------------ insertMenuMaster ---------------------------------------//

public insertMenuMaster(menuName,iconName,iconType,routerlinkType,routerlink,attribute,clickMethod,order,isPremium): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}MenuMaster/insertMenuMaster`,
    {   
        menuName:menuName,
        iconName:iconName,
        iconType:iconType,
        routerLinkType:routerlinkType,
        routerlink:routerlink,
        attribute:attribute,
        clickMethod:clickMethod,
        order:order,
        isPremium:isPremium
    }
)}

//------------------------------ updateMenu ---------------------------------------//

public updateMenu(menuId,menuName,iconName,iconType,routerlinkType,routerlink,attribute,clickMethod,order,isPremium): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}MenuMaster/updateMenu`,
    {   
        MenuId:menuId,
        menuName:menuName,
        iconName:iconName,
        iconType:iconType,
        routerLinkType:routerlinkType,
        routerlink:routerlink,
        attribute:attribute,
        clickMethod:clickMethod,
        order:order,
        isPremium:isPremium
    }
)}

//------------------------------ editMenu ---------------------------------------//

public editMenu(menuId): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}MenuMaster/editMenu`,
    {   
        MenuId:menuId
    }
)}

//------------------------------ deleteMenu ---------------------------------------//

public deleteMenu(menuId): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}MenuMaster/deleteMenu`,
    {   
        MenuId:menuId
    }
)}

//------------------------------ fetchMenuList ---------------------------------------//

public fetchMenuList(): Observable<any> {
    return this.httpClient.get(`${this.apiurl3}MenuMaster/fetchMenuList`,
    {}
)}

//------------------------------ MenuTableList ---------------------------------------//

public MenuTableList(page,pageSize,startNum,columnIndex,sortValue,search): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}MenuMaster/MenuTableList`,
    { 
        draw: page,
        length: pageSize,
        start: startNum,
        order: [
           {
              column : columnIndex, 
              dir: sortValue
           }
           ],
            search: {
              value: search
         }
        
    }
)}

//------------------------------ getSubscribeMenuList ---------------------------------------//

public getSubscribeMenuList(): Observable<any> {
    return this.httpClient.get(`${this.apiurl3}MenuMaster/getSubscribeMenuList`,
    {}
)}

//------------------------------ insertBannerData ---------------------------------------//

public insertBannerData(bannerName,description,image,appId,domainId): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}BannerMaster/insertBannerMaster`,
    {   
        bannerName:bannerName,
        description:description,
        image:image,
        appId:appId,
        domainId:domainId
    }
)}

//------------------------------ updateBanner ---------------------------------------//

public updateBanner(bannerId,bannerName,description,image,appId,domainId): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}BannerMaster/updateBanner`,
    {   
        bannerId:bannerId,
        bannerName:bannerName,
        description:description,
        image:image,
        appId:appId,
        domainId:domainId
    }
)}

//------------------------------ editBanner ---------------------------------------//

public editBanner(bannerId): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}BannerMaster/editBanner`,
    {
        bannerId:bannerId
    }
)}

//------------------------------ deleteBanner ---------------------------------------//

public deleteBanner(bannerId): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}BannerMaster/deleteBanner`,
    {
        bannerId:bannerId
    }
)}

//------------------------------ fetchBannerList ---------------------------------------//

public fetchBannerList(): Observable<any> {
    return this.httpClient.get(`${this.apiurl3}BannerMaster/fetchBannerList`,
    {}
)}

//------------------------------ BannerTableList ---------------------------------------//

public BannerTableList(page,pageSize,startNum,columnIndex,sortValue,search): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}BannerMaster/BannerTableList`,
    { 
        draw: page,
        length: pageSize,
        start: startNum,
        order: [
           {
              column : columnIndex, 
              dir: sortValue
           }
           ],
            search: {
              value: search
         }
        
    }
)}

//------------------------------ uploadBannerImage ---------------------------------------//

public uploadBannerImage(file): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}BannerMaster/uploadBannerImage`,
    file
)}

//------------------------------ fetchPages ---------------------------------------//

public fetchPages(): Observable<any> {
    return this.httpClient.get(`${this.apiurl3}Pages/fetchPages`,
    {}
)}

//------------------------------ pageTableList ---------------------------------------//

public pageTableList(page,pageSize,startNum,columnIndex,sortValue,search): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}Pages/PageTableList`,
    { 
        draw: page,
        length: pageSize,
        start: startNum,
        order: [
           {
              column : columnIndex, 
              dir: sortValue
           }
           ],
            search: {
              value: search
         }
        
    }
)}


//------------------------------ getLayout ---------------------------------------//

public getLayout(): Observable<any> {
    return this.httpClient.get(`${this.apiurl3}Pages/getLayout`,
    {}
)}

//------------------------------ insertPagesData ---------------------------------------//

public insertPagesData(title,layout,bannerId,view_Api_Name,
    view_Api_Payload,update_Api_Name,
    update_Api_Payload,delete_Api_Name,
    delete_Api_Payload,search_Api_Name,
    search_Api_Payload,status): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}Pages/insertPagesData`,
    {   
        title:title,
        layout:layout,
        bannerId:bannerId,
        view_Api_Name:view_Api_Name,
        view_Api_Payload:view_Api_Payload,
        update_Api_Name:update_Api_Name,
        update_Api_Payload:update_Api_Payload,
        delete_Api_Name:delete_Api_Name,
        delete_Api_Payload:delete_Api_Payload,
        search_Api_Name:search_Api_Name,
        search_Api_Payload:search_Api_Payload,
        status:status,
    }
)}

//------------------------------ updatePages ---------------------------------------//

public updatePages(pageId,title,layout,bannerId,view_Api_Name,
                   view_Api_Payload,update_Api_Name,
                   update_Api_Payload,delete_Api_Name,
                   delete_Api_Payload,search_Api_Name,
                   search_Api_Payload,status): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}Pages/updatePages`,
    {   
        Id:pageId,
        title:title,
        layout:layout,
        bannerId:bannerId,
        view_Api_Name:view_Api_Name,
        view_Api_Payload:view_Api_Payload,
        update_Api_Name:update_Api_Name,
        update_Api_Payload:update_Api_Payload,
        delete_Api_Name:delete_Api_Name,
        delete_Api_Payload:delete_Api_Payload,
        search_Api_Name:search_Api_Name,
        search_Api_Payload:search_Api_Payload,
        status:status,
    }
)}

//------------------------------ editPages ---------------------------------------//

public editPages(pageId): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}Pages/editPages`,
    {
        Id:pageId
    }
)}

//------------------------------ deletePages ---------------------------------------//

public deletePages(pageId): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}Pages/deletePages`,
    {
        Id:pageId
    }
)}


//------------------------------ updatePageStatus ---------------------------------------//

public updatePageStatus(id,status): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}Pages/updatePageStatus`,
    {
        Id:id,
        status:status
    }
)}

//------------------------------ fetchAppList ---------------------------------------//

public fetchAppList(): Observable<any> {
    return this.httpClient.get(`${this.apiurl3}App/fetchAppList`,
    {}
)}

//------------------------------ AppTableList ---------------------------------------//

public AppTableList(page,pageSize,startNum,columnIndex,sortValue,search): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}App/AppTableList`,
    { 
        draw: page,
        length: pageSize,
        start: startNum,
        order: [
           {
              column : columnIndex, 
              dir: sortValue
           }
           ],
            search: {
              value: search
         }
        
    }
)}

//------------------------------ insertAppData ---------------------------------------//

public insertAppData(AppName,Description,PackageName,ApiUrl,PrimaryDomain,Domain): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}App/insertAppData`,
    {   
        AppName:AppName,
        Description:Description,
        PackageName:PackageName,
        ApiUrl:ApiUrl,
        PrimaryDomain:PrimaryDomain,
        Domain:Domain
    }
)}

//------------------------------ updateApp ---------------------------------------//

public updateApp(appId,AppName,Description,PackageName,ApiUrl,PrimaryDomain,Domain): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}App/updateApp`,
    {   
        Id:appId,
        AppName:AppName,
        Description:Description,
        PackageName:PackageName,
        ApiUrl:ApiUrl,
        PrimaryDomain:PrimaryDomain,
        Domain:Domain
    }
)}

//------------------------------ editApp ---------------------------------------//

public editApp(appId): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}App/editApp`,
    {
        Id:appId
    }
)}

//------------------------------ deleteApp ---------------------------------------//

public deleteApp(appId): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}App/deleteApp`,
    {
        Id:appId
    }
)}

//------------------------------ fetchBannerByAppId ---------------------------------------//

public fetchBannerByAppId(): Observable<any> {
    return this.httpClient.get(`${this.apiurl3}App/fetchBannerForApp`,
    {}
)}

//------------------------------ insertBannerForAppId ---------------------------------------//

public insertBannerForAppId(AppId,DomainId,BannerId): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}App/insertBannerForAppId`,
    {   
        AppId:AppId,
        DomainId:DomainId,
        BannerId:BannerId,
    }
)}

//------------------------------ updateBannerForAppId ---------------------------------------//

public updateBannerForAppId(appId,AppId,DomainId,BannerId): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}App/updateBannerForAppId`,
    {   
        Id:appId,
        AppId:AppId,
        DomainId:DomainId,
        BannerId:BannerId,
    }
)}

//------------------------------ getBannerByAppId ---------------------------------------//

public getBannerByAppId(appId): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}App/getBannerByAppId`,
    {   
        Id:appId
    }
)}

//------------------------------ deleteBannerOfAppId ---------------------------------------//

public deleteBannerOfAppId(appId): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}App/deleteBannerOfAppId`,
    {   
        Id:appId
    }
)}

//------------------------------ getAppDataByID ---------------------------------------//


public getAppDataByID(appId): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}App/getAppDataByID`,
    {   
        AppId:appId
    }
)}

//------------------------------ getPlans ---------------------------------------//

public getPlans(): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}Plans/getPlans`,
    {}
)}

//------------------------------ fetchPlanList ---------------------------------------//

public fetchPlanList(): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}Plans/fetchPlanList`,
    {}
)}

//------------------------------ planTableList ---------------------------------------//

public planTableList(page,pageSize,startNum,columnIndex,sortValue,search): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}Plans/PlanTableList`,
    { 
        draw: page,
        length: pageSize,
        start: startNum,
        order: [
           {
              column : columnIndex, 
              dir: sortValue
           }
           ],
            search: {
              value: search
         }
        
    }
)}

//------------------------------ insertPlan ---------------------------------------//

public insertPlan(plan,price,discount,domain,planValidity,description,menus): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}Plans/insertPlan`,
    {
        PlanName:plan,
        Price:price,
        Discount:discount,
        DomainId:domain,
        PlanValidity:planValidity,
        description:description,
        Menus : menus
    }
)}

//------------------------------ updatePlan ---------------------------------------//

public updatePlan(planId,plan,price,discount,domain,planValidity,description,menus): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}Plans/updatePlan`,
    {
        Id:planId,
        PlanName:plan,
        Price:price,
        Discount:discount,
        DomainId:domain,
        PlanValidity:planValidity,
        description:description,
        Menus : menus
    }
)}

//------------------------------ getPlanDetailsById ---------------------------------------//

public getPlanDetailsById(planId): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}Plans/getPlanDetailsById`,
    {
        Id:planId
    }
)}

//------------------------------ deletePlanDetailsById ---------------------------------------//

public deletePlanDetailsById(planId): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}Plans/deletePlanDetailsById`,
    {
        Id:planId
    }
)}

//------------------------------ deleteDescriptionById ---------------------------------------//

public deleteDescriptionById(descId): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}Plans/deleteDescriptionById`,
    {
        Id:descId
    }
)}

//------------------------------ updatePlanStatus ---------------------------------------//

public updatePlanStatus(Id,status): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}Plans/updatePlanStatus`,
    {   
        Id:Id,
        status:status
    }
)}

//------------------------------ userDetailsList ---------------------------------------//

public userDetailsList(): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}APP_API/fetchUserPlanList`,
    {}
)}

//------------------------------ fetchUserList ---------------------------------------//

public fetchUserList(): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}UsersMaster/fetchUserList`,
    {}
)}

//------------------------------ userTableList ---------------------------------------//

public userTableList(page,pageSize,startNum,columnIndex,sortValue,search): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}APP_API/UserPlansTableList`,
    { 
        draw: page,
        length: pageSize,
        start: startNum,
        order: [
           {
              column : columnIndex, 
              dir: sortValue
           }
           ],
            search: {
              value: search
         }
        
    }
)}

//------------------------------ UserTableList ---------------------------------------//

public UserList(page,pageSize,startNum,columnIndex,sortValue,search): Observable<any> {
    return this.httpClient.post(`https://dummyjson.com/users`,
    { 
        // draw: page,
        // length: pageSize,
        // start: startNum,
        // order: [
        //    {
        //       column : columnIndex, 
        //       dir: sortValue
        //    }
        //    ],
        //     search: {
        //       value: search
        //  }
        
    }
)}

//------------------------------ updateUserStatus ---------------------------------------//

public updateUserStatus(UserId,status): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}UsersMaster/updateUserStatus`,
        {
            UserId:UserId,
            RingId:"",
            Active:status,
            isEditable:""
        }
)}



//------------------------------ updateUserPlanStatus ---------------------------------------//

public updateUserPlanStatus(Id,status): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}APP_API/updateUserPlanStatus`,
    {   
        Id:Id,
        status:status
    }
)}

//------------------------------ updatePrimaryDomain ---------------------------------------//

public updatePrimaryDomain(appId,domainId): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}App/updatePrimaryDomain`,
    {   
        AppId:appId,
        DomainId:domainId
    }
)}

//------------------------------ FetchAppHistory ---------------------------------------//

public FetchAppHistory(page,pageSize,startNum,columnIndex,sortValue,search,appId,userId,domainId,fromdate,todate,PageName): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}App_API/FetchAppHistory`,
    { 
            draw: page,
            length: pageSize,
            start: startNum,
            order: [
                {
                    column: columnIndex,
                    dir: sortValue
                }
            ],
            search: {
                AppId: appId,
                UserId: userId,
               DomainId:domainId ,
                fromDate:fromdate ,
                toDate:todate,
                PageName:PageName
            }
    }
)}

//------------------------------ getHistoryOfUser ---------------------------------------//

public getHistoryOfUser(userId): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}UsersMaster/getHistoryOfUser`,
    {   
        userId: userId,
    }
)}

//------------------------------ getHistoryOfUserByMonth ---------------------------------------//

public getHistoryOfUserByMonth(userId,month): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}UsersMaster/getHistoryOfUserByMonth`,
    {   
        userId: userId,
        month: month,
    }
)}

}