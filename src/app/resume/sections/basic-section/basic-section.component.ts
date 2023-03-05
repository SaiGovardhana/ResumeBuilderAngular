import { Component, Input, OnInit} from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { SectionModel } from 'src/app/models/httpmodels';


@Component({
  selector: 'app-basic-section',
  templateUrl: './basic-section.component.html',
  styleUrls: ['./basic-section.component.css','../../text.css'],

})
export class BasicSectionComponent  implements OnInit
{
  @Input()
    sectionModel!:SectionModel
    constructor(private dragula:DragulaService)
    {
    
    }

    ngOnInit(): void {
  
    }


}
