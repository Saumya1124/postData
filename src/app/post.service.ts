import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }
  apiurl="http://127.0.0.1:5000/students/v1/post/all";
  
  addRegistration(registration:any){
  //  let apiurl="http://127.0.0.1:5000/students/v1/post/all";
    return this.http.post<any>(this.apiurl,registration);
  }
}
