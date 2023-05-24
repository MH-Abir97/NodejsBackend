import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _http:HttpClient) { 

 
  }


  SaveData(userDetails:any): Observable<any>{
    debugger;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  
    return this._http.post("http://localhost:3000/user/Create",userDetails,httpOptions);
  }

  GetAll() :Observable<any>{
    return this._http.get("http://localhost:3000/user/getAll");
  }

  UpdateData(id:any,userDetails:any): Observable<any>{
    debugger;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  
    return this._http.patch("http://localhost:3000/user/Update"+"/"+id,userDetails,httpOptions);
  }


  DeleteData(id:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._http.delete("http://localhost:3000/user/remove"+"/"+id,httpOptions);
  }
 
}
