import { Component, OnInit } from '@angular/core';
import {Projectmodel} from '../../models/projectmodel';
import {ProjectService} from '../../services/project.service';
import {UploadService} from '../../services/upload.service';
import {Global} from '../../services/global'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[ProjectService,UploadService]
})
export class CreateComponent implements OnInit {
public title :string;
public save_project:string;
public project:Projectmodel;
public status:string;
public filesToUpload:Array<File>;
  constructor(private _projectservice:ProjectService,
    private _uploadService:UploadService) {
    this.title = 'Crear Proyecto'
    this.project = new Projectmodel('','','','','',2019,'');
   }

  ngOnInit() {
  }

  onSubmit(form){
    this._projectservice.saveProject(this.project).subscribe(
      response=>{
        if(response.project)
        {
          this.status="success";

          //Subir la imagen
          if(this.filesToUpload){
          this._uploadService.makeFileRequest(Global.url+"upload/"+response.project._id,[],this.filesToUpload,'image')
          .then((result:any)=>{
            this.save_project = result.project;
          this.status="success";
          form.reset();
          });
        }else{
          this.save_project = response.project;
          this.status="success";
          form.reset();
          
        }

        }
        else{
          this.status="failed"
        } 
        
      },
      error=>{
        console.log(<any>error);
        
      }
    )
    
  }

  fileChangeEvent(fileinput:any){
    this.filesToUpload = <Array<File>>fileinput.target.files;
    
  }
}
