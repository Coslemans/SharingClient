import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/User';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Share Posts';
  posts: any;
  constructor(private http:HttpClient, private accountService: AccountService){
    
  }
  ngOnInit(): void {
    this.getUsers();
    this.setCurrentUser();
  }

  setCurrentUser(){
    const user:User = JSON.parse(localStorage.getItem('user')); 
    this.accountService.setCurrentUser(user);
  }

  getUsers(){
    this.http.post('http://localhost:86/api/getposts.php', null).subscribe(response => {
      this.posts = response;
    }, error => {
      console.log(error);
    })
  }
}
