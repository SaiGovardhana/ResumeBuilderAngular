import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BuilderComponent } from './builder/builder.component';
import { PageviewerComponent } from './builder/pageviewer/pageviewer.component';
import { BasicSectionComponent } from './resume/sections/basic-section/basic-section.component';
import { BasicHeaderComponent } from './resume/headers/basic-header/basic-header.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { BasicTemplateComponent } from './resume/templates/basic-template/basic-template.component';
import { SafeHtmlPipe } from './pipes/SafePipe.pipe';
import { DragulaModule } from 'ng2-dragula';
import { SignupComponent } from './signup/signup.component';
import { SignupmodalComponent } from './signup/signupmodal/signupmodal.component';
import { NgbModalModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { SigninComponent } from './signin/signin.component';
import { SigninmodalComponent } from './signin/signinmodal/signinmodal.component'
import { CookieService } from 'ngx-cookie-service';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [SafeHtmlPipe,
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BuilderComponent,
    PageviewerComponent,
    BasicSectionComponent,
    BasicHeaderComponent,
    BasicTemplateComponent,
    SignupComponent,
    SignupmodalComponent,
    SigninComponent,
    SigninmodalComponent,
    DashboardComponent
  ],
  imports: [DragulaModule.forRoot(),
    BrowserModule,
    FontAwesomeModule,
    EditorModule,
    AppRoutingModule,
    NgbModalModule,
    NgbPopoverModule,FormsModule,ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
