import { Component, Input } from '@angular/core';
import { ResumeModel } from 'src/app/models/httpmodels';
import { BasicSectionModel, UserModel } from '../../models/Models';

@Component({
  selector: 'app-basic-template',
  templateUrl: './basic-template.component.html',
  styleUrls: ['./basic-template.component.css']
})
export class BasicTemplateComponent {
  @Input()
  resumeModel!:ResumeModel
  constructor()
  {

  }
}
