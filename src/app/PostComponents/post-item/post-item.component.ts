import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IPostItem } from 'src/app/_interfaces/IPostItem';
import { PostItem } from 'src/app/_models/PostItem';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input() postItem:IPostItem;


  constructor(private http:HttpClient, private router:Router, private toastr:ToastrService) { }

  ngOnInit(): void {
    console.log(this.postItem);
  }

  deletePost(ID:number){
    console.log(ID);
    this.http.post("http://localhost:86/api/delete.php", {ID:ID}).subscribe((response:any)=>{
      this.toastr.success(response.message);
      //this.router.navigateByUrl('/');
      window.location.reload();
    })
  }
}
