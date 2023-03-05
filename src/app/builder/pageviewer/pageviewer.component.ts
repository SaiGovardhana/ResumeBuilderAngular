
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ResumeModel } from 'src/app/models/httpmodels';
import { BasicSectionModel, UserModel } from 'src/app/resume/models/Models';
import { ResumeEndpointService } from 'src/app/service/resumeEndpoint.service';

@Component({
  selector: 'app-pageviewer',
  templateUrl: './pageviewer.component.html',
  styleUrls: ['./pageviewer.component.css'],
 
})
export class PageviewerComponent implements OnInit
{ state='loading'
  resumeModel!:ResumeModel
  constructor(private resumeService:ResumeEndpointService,private router:Router)
  {

  }

  ngOnInit(): void {
    let resumeId=this.router.routerState.snapshot.root.queryParamMap.get("resumeId");
    this.resumeService.getResume(resumeId as string).subscribe
    (

      (data)=>
      {
        if(data['success'])
        { 
          this.resumeModel=data["data"]?.resumeModel as ResumeModel
          this.state='success'

        }
        else
        {
          this.state='failure'
        }
      }
    );
  }

}
