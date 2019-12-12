import { Component, OnInit } from '@angular/core';
import {Projectmodel} from '../../models/projectmodel';
import {ProjectService} from '../../services/project.service';
import {Global} from '../../services/global'
import {Router,ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers:[ProjectService]
})
export class DetailComponent implements OnInit {
  public url:string;
  public project:Projectmodel;
  public confirm:boolean;
  constructor(private _projectService:ProjectService,
    private _router:Router,
    private _route:ActivatedRoute) 
    {
    this.url = Global.url
    this.confirm = false;
   }

  ngOnInit() {
   this._route.params.subscribe(params=>{
     let id= params.id

     this.getProject(id);
   })
  }




  getProject(id){
    this._projectService.getProject(id).subscribe(
      response =>{
        this.project = response.project;
      },
      error=>{
        console.log(<any>error);
        
      }
    )
  }

  setConfirm(value)
  {
    this.confirm=value
  }

  deleteProject(id){
this._projectService.deleteproject(id).subscribe(
  response=>{
    if(response.project)
    {
      this._router.navigate(['/proyectos'])
    }
  },
  error=>{
    console.log(<any>error)
    
  }
)
  }


}
