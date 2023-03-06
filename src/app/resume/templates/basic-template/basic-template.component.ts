import { Component, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { ResumeModel, SectionModel } from 'src/app/models/httpmodels';
import { BasicHeaderComponent } from '../../headers/basic-header/basic-header.component';
import { BasicSectionModel, UserModel } from '../../models/Models';
import { BasicSectionComponent } from '../../sections/basic-section/basic-section.component';

@Component({
  selector: 'app-basic-template',
  templateUrl: './basic-template.component.html',
  styleUrls: ['./basic-template.component.css']
})
export class BasicTemplateComponent implements OnInit {
  @Input()
  resumeModel!:ResumeModel

  @ViewChild(BasicHeaderComponent)
    basicHeaderComponent!:BasicHeaderComponent

  @ViewChildren(BasicSectionComponent)
    basicSections!:QueryList<BasicSectionComponent>


  constructor(private dragula:DragulaService)
  {
      
  }

  ngOnInit()
  {
    this.dragula.createGroup('sectiondrag',{removeOnSpill:true
  
    });
  }
  serialize():ResumeModel
  { let headers=this.basicHeaderComponent.serialize();
    let sections:SectionModel[]=[];
    for(let x of this.basicSections)
      sections.push(x.serialize())
    let resumeModel:ResumeModel={headers:headers,sections:sections}
    return resumeModel
  }

}
