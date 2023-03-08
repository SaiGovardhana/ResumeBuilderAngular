import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ResumeModel, ResumeOptionsModel } from '../models/httpmodels';
import { BasicTemplateComponent } from '../resume/templates/basic-template/basic-template.component';
import { AuthService } from '../service/auth.service';
import { ResumeEndpointService } from '../service/resumeEndpoint.service';
import { TinyMCEService } from '../service/tinymce.service';
import { ToastService } from '../service/toast.service';

@Component({
  selector: 'app-printresume',
  templateUrl: './printresume.component.html',
  styleUrls: ['./printresume.component.css','../builder/pageviewer/pageviewer.component.css']
})
export class PrintresumeComponent {
  state='loading'
  resumeModel!:ResumeModel
  
  httpSubscription$!:Subscription

  curResumeId:string=""

  /**
   * Default Options
   */
  resumeOptions:ResumeOptionsModel={
    bodyBackgroundColor:'#ffffff',headerBackgroundColor:'#dc3545',
    headerTextColor:"#ffffff",
    bodyTextColor:'#000000',
    showEmail:true,
    showLocation:true,
    showPhone:true
  }
  @ViewChild('resume')
    resume!:BasicTemplateComponent
  constructor(private toast:ToastService,public user:AuthService,private tinymce:TinyMCEService,private resumeService:ResumeEndpointService,private router:Router)
  {

  }



  



  ngOnInit(): void {
    
   
    let resumeId=this.router.routerState.snapshot.root.queryParamMap.get("resumeId");
    this.curResumeId=resumeId as string
    this.resumeService.getResume(resumeId as string).subscribe
    (

      (data)=>
      {
        if(data['success'])
        { if(data['data']?.resumeModel?.resumeOptions)
            this.resumeOptions=data['data']?.resumeModel?.resumeOptions;

          this.resumeModel=data["data"]?.resumeModel as ResumeModel
          this.state='success'
          this.tinymce.remove();

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
