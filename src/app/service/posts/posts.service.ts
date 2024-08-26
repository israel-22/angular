import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private url='https://jsonplaceholder.typicode.com/posts';

  post?:string;

  constructor( private http: HttpClient) { }

  changePost(post:string):void{
    this.post = post;
  }

  getPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this.url);
  }
 
}
