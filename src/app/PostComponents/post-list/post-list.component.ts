import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostItem } from 'src/app/_models/PostItem';
import {map} from 'rxjs/operators';
import { IPostItem } from 'src/app/_interfaces/IPostItem';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: IPostItem[] = [];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    return this.http.post('http://localhost:86/api/getposts.php', null).subscribe((data:PostItem[]) => {
      this.posts = data;
      console.log(this.posts);
    });
  }
}
