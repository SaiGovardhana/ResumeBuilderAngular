import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { HeaderModel } from 'src/app/models/httpmodels';
import { UserModel } from '../../models/Models';

@Component({
  selector: 'app-basic-header',
  templateUrl: './basic-header.component.html',
  styleUrls: ['./basic-header.component.css',"../../text.css"],

})
export class BasicHeaderComponent implements OnInit {
  faEnvelope=faEnvelope
  faPhone=faPhone
  @Input()
  headerModel!:{[key:string]:HeaderModel}
  ngOnInit(): void {
    console.log(this.headerModel)
  }
}
