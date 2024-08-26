import { Component } from '@angular/core';
import { PostsService } from '../../service/posts/posts.service';
@Component({
  selector: 'app-list-posts',
  standalone: true,
  imports: [],
  templateUrl: './list-posts.component.html',
  styleUrl: './list-posts.component.css'
})
export class ListPostsComponent {

  constructor( public postsService: PostsService) {
  
  }

}
