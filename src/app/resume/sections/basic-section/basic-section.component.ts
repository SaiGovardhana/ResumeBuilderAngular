import { Component, Input, ViewEncapsulation } from '@angular/core';
import { BasicSectionModel } from '../../models/Models';

@Component({
  selector: 'app-basic-section',
  templateUrl: './basic-section.component.html',
  styleUrls: ['./basic-section.component.css','../../text.css'],

})
export class BasicSectionComponent 
{
  @Input()
    sectionModel!:BasicSectionModel
}
