import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'

// import{PostService} from './post.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // constructor(private postService:PostService){}

  constructor(private http:HttpClient) {}

  onSubmit(data:any)    
  { 
    this.http.post('http://127.0.0.1:5000/students/v1/post/data',data)
    .subscribe((result)=>{
      console.warn("result",result)
    })
    console.warn(data);


    }
    
  
}
