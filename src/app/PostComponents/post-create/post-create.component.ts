import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  model: any = {}
  constructor(private http:HttpClient, private router: Router, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  createForm(){
    this.http.post("http://localhost:86/api/create.php", this.model).subscribe( (message:any) =>{
      this.router.navigateByUrl('/');
      console.log(message);
      this.toastr.success(message.message);
    })
  }
}
