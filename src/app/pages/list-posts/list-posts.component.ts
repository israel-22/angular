import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService, Post } from '../../service/posts/posts.service';
@Component({
  selector: 'app-list-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-posts.component.html',
  styleUrl: './list-posts.component.css'
})
export class ListPostsComponent {

  posts:Post[] = []

  constructor( public postsService: PostsService) {}
  ngOnInit(): void {
    this.postsService.getPosts().subscribe((posts)=> {
      this.posts = posts
  })
  }

}
