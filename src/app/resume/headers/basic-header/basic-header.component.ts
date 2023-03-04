import { Component, Input, ViewEncapsulation } from '@angular/core';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { UserModel } from '../../models/Models';

@Component({
  selector: 'app-basic-header',
  templateUrl: './basic-header.component.html',
  styleUrls: ['./basic-header.component.css',"../../text.css"],

})
export class BasicHeaderComponent {
  faEnvelope=faEnvelope
  faPhone=faPhone
  @Input()
  userModel!:UserModel
  
}
