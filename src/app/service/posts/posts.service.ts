import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private url='https://jsonplaceholder.typicode.com/posts';

  post?:string;

  constructor() { }

  changePost(post:string):void{
    this.post = post;
  }
}
