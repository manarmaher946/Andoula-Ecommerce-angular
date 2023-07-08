import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) {


  }


  GetAllCategories():Observable<any> {

    return this.httpClient.get<any>("http://localhost:5194/api/Home/Categories").pipe(catchError((err) => {
      return throwError(()=>err.message || "server error");
    }));

  }
}
