import { Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { HeaderModel, ResumeOptionsModel } from 'src/app/models/httpmodels';

@Component({
  selector: 'app-basic-header',
  templateUrl: './basic-header.component.html',
  styleUrls: ['./basic-header.component.css',"../../text.css"],

})
export class BasicHeaderComponent implements OnInit {
  faEnvelope=faEnvelope
  faPhone=faPhone
  faLocation=faLocationDot
  @Input()
  headerModel!:{[key:string]:HeaderModel}

  @ViewChild('name',{read:ElementRef})
    name!:ElementRef
  
  @ViewChild('profession',{read:ElementRef})
    profession!:ElementRef

  @ViewChildren('header',{read:ElementRef})
    headers!:QueryList<ElementRef>

  @Input()
    resumeOptions!:ResumeOptionsModel

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
