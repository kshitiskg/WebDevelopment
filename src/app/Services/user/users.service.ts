import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getAllPostData():Observable<any>{
  return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }

  createPosts(object:any):Observable<any>{
    return this.http.post("https://jsonplaceholder.typicode.com/posts",object);
  }

  updatePosts(obj:any):Observable<any>{
   return this.http.post("https://jsonplaceholder.typicode.com/posts",obj);
  }

  deleteRecord(id:number):Observable<any>{
    // return this.http.delete("https://jsonplaceholder.typicode.com/posts/"+id);
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);

      // https://jsonplaceholder.typicode.com/posts/1
  }
}
