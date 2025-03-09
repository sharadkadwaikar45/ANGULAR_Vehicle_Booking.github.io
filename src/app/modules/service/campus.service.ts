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
export class CampusService {
 
  apiurl3: string = config.apiurl3; //campus admin
  private _authenticated: boolean = false;

      /**
     * Setter & getter for access token
     */
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


  
  //--------------------------------------------  USER LOGIN --------------------------------------------------//
  public ValidateUser(username,password): Observable<any> {
  return this.httpClient.post(
      `${this.apiurl3}Authentication/Login`,{
          username:username,
          assword:password
        }).pipe(
            catchError(() =>
            // Return false
            of(false)
            ),
            switchMap((response: any) => {
                if(response.response_code==4 || response.response_code==3 || response.response_data.user.ResetPassword=='1'){
                    return of(response)
                }
                
            // Store the access token in the local storage
            this.accessToken = response.response_data.token;

            // Set the authenticated flag to true
            this._authenticated = true;
            
            // Store the user on the user service
            this._userService.user = response.response_data.user;
            
            localStorage.setItem("currentUser",JSON.stringify(response.response_data.user));
            
            //  this.sessionExpireHnadler();
            
            // Return true
            return of(response);
        })
        );;
    }
    
    
    //--------------------------------------------  New --------------------------------------------------//


    
     //------------------------------ getDashboardData ---------------------------------------//

