import { Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
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

  @ViewChild('name',{read:ElementRef})
    name!:ElementRef
  
  @ViewChild('profession',{read:ElementRef})
    profession!:ElementRef

  @ViewChildren('header',{read:ElementRef})
    headers!:QueryList<ElementRef>

  ngOnInit(): void {
  
  }

  serialize():{[key:string]:HeaderModel}
  { let newHeaderModel:{[key:string]:HeaderModel}={};
    for(let x of this.headers)
      { let headerName:string=x.nativeElement.id;
        let headerContent:string=x.nativeElement.innerHTML;
        newHeaderModel[headerName]={name:headerName,headerContent:headerContent};
      }
    //console.log(newHeaderModel)
    return newHeaderModel;
  }

}
