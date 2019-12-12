import { Component, OnInit } from '@angular/core';
import {Projectmodel} from '../../models/projectmodel';
import {ProjectService} from '../../services/project.service';
import {UploadService} from '../../services/upload.service';
import {Global} from '../../services/global'
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers:[ProjectService,UploadService]
})
export class EditComponent implements OnInit {
  public title :string;
  public save_project:string;
  public project:Projectmodel;
  public status:string;
  public filesToUpload:Array<File>;
  public url:string;
    constructor(private _projectservice:ProjectService,
      private _uploadService:UploadService,
      private _route:ActivatedRoute,
      private _router:Router ) {
      this.title = 'Editar Proyecto'
      this.url  = Global.url

     }

     ngOnInit() {
      this._route.params.subscribe(params=>{
        let id= params.id
   
        this.getProject(id);
      })
     }
   
   
     getProject(id){
       this._projectservice.getProject(id).subscribe(
         response =>{
           this.project = response.project;
         },
         error=>{
           console.log(<any>error);
           
         }
       )
     }
   
     onSubmit(){
       this._projectservice.updateProject(this.project).subscribe(
         response =>{
          if(response.project)
          {
            this.status="success";
  
            //Subir la imagen
            if(this.filesToUpload.length >=1)
            {
              this._uploadService.makeFileRequest(Global.url+"upload/"+response.project._id,[],this.filesToUpload,'image')
              .then((result:any)=>{
                this.save_project = result.project;
              this.status="success";
  
              });
            }else{
              this.save_project = response.project;
              this.status="success";

            }
  
          }
          else{
            this.status="failed"
          }

         },
         error=>{
          console.log(<any>error)
          
         }
       )
     }
     fileChangeEvent(fileinput:any){
      this.filesToUpload = <Array<File>>fileinput.target.files;
      
    }

}