     public getDashboardData(): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Dashboard/getDashboardData`,
        {   
        }
    )}

      //------------------------------ getUserDetailsById ---------------------------------------//

    public getUserDetailsById(UserId): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}User/getUserDetailsById`,
        {
            UserId:UserId
        }
    )}

    //------------------------------ getUserList ---------------------------------------//

    public getUserList(): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}User/getUserList`,
        { 
        }
    )}

     //------------------------------ getUsers ---------------------------------------//

     public getUsers(page,pageSize,startNum,columnIndex,sortValue,search): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}User/getUsers`,
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

    //------------------------------ UserStatus/list ---------------------------------------//

    public userStatusList(page,pageSize,startNum,columnIndex,sortValue,search): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}UserStatus/list`,
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

   
     //------------------------------ insertUserStatus ---------------------------------------//

     public insertUserStatus(status): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}UserStatus/insert`,
        {   
            Status:status
        }
    )}

        //------------------------------ deleteUserStatus ---------------------------------------//

          public deleteUserStatus(statusId): Observable<any> {
            return this.httpClient.post(`${this.apiurl3}UserStatus/delete`,
            { 
                StatusId:statusId  
            }
    )} 

        //------------------------------ updateUserStatus ---------------------------------------//

        public updateUserStatus(status,statusId): Observable<any> {
            return this.httpClient.post(`${this.apiurl3}UserStatus/update`,
            {
                Status:status,
                Id:statusId
            }
    )} 

        //------------------------------ getUserStatusById ---------------------------------------//

        public getUserStatusById(statusId): Observable<any> {
            return this.httpClient.post(`${this.apiurl3}UserStatus/getDataById`,
            {
                StatusId:statusId
            }
    )}

     //------------------------------ UserType/list ---------------------------------------//

     public userTypeList(page,pageSize,startNum,columnIndex,sortValue,search): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}UserType/list`,
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

       //------------------------------ insertTypeList ---------------------------------------//

       public insertTypeList(type): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}UserType/insert`,
        { 
            UserType : type  
        }
    )}  

         //------------------------------ deleteUserType ---------------------------------------//

         public deleteUserType(typeId): Observable<any> {
            return this.httpClient.post(`${this.apiurl3}UserType/delete`,
            { 
                TypeId:typeId  
            }
    )} 

    //------------------------------ updateUserType ---------------------------------------//

    public updateUserType(type,typeId): Observable<any> {
            return this.httpClient.post(`${this.apiurl3}UserType/update`,
            {
                UserType:type,
                TypeId:typeId
            }
    )} 

    //------------------------------ getUserTypeById ---------------------------------------//

    public getUserTypeById(typeId): Observable<any> {
            return this.httpClient.post(`${this.apiurl3}UserType/getDataById`,
            {
                TypeId:typeId
            }
     )}

     //------------------------------ insertUserDetails ---------------------------------------//

     public insertUserDetails(FirstName,LastName,PhoneNumber,Email,UserType,UserStatus,Password,ConfirmPassword,ImageName): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}User/insertUserDetails`,
        {
            FirstName:FirstName,
            LastName:LastName,
            PhoneNumber:PhoneNumber,
            Email:Email,
            UserType:UserType,
            UserStatus:UserStatus,
            Password:Password,
            ConfirmPassword:ConfirmPassword,
            ImageName:ImageName
            
        }
    )}

    
     //------------------------------ updateUserDetails ---------------------------------------//

     public updateUserDetails(id,FirstName,LastName,PhoneNumber,Email,UserType,UserStatus,ImageName): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}User/updateUserDetails`,
        {
            UserId:id,
            FirstName:FirstName,
            LastName:LastName,
            PhoneNumber:PhoneNumber,
            Email:Email,
            UserType:UserType,
            UserStatus:UserStatus,
            ImageName:ImageName
            
        }
    )}

      //------------------------------ deleteUserDetails ---------------------------------------//

      public deleteUserDetails(userId): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}User/deleteUserDetails`,
        {
            UserId : userId
            
        }
    )}
  

    //  ------------------------------ upload Documents ---------------------------------------//
    public uploadUserDocs(formData): Observable<any> {
     return this.httpClient.post(
      `${this.apiurl3}User/uploadUserDocs`,
      formData
    );

    }

      //  ------------------------------ getCollegeTypes ---------------------------------------//

    public getCollegeTypes(page,pageSize,startNum,columnIndex,sortValue,search): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}CollegeType/getCollegeTypes`,
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
                  value: search
             }
        }
    )}

      //  ------------------------------ getCollegeType ---------------------------------------//

      public getCollegeType(): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}CollegeType/getCollegeType`,
        {}
    )}

      //------------------------------ deleteclgTypeDetails ---------------------------------------//

      public deleteclgTypeDetails(type_id): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}CollegeType/deleteclgTypeDetails`,
        {
            typeId : type_id
            
        }
    )}
    

      //------------------------------ insertClgTypeDetails ---------------------------------------//

      public insertClgTypeDetails(type ,status): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}CollegeType/insertClgTypeDetails`,
        {
            type:type,
            status:status
        }
    )}

     //------------------------------ getClgTypeDetailsById ---------------------------------------//

    public getClgTypeDetailsById(typeId): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}CollegeType/getClgTypeDetailsById`,
        {
            typeId:typeId
        }
    )}

     //------------------------------ updatetClgTypeDetails ---------------------------------------//

    public updatetClgTypeDetails(type,status,collegeIdData): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}CollegeType/updatetClgTypeDetails`,
        {
            type:type,
            status:status,
            id:collegeIdData
        }
    )}

     //------------------------------ getCategoryList ---------------------------------------//

     public getCategoryList(type,page,pageSize,startNum,columnIndex,sortValue,search): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Category/getCategoryList`,
        {
            type: type,
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

     //------------------------------ insertCategoryDetails ---------------------------------------//

     public insertCategoryDetails(catname,topmenu,menuorder,status,type): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Category/insertCategoryDetails`,
        {
            CatName:catname,
            TopMenu:topmenu,
            MenuOrder:menuorder,
            Status:status,
            type: type,
        }
    )}

     //------------------------------ updateCategoryDetails ---------------------------------------//

     public updateCategoryDetails(catname,topmenu,menuorder,status,catId,type): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Category/updateCategoryDetails`,
        {
            CatName:catname,
            TopMenu:topmenu,
            MenuOrder:menuorder,
            Status:status,
            CatId:catId,
            type: type,
        }
    )}

     //------------------------------ getCategoryDetailsById ---------------------------------------//

     public getCategoryDetailsById(catId,type): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Category/getCategoryDetailsById`,
        {
            CatId:catId,
            type: type,
        }
    )}

     //------------------------------ deleteCategoryDetails ---------------------------------------//

     public deleteCategoryDetails(cat_id): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Category/deleteCategoryDetails`,
        {
            CatId:cat_id
        }
    )}


    //------------------------------ getFacilitiesList ---------------------------------------//

    public getFacilitiesList(page,pageSize,startNum,columnIndex,sortValue,search): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Facilities/getFacilitiesList`,
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

    //------------------------------ getFacilities ---------------------------------------//

    public getFacilities(): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Facilities/getFacilities`,
        {}
    )}

      //------------------------------ insertFacilities ---------------------------------------//

      public insertFacilities(faciname,description,icon,status): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Facilities/insertFacilities`,
        {
            title:faciname,
            description:description,
            icon:icon,
            status:status
        }
    )}

     //------------------------------ updateFacilities ---------------------------------------//

     public updateFacilities(faciId,faciname,description,icon,status): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Facilities/updateFacilities`,
        {
            id:faciId,
            title:faciname,
            description:description,
            icon:icon,
            status:status
        }
    )}

      //------------------------------ getFacilitiesDetailsById ---------------------------------------//

      public getFacilitiesDetailsById(faciId): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Facilities/getFacilitiesDetailsById`,
        {
            id:faciId
        }
    )}

     //------------------------------ deleteFacilities ---------------------------------------//

     public deleteFacilities(faci_id): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Facilities/deleteFacilities`,
        {
            id:faci_id
        }
    )}
    

     //------------------------------ getRankCategoryList ---------------------------------------//

     public getRankCategoryList(page,pageSize,startNum,columnIndex,sortValue,search): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}RankCategories/getRankCategoryList`,
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

      //------------------------------ getRankcategories ---------------------------------------//

      public getRankcategories(): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}RankCategories/getRankcategories`,
        {}
    )}

        //------------------------------ insertRankCategory ---------------------------------------//

        public insertRankCategory(title,image): Observable<any> {
            return this.httpClient.post(`${this.apiurl3}RankCategories/insertRankCategory`,
            {
                title:title,
                image:image
            }
        )}
    
         //------------------------------ updateRankCategory ---------------------------------------//
    
         public updateRankCategory(rankId,title,image): Observable<any> {
            return this.httpClient.post(`${this.apiurl3}RankCategories/updateRankCategory`,
            {
                id:rankId,
                title:title,
                image:image
            }
        )}
    
          //------------------------------ getRnkCatDetailsById ---------------------------------------//
    
          public getRnkCatDetailsById(rankId): Observable<any> {
            return this.httpClient.post(`${this.apiurl3}RankCategories/getRnkCatDetailsById`,
            {
                id:rankId
            }
        )}
    
         //------------------------------ deleteRnkCatDetails ---------------------------------------//
    
         public deleteRnkCatDetails(rank_id): Observable<any> {
            return this.httpClient.post(`${this.apiurl3}RankCategories/deleteRnkCatDetails`,
            {
                id:rank_id
            }
        )}

             //  ------------------------------ uploadimages ---------------------------------------//
        public uploadimages(formData): Observable<any> {
        return this.httpClient.post( `${this.apiurl3}RankCategories/uploadimages`,
         formData
         );
   
        }

          //------------------------------ getCountryList ---------------------------------------//

        public getCountryList(page,pageSize,startNum,columnIndex,sortValue,search): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Country/getCountryList`,
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

          //------------------------------ getCountry ---------------------------------------//

          public getCountry(): Observable<any> {
            return this.httpClient.post(`${this.apiurl3}Country/getCountry`,
            { }
            )}

        //------------------------------ insertCountryDetails ---------------------------------------//

        public insertCountryDetails(name): Observable<any> {
            return this.httpClient.post(`${this.apiurl3}Country/insertCountryDetails`,
            {
                name : name
            }
        )}
    
         //------------------------------ updateCountryDetails ---------------------------------------//
    
         public updateCountryDetails(countrId,name): Observable<any> {
            return this.httpClient.post(`${this.apiurl3}Country/updateCountryDetails`,
            {
                id:countrId,
                name:name,
            }
        )}
    
          //------------------------------ getCountryDetailsById ---------------------------------------//
    
          public getCountryDetailsById(countrId): Observable<any> {
            return this.httpClient.post(`${this.apiurl3}Country/getCountryDetailsById`,
            {
                id:countrId
            }
        )}
    
         //------------------------------ deleteCountry ---------------------------------------//
    
         public deleteCountry(countr_Id): Observable<any> {
            return this.httpClient.post(`${this.apiurl3}Country/deleteCountry`,
            {
                id:countr_Id
            }
        )}

        //------------------------------ getClgList ---------------------------------------//

        public getClgList(page,pageSize,startNum,columnIndex,sortValue,search): Observable<any> {
            return this.httpClient.post(`${this.apiurl3}College/getClgList`,
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

        //------------------------------ getColleges ---------------------------------------//

        public getColleges(): Observable<any> {
            return this.httpClient.post(`${this.apiurl3}College/getColleges`,
            {}
        )}

        //------------------------------ insertCollegeDetails ---------------------------------------//

        public insertCollegeDetails(collegeName,country,state,mobileNumber,accreditation,
                           maplocation,city,year,address,emailAddress,website,clgType,
                           description,regPkgType,conditions,status,menu,entranceTest,what_new,notification,notification_link): Observable<any> {
            return this.httpClient.post(`${this.apiurl3}College/insertCollegeDetails`,
                {
                    collegeName:collegeName,
                    countryId:country,
                    stateid:state,
                    phone:mobileNumber,
                    accreditation:accreditation,
                    map_location:maplocation,
                    cityid:city,
                    estyear:year,
                    address:address,
                    email:emailAddress,
                    website:website,
                    collegeTypeId:clgType,
                    description:description,
                    cet: "1",
                    pgcet: "1",
                    package_type:regPkgType,
                    terms:conditions,
                    status:status,
                    view_in_menu:menu,
                    is_accept_entrance:entranceTest,
                    what_new:what_new,
                    notification:notification,
                    notification_link:notification_link
                }
        )}

         //------------------------------ updateCollegeDetails ---------------------------------------//

         public updateCollegeDetails(clgId,collegeName,country,state,mobileNumber,accreditation,
                                    maplocation,city,year,address,emailAddress,website,clgType,description,
                                    regPkgType,conditions,status,menu,entranceTest,what_new,notification,notification_link): Observable<any> {
             return this.httpClient.post(`${this.apiurl3}College/updateCollegeDetails`,
             {  
                clgId:clgId,
                collegeName:collegeName,
                countryId:country,
                stateid:state,
                phone:mobileNumber,
                accreditation:accreditation,
                map_location:maplocation,
                cityid:city,
                estyear:year,
                address:address,
                email:emailAddress,
                website:website,
                collegeTypeId:clgType,
                description:description,
                cet: "1",
                pgcet: "1",
                package_type:regPkgType,
                terms:conditions,
                status:status,
                view_in_menu:menu,
                is_accept_entrance:entranceTest,
                what_new:what_new,
                notification:notification,
                notification_link:notification_link
            }
 
              )}

              //------------------------------ getCollegeDetailsById ---------------------------------------//
    
          public getCollegeDetailsById(clgId): Observable<any> {
            return this.httpClient.post(`${this.apiurl3}College/getCollegeDetailsById`,
            {
                id:clgId
            }
        )}
    
         //------------------------------ deleteCollege ---------------------------------------//
    
         public deleteCollege(clg_id): Observable<any> {
            return this.httpClient.post(`${this.apiurl3}College/deleteCollege`,
            {
                id:clg_id
            }
        )}


             //------------------------------ getStateList ---------------------------------------//

            public getStateList(page,pageSize,startNum,columnIndex,sortValue,search): Observable<any> {
            return this.httpClient.post(`${this.apiurl3}State/getStateList`,
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

            //------------------------------ insertStateDetails ---------------------------------------//

        public insertStateDetails(stateName,countryId,view_in_menu): Observable<any> {
            return this.httpClient.post(`${this.apiurl3}State/insertStateDetails`,
            {
                stateName:stateName,
                countryId:countryId,
                view_in_menu:view_in_menu
            }
        )}
    
         //------------------------------ updateStateDetails ---------------------------------------//
    
         public updateStateDetails(stateName,countryId,view_in_menu,stateId): Observable<any> {
            return this.httpClient.post(`${this.apiurl3}State/updateStateDetails`,
            {
                stateName:stateName,
                countryId:countryId,
                view_in_menu:view_in_menu,
                id:stateId,
            }
        )}
    
          //------------------------------ getStateDetailsById ---------------------------------------//
    
          public getStateDetailsById(stateId): Observable<any> {
            return this.httpClient.post(`${this.apiurl3}State/getStateDetailsById`,
            {
                id:stateId
            }
        )}
    
         //------------------------------ deleteState ---------------------------------------//
    
         public deleteState(state_id): Observable<any> {
            return this.httpClient.post(`${this.apiurl3}State/deleteState`,
            {
                id:state_id
            }
        )}

            //------------------------------ getStateDetailsByCntId ---------------------------------------//

            public getStateDetailsByCntId(CountryId): Observable<any> {
                return this.httpClient.post(`${this.apiurl3}State/getStateDetailsByCntId`,
                    {
                        CountryId:CountryId
                    }
                )}

        
            //------------------------------ getCityList ---------------------------------------//

            public getCityList(page,pageSize,startNum,columnIndex,sortValue,search): Observable<any> {
            return this.httpClient.post(`${this.apiurl3}City/getCityList`,
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

        //------------------------------ insertCityDetails ---------------------------------------//

        public insertCityDetails(city,countryId,stateid,view_in_menu): Observable<any> {
            return this.httpClient.post(`${this.apiurl3}City/insertCityDetails`,
            {
                city:city,
                countryId:countryId,
                stateid:stateid,
                view_in_menu:view_in_menu
            }
        )}
    
         //------------------------------ updateCityDetails ---------------------------------------//
    
         public updateCityDetails(cityId,city,countryId,stateid,view_in_menu): Observable<any> {
            return this.httpClient.post(`${this.apiurl3}City/updateCityDetails`,
            {
                id:cityId,
                city:city,
                countryId:countryId,
                stateid:stateid,
                view_in_menu:view_in_menu
            }
        )}
    
          //------------------------------ getCityDetailsById ---------------------------------------//
    
          public getCityDetailsById(cityId): Observable<any> {
            return this.httpClient.post(`${this.apiurl3}City/getCityDetailsById`,
            {
                id:cityId
            }
        )}
    
         //------------------------------ deleteCity ---------------------------------------//
    
         public deleteCity(city_id): Observable<any> {
            return this.httpClient.post(`${this.apiurl3}City/deleteCity`,
            {
                id:city_id
            }
        )}

       
        //------------------------------ getCityDetailsByStateId ---------------------------------------//
    
        public getCityDetailsByStateId(stateId): Observable<any> {
            return this.httpClient.post(`${this.apiurl3}City/getCityDetailsByStateId`,
            {
                stateId:stateId
            }
        )}

        //------------------------------ getPackagesList ---------------------------------------//

         public getPackagesList(page,pageSize,startNum,columnIndex,sortValue,search): Observable<any> {
                return this.httpClient.post(`${this.apiurl3}Packages/getPackagesList`,
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
    
        //------------------------------ insertPackagesDetails ---------------------------------------//
    
        public insertPackagesDetails(name,price): Observable<any> {
            return this.httpClient.post(`${this.apiurl3}Packages/insertPackagesDetails`,
                {
                    name:name,
                    price:price
                }
            )}
        
        //------------------------------ updatePackagesDetails ---------------------------------------//
        
        public updatePackagesDetails(pkgId,name,price): Observable<any> {
            return this.httpClient.post(`${this.apiurl3}Packages/updatePackagesDetails`,
                {
                    id:pkgId,
                    name:name,
                    price:price
                }
            )}
        
        //------------------------------ getPackagesDetailsById ---------------------------------------//
        
        public getPackagesDetailsById(pkgId): Observable<any> {
            return this.httpClient.post(`${this.apiurl3}Packages/getPackagesDetailsById`,
                {
                    id:pkgId
                }
        )}
        
        //------------------------------ deletePackages ---------------------------------------//
        
        public deletePackages(pkg_id): Observable<any> {
            return this.httpClient.post(`${this.apiurl3}Packages/deletePackages`,
                {
                    id:pkg_id
                }
        )}

         //  ------------------------------ uploadDocs ---------------------------------------//
        
        public uploadDocs(formData): Observable<any> {
            return this.httpClient.post(
             `${this.apiurl3}Loan/uploadDocs`,
             formData
            );
        }

        //------------------------------ getLoanList ---------------------------------------//

        public getLoanList(page,pageSize,startNum,columnIndex,sortValue,search): Observable<any> {
            return this.httpClient.post(`${this.apiurl3}Loan/getLoanList`,
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

    //------------------------------ insertLoanDetails ---------------------------------------//

    public insertLoanDetails(name,type,file_link): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Loan/insertLoanDetails`,
            {
                name:name,
                type:type,
                file_link:file_link
            }
        )}
    
    //------------------------------ updateLoanDetails ---------------------------------------//
    
    public updateLoanDetails(loanId,name,type,file_link): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Loan/updateLoanDetails`,
            {
                id:loanId,
                name:name,
                type:type,
                file_link:file_link
            }
        )}
    
    //------------------------------ getLoanDetailsById ---------------------------------------//
    
    public getLoanDetailsById(loanId): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Loan/getLoanDetailsById`,
            {
                id:loanId
            }
    )}
    
    //------------------------------ deleteLoan ---------------------------------------//
    
    public deleteLoan(loan_id): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Loan/deleteLoan`,
            {
                id:loan_id
            }
    )}

     //  ------------------------------ ScholarUploadDocs ---------------------------------------//
        
     public ScholarUploadDocs(formData): Observable<any> {
        return this.httpClient.post(
         `${this.apiurl3}Scholarships/uploadDocs`,
         formData
        );
    }

    //------------------------------ getScholarshipsList ---------------------------------------//

    public getScholarshipsList(page,pageSize,startNum,columnIndex,sortValue,search): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Scholarships/getScholarshipsList`,
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

    //------------------------------ getScholarships ---------------------------------------//

    public getScholarships(): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Scholarships/getScholarships`,
            {}
    )}

    //------------------------------ insertScholarshipsDetails ---------------------------------------//

    public insertScholarshipsDetails(provider_name,name,type,file_link): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}Scholarships/insertScholarshipsDetails`,
        {
            provider_name:provider_name,
            name:name,
            type:type,
            file_link:file_link
        }
    )}

    //------------------------------ updateScholarshipsDetails ---------------------------------------//

    public updateScholarshipsDetails(scholarId,provider_name,name,type,file_link): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}Scholarships/updateScholarshipsDetails`,
        {
            id:scholarId,
            provider_name:provider_name,
            name:name,
            type:type,
            file_link:file_link
        }
    )}

    //------------------------------ getScholarshipsDetailsById ---------------------------------------//

    public getScholarshipsDetailsById(scholarId): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}Scholarships/getScholarshipsDetailsById`,
        {
            id:scholarId
        }
    )}

    //------------------------------ deleteScholarships ---------------------------------------//

    public deleteScholarships(scholar_id): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}Scholarships/deleteScholarships`,
        {
            id:scholar_id
        }
    )}

    //------------------------------ getFaqList ---------------------------------------//

    public getFaqList(page,pageSize,startNum,columnIndex,sortValue,search): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Faq/getFaqList`,
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

    //------------------------------ insertFaqDetails ---------------------------------------//

    public insertFaqDetails(categoryid,heading,description,status): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}Faq/insertFaqDetails`,
        {
            categoryid:categoryid,
            heading:heading,
            description:description,
            status:status,
        }
    )}

    //------------------------------ updateFaqDetails ---------------------------------------//

    public updateFaqDetails(faqsId,categoryid,heading,description,status): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}Faq/updateFaqDetails`,
        {
            id:faqsId,
            categoryid:categoryid,
            heading:heading,
            description:description,
            status:status,
        }
    )}

    //------------------------------ getFaqDetailsById ---------------------------------------//

    public getFaqDetailsById(faqsId): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}Faq/getFaqDetailsById`,
        {
            id:faqsId
        }
    )}

    //------------------------------ deleteFaq ---------------------------------------//

    public deleteFaq(faqs_id): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}Faq/deleteFaq`,
        {
            id:faqs_id
        }
    )}

    //------------------------------ getCategoryListByType ---------------------------------------//

    public getCategoryListByType(type): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Category/getCategoryListByType`,
            {
                type:type
            }
    )}

      //  ------------------------------ BlogUploadDocs ---------------------------------------//
        
      public BlogUploadDocs(formData): Observable<any> {
        return this.httpClient.post(
         `${this.apiurl3}Blog/uploadDocs`,
         formData
        );
    }

    //------------------------------ getBlogList ---------------------------------------//

    public getBlogList(page,pageSize,startNum,columnIndex,sortValue,search): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Blog/getBlogList`,
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

    //------------------------------ insertBlogDetails ---------------------------------------//

    public insertBlogDetails(categoryid,title,image,description,status,Exam,colleges): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}Blog/insertBlogDetails`,
        {
            categoryid:categoryid,
            title:title,
            image:image,
            description:description,
            status:status,
            exam_id :Exam,
            college_id :colleges
        }
    )}

    //------------------------------ updateBlogDetails ---------------------------------------//

    public updateBlogDetails(blogId,categoryid,title,image,description,status,Exam,colleges): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}Blog/updateBlogDetails`,
        {
            id:blogId,
            categoryid:categoryid,
            title:title,
            image:image,
            description:description,
            status:status,
            exam_id :Exam,
            college_id :colleges
        }
    )}

    //------------------------------ getBlogDetailsById ---------------------------------------//

    public getBlogDetailsById(blogId): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}Blog/getBlogDetailsById`,
        {
            id:blogId
        }
    )}

    //------------------------------ deleteBlog ---------------------------------------//

    public deleteBlog(blog_id): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}Blog/deleteBlog`,
        {
            id:blog_id
        }
    )}

    //------------------------------ getBlogcategoryList ---------------------------------------//

    public getBlogcategoryList(page,pageSize,startNum,columnIndex,sortValue,search): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Blogcategory/getBlogcategoryList`,
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

    //------------------------------ getBlogCategory ---------------------------------------//

    public getBlogCategory(): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Blogcategory/getBlogCategory`,
            {}
    )}

    //  ------------------------------ ExamUploadDocs ---------------------------------------//
        
       public ExamUploadDocs(formData): Observable<any> {
        return this.httpClient.post(
         `${this.apiurl3}Exam/uploadDocs`,
         formData
        );
    }

    //  ------------------------------ ExamdeleteDoc ---------------------------------------//
        
    public ExamDeleteDoc(imageId): Observable<any> {
        return this.httpClient.post(
         `${this.apiurl3}Exam/deleteDoc`,
         {
            imageId:imageId,
        }
        );
    }

    //------------------------------ getExamList ---------------------------------------//

    public getExamList(page,pageSize,startNum,columnIndex,sortValue,search): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Exam/getExamList`,
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

    //------------------------------ insertExamDetails ---------------------------------------//

    public insertExamDetails(name,category,status,menu,description,criteria,process,pattern,notification): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}Exam/insertExamDetails`,
        {
            name:name,
            category:category,
            status:status,
            view_in_menu:menu,
            description:description,
            criteria:criteria,
            process:process,
            pattern:pattern,
            notification:notification
        }
    )}

    //------------------------------ updateExamDetails ---------------------------------------//

    public updateExamDetails(examId,name,category,status,menu,description,criteria,process,pattern,notification): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}Exam/updateExamDetails`,
        {
            id:examId,
            name:name,
            category:category,
            status:status,
            view_in_menu:menu,
            description:description,
            criteria:criteria,
            process:process,
            pattern:pattern,
            notification:notification
        }
    )}

    //------------------------------ getExamDetailsById ---------------------------------------//

    public getExamDetailsById(examId): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}Exam/getExamDetailsById`,
        {
            id:examId
        }
    )}

    //------------------------------ deleteExam ---------------------------------------//

    public deleteExam(exam_id): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}Exam/deleteExam`,
        {
            id:exam_id
        }
    )}

      //------------------------------ insertBlogCategoryDetails ---------------------------------------//

      public insertBlogCategoryDetails(catname,status): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Blogcategory/insertBlogcategoryDetails`,
        {
            name:catname,
            status:status,
        }
    )}

     //------------------------------getBlogsCategoryList---------------------------------------//

     public getBlogsCategoryList(type,page,pageSize,startNum,columnIndex,sortValue,search): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Blogcategory/getBlogcategoryList`,
        {
            type: type,
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
    //------------------------------  getCategoryBlogsDetailsById---------------------------------------//

    public getCategoryBlogsDetailsById(catId): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Blogcategory/getBlogcategoryDetailsById`,
        {
            id:catId,

        }
    )}


        //------------------------------ updateBlogCategoryDetails ---------------------------------------//

        public updateBlogCategoryDetails(catId,catname,status): Observable<any> {
            return this.httpClient.post(`${this.apiurl3}Blogcategory/updateBlogcategoryDetails`,
            {
                id:catId,
                name:catname,
                status:status,

            }
        )}

         //------------------------------ deleteBlogCategoryDetails ---------------------------------------//

     public deleteBlogCategoryDetails(cat_id): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Blogcategory/deleteBlogcategory`,
        {
            id:cat_id
        }
    )}

      //------------------------------getCourseList---------------------------------------//

      public getCourseList(page,pageSize,startNum,columnIndex,sortValue,search,category): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Courses/getCourseList`,
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
              value: search,
              category: category
            }
        }
    )}

    //------------------------------ insertCourseDetails ---------------------------------------//

    public insertCourseDetails(name,duration,academicCategory,courseCategory,scope,jobProfile,certification,description,ImageName,sub_category): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Courses/insertCourseDetails`,
            {
                name:name,
                duration:duration,
                academicCategory:academicCategory,
                courseCategory:courseCategory,
                scope:scope,
                jobProfile:jobProfile,
                certification:certification,
                description:description,
                imageName:ImageName,
                sub_category:sub_category
            }
        )}
    
        //------------------------------ updateCourseDetails ---------------------------------------//
    
        public updateCourseDetails(courseId,name,duration,academicCategory,courseCategory,scope,jobProfile,certification,description,ImageName,sub_category): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Courses/updateCourseDetails`,
            {
                course_id:courseId,
                name:name,
                duration:duration,
                academicCategory:academicCategory,
                courseCategory:courseCategory,
                scope:scope,
                jobProfile:jobProfile,
                certification:certification,
                description:description,
                imageName:ImageName,
                sub_category:sub_category
            }
        )}

        //  ------------------------------ uploadCourseDocs ---------------------------------------//

         public uploadCourseDocs(formData): Observable<any> {
           return this.httpClient.post(
         `${this.apiurl3}Courses/uploadDocs`,
         formData
        );
       }

        //------------------------------ deleteCourses ---------------------------------------//
    
        public deleteCourses(course_id): Observable<any> {
            return this.httpClient.post(`${this.apiurl3}Courses/deleteCourses`,
                {
                    id:course_id
                }
            )}
    
        //------------------------------ getCourseDetailsById ---------------------------------------//
    
        public getCourseDetailsById(courseId): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Courses/getCourseDetailsById`,
            {
                id:courseId
            }
        )}

     //------------------------------ getUGCourses ---------------------------------------//

     public getUGCourses(): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Courses/getUGCourses`,
        {
            
        }
    )}

     //------------------------------ getPGCourses ---------------------------------------//

     public getPGCourses(): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Courses/getPGCourses`,
        {}
    )}

          //------------------------------ getDiplomaCourses ---------------------------------------//

          public getDiplomaCourses(): Observable<any> {
            return this.httpClient.post(`${this.apiurl3}Courses/getDiplomaCourses`,
            {}
        )}
    
     //------------------------------ getDoctorialCourses ---------------------------------------//
    
     public getDoctorialCourses(): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Courses/getDocCourses`,
        {}
    )}
    
    
     //------------------------------ getOtherCourses ---------------------------------------//
    
     public getOtherCourses(): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Courses/getOtherCourses`,
        {}
    )}

      //------------------------------ getPostDocCourses ---------------------------------------//
    
      public getPostDocCourses(): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Courses/getPostDocCourses`,
        {}
    )}

      //------------------------------ getAdvMasterCourses ---------------------------------------//
    
      public getAdvMasterCourses(): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Courses/getAdvMasterCourses`,
        {}
    )}

     //------------------------------ getAcCategoryForCourse ---------------------------------------//

     public getAcCategoryForCourse(): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Category/getAcCategoryForCourse`,
        {}
    )}

     //------------------------------ getCategoryForCourse ---------------------------------------//

     public getCategoryForCourse(): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Category/getCategoryForCourse`,
        {}
    )}


     //  ------------------------------ collegeUploadDocs ---------------------------------------//
        
     public collegeUploadDocs(formData): Observable<any> {
        return this.httpClient.post(
         `${this.apiurl3}College/uploadDocs`,
         formData
        );
    }

    //  ------------------------------ collegeSaveDoc ---------------------------------------//
        
       public collegeSaveDoc(clgId,logoImage,bannerImage,type,image): Observable<any> {
        return this.httpClient.post(
         `${this.apiurl3}College/saveDoc`,
         {
            clgId:clgId,
            logoImage:logoImage,
            bannerImage:bannerImage,
            type:type,
            image:image
        }
        );
    }

    
    //  ------------------------------ collegeDeleteDoc ---------------------------------------//
        
    public collegeDeleteDoc(imageId): Observable<any> {
        return this.httpClient.post(
         `${this.apiurl3}College/deleteDoc`,
         {
            imageId:imageId,
        }
        );
    }

     //------------------------------ updateCategoryForClg ---------------------------------------//

     public updateCategoryForClg(catIds,clgId): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}College/updateCategoryForClg`,
        {
            catIds:catIds,
            clgId:clgId
        }
    )}

     //------------------------------ updateCourseForClg ---------------------------------------//

     public updateCourseForClg(clgId,courses): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}College/updateCourseForClg`,
        {
            clgId:clgId,
            courses:courses,
        }
    )}

     //------------------------------ updateHighlightsForClg ---------------------------------------//

     public updateHighlightsForClg(clgId,highlights): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}College/updateHighlightsForClg`,
        {
            clgId:clgId,
            highlights:highlights,
        }
    )}

    //------------------------------ insertUpdateFeeStructure ---------------------------------------//

       public insertUpdateFeeStructure(clgId,feeStructure): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}College/insertUpdateFeeStructure`,
        {
            clgId:clgId,
            feeStructure:feeStructure,
        }
    )}

    //------------------------------ updateFacilityForClg ---------------------------------------//

    public updateFacilityForClg(clgId,facilityIds): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}College/updateFacilityForClg`,
        {
            clgId:clgId,
            facilities:facilityIds,
        }
    )}

      //  ------------------------------ uploadBrochuresDocs ---------------------------------------//
        
      public uploadBrochuresDocs(formData): Observable<any> {
        return this.httpClient.post(
         `${this.apiurl3}College/uploadBrochuresDocs`,
         formData
        );
    }

     //------------------------------ saveBrochuresDoc ---------------------------------------//

     public saveBrochuresDoc(clgId,image): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}College/saveBrochuresDoc`,
        {
            clgId:clgId,
            image:image,
        }
    )}

      //------------------------------getEventList---------------------------------------//

      public getEventList(page,pageSize,startNum,columnIndex,sortValue,search): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Event/getEventList`,
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

     //------------------------------ insertEventsDetails ---------------------------------------//

     public insertEventsDetails(name,address,contactnumber,email,website,maplocation,start_date,end_date,desc,collegeid,regPkgType,status): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Event/insertEventDetails`,
            {
                name:name,
                address:address,
                phone:contactnumber,
                email:email,
                website:website,
                maplocation:maplocation,
                start_date:start_date,
                end_date:end_date,
                desc:desc,
                collegeid:collegeid,
                package:regPkgType,
                status:status
            }
    )}

     //------------------------------ updateEventDetails ---------------------------------------//

     public updateEventDetails(eventId,name,address,contactnumber,email,website,maplocation,start_date,end_date,desc,collegeid,package1,status): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Event/updateEventDetails`,
            {
                id:eventId,
                name:name,
                address:address,
                phone:contactnumber,
                email:email,
                website:website,
                maplocation:maplocation,
                start_date:start_date,
                end_date:end_date,
                desc:desc,
                collegeid:collegeid,
                package:package1,
                status:status
            }
    )}

     //------------------------------getEventsDetailsById---------------------------------------//

     public getEventsDetailsById(event_id): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Event/getEventDetailsById`,
        {
            id:event_id
        }
    )}

     //------------------------------deleteEvent---------------------------------------//

     public deleteEvent(event_id): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Event/deleteEvent`,
        {
            id:event_id
        }
    )}

    //  ------------------------------ SaveDoc ---------------------------------------//

    public SaveDoc(postId,type,image): Observable<any> {
            return this.httpClient.post(
             `${this.apiurl3}/Common/saveDoc `,
             {
                postId:postId,
                type:type,
                image:image
            }
            );
    }

    //  ------------------------------ updateExamsDocs ---------------------------------------//

    public updateExamsDocs(postId,questionpaper,preparation,syllabus): Observable<any> {
        return this.httpClient.post(
         `${this.apiurl3}/Exam/updateExamsDocs`,
         {
            examId:postId,
            questionpaper:questionpaper,
            preparation:preparation,
            syllabus:syllabus
         }
        );
}


     //  ------------------------------ eventUploadDocs ---------------------------------------//
    
     public eventUploadDocs(formData): Observable<any> {
        return this.httpClient.post(
         `${this.apiurl3}Event/uploadDocs`,
         formData
        );
    }

     //------------------------------deleteDoc---------------------------------------//

     public EventDeleteDoc(imageId): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Event/deleteDoc`,
        {
            imageId:imageId
        }
    )}

    //------------------------------getReviewList---------------------------------------//

    public getReviewList(page,pageSize,startNum,columnIndex,sortValue,search): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Review/getReviewList`,
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

    //------------------------------getReviewDetailsById---------------------------------------//

    public getReviewDetailsById(reviewId): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Review/getReviewDetailsById`,
        {
            id:reviewId
        }
    )}

    //------------------------------deleteReview---------------------------------------//

    public deleteReview(review_id): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Review/deleteReview`,
        {
            id:review_id
        }
    )}

    //------------------------------updateStatus---------------------------------------//

    public reviewUpdateStatus(reviewId,statusId): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Review/updateStatus`,
        {
            reviewId:reviewId,
            statusId:statusId
        }
    )}

    //------------------------------getEnquiryList---------------------------------------//

    public getEnquiryList(page,pageSize,startNum,columnIndex,sortValue,search): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Enquiry/getEnquiryList`,
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

    //------------------------------deleteEnquiry---------------------------------------//

    public deleteEnquiry(enquiryId): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Enquiry/deleteEnquiry`,
        {
            id:enquiryId
        }
    )}

    //------------------------------ updateStatus ---------------------------------------//

    public updateStatus(enquiryId,status): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Enquiry/updateStatus`,
        {
            id:enquiryId,
            is_attended:status
        }
    )}

    //------------------------------getCourseApplicationList---------------------------------------//

    public getCourseApplicationList(page,pageSize,startNum,columnIndex,sortValue,search): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}CourseApplication/getCourseApplicationList`,
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

    //------------------------------deleteCourseApplication---------------------------------------//

    public deleteCourseApplication(applicationId): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}CourseApplication/deleteCourseApplication`,
        {
            id : applicationId
        }
    )}

    //------------------------------coursesOfferedInSameGrp---------------------------------------//

    public coursesOfferedInSameGrp(page,pageSize,startNum,columnIndex,sortValue,search): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Courses/coursesOfferedInSameGrp`,
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

    //------------------------------getcourseInquiry---------------------------------------//

    public getcourseInquiry(page,pageSize,startNum,columnIndex,sortValue,search): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Courseinquiry/getcourseInquiry`,
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

    //------------------------------course_inquiryDelete---------------------------------------//

    public course_inquiryDelete(enquiry_id): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Courseinquiry/course_inquiryDelete`,
        {
            id:enquiry_id
        }
    )}

     //  ------------------------------ CareerUploadDocs ---------------------------------------//
        
     public CareerUploadDocs(formData): Observable<any> {
        return this.httpClient.post(
         `${this.apiurl3}Careers/uploadDocs`,
         formData
        );
    }

    //------------------------------CareerDeleteDoc---------------------------------------//

    public CareerDeleteDoc(review_id): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Careers/deleteDoc`,
        {
            id:review_id
        }
    )}

    //------------------------------getCareersList---------------------------------------//

    public getCareersList(page,pageSize,startNum,columnIndex,sortValue,search): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Careers/getCareersList`,
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

     //------------------------------ insertCareersDetails ---------------------------------------//

     public insertCareersDetails(name,description,image,categoryid,status): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Careers/insertCareersDetails`,
            {
                careerName:name,
                description:description,
                image:image,
                categoryid:categoryid,
                status:status
            }
    )}

     //------------------------------ updateCareersDetails ---------------------------------------//

     public updateCareersDetails(careerId,name,description,image,categoryid,status): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Careers/updateCareersDetails`,
            {
                id:careerId,
                careerName:name,
                description:description,
                image:image,
                categoryid:categoryid,
                status:status
            }
    )}

     //------------------------------getCareersDetailsById---------------------------------------//

     public getCareersDetailsById(careerId): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Careers/getCareersDetailsById`,
        {
            id:careerId
        }
    )}

     //------------------------------deleteCareers---------------------------------------//

     public deleteCareers(careerId): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Careers/deleteCareers`,
        {
            id:careerId
        }
    )}

    //------------------------------ getPredictList ---------------------------------------//

   public getPredictList(page,pageSize,startNum,columnIndex,sortValue,search): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}PredictAdmission/getPredictedadmission`,
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

   //------------------------------ insertupdateAcademicYearForClg ---------------------------------------//

   public insertupdateAcademicYearForClg(clgId,placementStats): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}College/insertupdateAcademicYearForClg`,
    {
        clgId: clgId,
        placementStats: placementStats
    }
   )}

   //------------------------------ deleteAcadmicPlacements ---------------------------------------//

   public deleteAcadmicPlacements(placeIndex): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}College/deleteAcadmicPlacements`,
    {
        placementId: placeIndex
    }
   )}

   //------------------------------ insertupdateRankForClg ---------------------------------------//

   public insertupdateRankForClg(clgId,rank): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}College/insertupdateRankForClg`,
    {
        clgId: clgId,
        rank: rank
    }
   )}

    //------------------------------ getPlacementCategory ---------------------------------------//

    public getPlacementCategory(): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}College/getPlacementCategory`,
        {}
    )}

   //------------------------------ deleteRankForCollege ---------------------------------------//

   public deleteRankForCollege(rankId): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}College/deleteRankForCollege`,
    {
        rankId: rankId
    }
   )}

    //------------------------------ updateScholarshipsForClg ---------------------------------------//

     public updateScholarshipsForClg(clgId,scholarships): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}College/updateScholarshipsForClg`,
        {
            clgId: clgId,
            scholarships: scholarships
        }
    )}

    //------------------------------ deleteHighlightsOfCollege ---------------------------------------//

    public deleteHighlightsOfCollege(highlightId): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}College/deleteHighlightsOfCollege`,
        {
            highlightId: highlightId
        }
    )}

    //------------------------------ deleteBrochureOfCollege ---------------------------------------//

     public deleteBrochureOfCollege(brochureId): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}College/deleteBrochureOfCollege`,
        {
            brochureId: brochureId
        }
    )}

    //------------------------------ deleteFeeStructOfCollege ---------------------------------------//

     public deleteFeeStructOfCollege(feeId): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}College/deleteFeeStructOfCollege`,
        {
            feeId: feeId
        }
    )}

    //------------------updateEventsCategory---------------------//

    public updateEventsCategory(eventId,eventsIds): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Event/updateCategory`,
        {
            eventId:eventId,
            catIds:eventsIds
        }
    )}

    //------------------getPageCategory---------------------//

    public getPageCategory(): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Common/getPageCategory`,
        { }
    )}

    //------------------getSampleFormat---------------------//

    public getSampleFormat(): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}College/getSampleFormat`,
        { }
    )}

    //------------------getFormatDataUsingId---------------------//

    public getFormatDataUsingId(sampleId): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}College/getFormatDataUsingId`,
        { 
            sampleId:sampleId
        }
    )}

    //------------------getCourseUsingClgId---------------------//

    public getCourseUsingClgId(clgId): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}College/getCourseUsingClgId`,
        { 
            clgId:clgId
        }
    )}

     //------------------getExams---------------------//

    public getExams(search_exam): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Exam/getExams`,
        {
            searchExam:search_exam
        }
    )}

    //------------------getCollegeCourseDetail---------------------//

    public getCollegeCourseDetail(courseId,clgId): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Courses/getCollegeCourseDetail`,
        {
            id : courseId,
            clgid: clgId
        }
    )}

    

    //------------------updateCourses---------------------//

    public updateCourses(clgId,courseId,fieldName,fieldDetails): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Courses/updateCourses`,
        {
            collegeId: clgId,
            courseId: courseId,           
            fieldName: fieldName,
            fieldDetails : fieldDetails
        }
    )}

    
    //------------------getSubCategoryByCatId---------------------//

    public getSubCategoryByCatId(catId,acCatId): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Category/getSubCategoryByCatId`,
        {
            catId:catId,
            acCatId:acCatId
        }
    )}

    //------------------allFaqByCategory---------------------//

    public allFaqByCategory(catId): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}faq/allFaqByCatagory`,
        {
            id:catId,
        }
    )}

    //------------------updateFaqForCollege---------------------//

    public updateFaqForCollege(Ids,clgId,catId): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}faq/updateFaqForCollege`,
        {
            id:Ids,
            college:clgId,
            faq_type:catId
        }
    )}

    //------------------getCourses---------------------//

    public getCourses(search_course): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Courses/getCourses`,
        {
            search_courses:search_course
        }
    )}

    //------------------getSubCategory---------------------//

    public getCategories(search_category): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Category/getCategories`,
        {
            search_category:search_category
        }
    )}

    //------------------getCategories---------------------//

    public getSubCategory(search_subcategory,categoryId): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Category/getSubCategory`,
        {
            search_category:search_subcategory,
            categoryId : categoryId
        }
    )}

    //------------------getClgTypes---------------------//

    public getClgTypes(search_clgtype): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}CollegeType/getClgTypes`,
        {
            search_clgtype:search_clgtype
        }
    )}

    //------------------------------ getCounselingFeesList ---------------------------------------//

   public getCounselingFeesList(page,pageSize,startNum,columnIndex,sortValue,search): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}Common/getCounselingFeesList`,
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

    //------------------saveCounselingFees---------------------//

    public saveCounselingFees(subCatType,catType,clgType,amount,exam): Observable<any> {
        return this.httpClient.post(`${this.apiurl3}Common/saveCounselingFees`,
        {
            sub_category:subCatType,
            categoryid:catType,
            collegeType:clgType,
            fees:amount,
            exam_id:exam
        }
    )}

    //------------------updateCounselingFees---------------------//

   public updateCounselingFees(subCatType,catType,clgType,amount,feeId,exam): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}Common/updateCounselingFees`,
    {
        sub_category:subCatType,
        categoryid:catType,
        collegeType:clgType,
        fees:amount,
        id : feeId,
        exam_id:exam
    }
   )}

   //------------------deleteCounselingFees---------------------//

   public deleteCounselingFees(feeId): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}Common/deleteCounselingFees`,
    {
        id:feeId
    }
   )}

   //------------------getCounselingFeesById---------------------//

   public getCounselingFeesById(feeId): Observable<any> {
    return this.httpClient.post(`${this.apiurl3}Common/getCounselingFeesById`,
    {
        id:feeId
    }
   )}


 

    
}









  
    




// apiURL    OnlineInsurancePortalAPI
// apiurl3   Motor_DNI_Api  winkey2key
// apiurl   testportal.dni.ae:8443

