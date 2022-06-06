import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostCreateComponent } from './PostComponents/post-create/post-create.component';
import { PostEditComponent } from './PostComponents/post-edit/post-edit.component';
import { PostListComponent } from './PostComponents/post-list/post-list.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '' , component:PostListComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'addpost', component:PostCreateComponent},
  {path: 'editpost/:id', component:PostEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
