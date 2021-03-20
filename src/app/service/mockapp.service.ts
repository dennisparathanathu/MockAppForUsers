import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const URL = 'https://dev.digisuvidhacentre.com/Profile/api/MockUser';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MockappService {

  constructor(private http: HttpClient) { }
  adduser(data): Observable<any> {
    return this.http.post(URL ,{
      username:data.username,
      email:data.email,
      phone:data.phone,
      age:data.age,
      gender:data.gender


    }, httpOptions);
  }
  getusers(): Observable<any> {
    return this.http.get(URL , httpOptions);
  }
  getsingleuser(id): Observable<any>{
    return this.http.get(URL+`/${id}`, httpOptions);

  }
  deletesingleuser(id): Observable<any>{
    return this.http.get(URL+`/${id}`, httpOptions);

  }
}
