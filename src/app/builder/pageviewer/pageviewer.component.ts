
import { Component, ViewEncapsulation } from '@angular/core';
import { BasicSectionModel, UserModel } from 'src/app/resume/models/Models';
import { sectionModel } from 'src/app/sampleData/test';

@Component({
  selector: 'app-pageviewer',
  templateUrl: './pageviewer.component.html',
  styleUrls: ['./pageviewer.component.css'],
 
})
export class PageviewerComponent 
{
  userModel:UserModel={name:"Govardhan","email":"govardhan@gmail.com",'phone':"8919106220",'designation':"Software Engineer"}
  sections:BasicSectionModel[]=[sectionModel,sectionModel,sectionModel]
}
