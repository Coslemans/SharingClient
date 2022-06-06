import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostListComponent } from './PostComponents/post-list/post-list.component';
import { PostItemComponent } from './PostComponents/post-item/post-item.component';
import { PostEditComponent } from './PostComponents/post-edit/post-edit.component';
import { PostCreateComponent } from './PostComponents/post-create/post-create.component';
import { RegisterComponent } from './register/register.component';
import { TextInputsComponent } from './text-inputs/text-inputs.component';
import { JwtInterceptor } from './_interceptors/jwt.interceptor';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PostListComponent,
    PostItemComponent,
    PostEditComponent,
    PostCreateComponent,
    RegisterComponent,
    TextInputsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      //positionClass: 'toastr-bottom-right'
    })
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
