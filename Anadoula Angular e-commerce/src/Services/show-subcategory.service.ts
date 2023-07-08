import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShowSubcategoryService {


  constructor( private httpClient:HttpClient) { }

  ShowAllSubCategory():Observable<any> {

    return this.httpClient.get<any>("http://localhost:5194/api/SubCategory/subcategories").pipe(catchError((err) => {
      return throwError(()=>err.message || "server error");
    }));

  }
  delete(id:any):Observable<any> {
   
    
    return this.httpClient.delete<any>(`http://localhost:5194/api/SubCategory/deletesubcategory/${id}`);
  }
}
