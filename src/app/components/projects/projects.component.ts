import { Component, OnInit } from '@angular/core';
import {Projectmodel} from '../../models/projectmodel';
import {ProjectService} from '../../services/project.service';
import {Global} from '../../services/global'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers:[ProjectService]
})
export class ProjectsComponent implements OnInit {
  public projects :Projectmodel[];
  public url:string;
  constructor(
    private _projectService:ProjectService
  ) { 
    this.url = Global.url
  }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(){
    this._projectService.getProjects().subscribe((response)=>{
      if(response.projects){
        this.projects = response.projects;
      }
      
    },
    (error)=>{
      console.log(<any>error)
      
    })
  }

}
