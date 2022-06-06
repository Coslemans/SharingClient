import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';
import { EditPostDTO } from 'src/app/_interfaces/EditPostDTO';
import { IPostItem } from 'src/app/_interfaces/IPostItem';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  public postID : any;
  public editItem : IPostItem
  //public postItem : EditPostDTO ={Id:0,Title:"",Description:""}
  constructor(private http:HttpClient, private params : ActivatedRoute,  private router: Router, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.params.params.subscribe(params => {
      this.http.post("http://localhost:86/api/getPost.php", params).subscribe((result:IPostItem) =>{
        this.editItem = result;
        this.postID = result.Id;
        //console.log(this.editItem);
      })
    });
  }

  editForm()
  {
    const postItem:EditPostDTO = {ID:this.editItem.Id,Title:this.editItem.Title, Description:this.editItem.Description}
    //postItem.Id = this.editItem.Id;
    //postItem.Title = this.editItem.Title;
    //postItem.Description = this.editItem.Description;
    console.log(this.editItem);
    console.log(postItem);
    this.http.post("http://localhost:86/api/update.php", postItem).subscribe((result:any) =>{
      this.toastr.success(result.message)
      this.router.navigateByUrl('/');
    });
  }

}
