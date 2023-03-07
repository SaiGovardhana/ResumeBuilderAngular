
import { Component, OnDestroy, OnInit, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ResumeModel } from 'src/app/models/httpmodels';
import { BasicSectionModel, UserModel } from 'src/app/resume/models/Models';
import { BasicTemplateComponent } from 'src/app/resume/templates/basic-template/basic-template.component';
import { ResumeEndpointService } from 'src/app/service/resumeEndpoint.service';
import { TinyMCEService } from 'src/app/service/tinymce.service';
import { ToastService } from 'src/app/service/toast.service';

@Component({
  selector: 'app-pageviewer',
  templateUrl: './pageviewer.component.html',
  styleUrls: ['./pageviewer.component.css'],
 
})
export class PageviewerComponent implements OnInit,OnDestroy
{ state='loading'
  resumeModel!:ResumeModel
  isDraggable=false;
  httpSubscription$!:Subscription
  @ViewChild('resume')
    resume!:BasicTemplateComponent
  constructor(private toast:ToastService,private tinymce:TinyMCEService,private resumeService:ResumeEndpointService,private router:Router)
  {

  }

  addSection()
  { this.resumeModel=this.resume.serialize()

    this.resumeModel.sections.push({"name":"sample",headerContent:"<h2 style='text-align:center;text-decoration:underline'>Sample Header</h2>",sectionContent:"<h3>A Sample Content</h3>"})
      this.tinymce.update()
  }

  switchMode()
  {

    this.isDraggable=!this.isDraggable
    if(this.isDraggable)
    { 
      this.toast.showInfo("Dragging Enabled","You Can Now Drag Section Components For Rearrangment!");
      this.tinymce.remove();
    }
    else
    {
      this.toast.showInfo("Text Editing Enabled","You Can Now Edit Text !");
      this.tinymce.update();
    }
  }
  save()
  { this.toast.showInfo("Resume Saving","Waiting For Response!!");
    let resumeId=this.router.routerState.snapshot.root.queryParamMap.get("resumeId");
    this.resumeService.updateResume(resumeId as string,this.resume.serialize())
      .subscribe(

        (data)=>
        {
          if(data.success)
          {
            this.toast.showSuccess("Resume Saved","SuccessFully Saved Resume!!");
            console.log("resume updated")
          }
          else
          { 
            this.toast.showFailure("Resume Save Failed","Couldn't Save Resume");
            console.log("failed")
          }

        }
      )

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
          this.tinymce.update();
        }
        else
        {
          this.state='failure'
        }
      }
    );
  }

  ngOnDestroy(): void {
    if(this.httpSubscription$!=null)
      this.httpSubscription$.unsubscribe()
    this.toast.dismiss()
  }

}
