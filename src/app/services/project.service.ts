import {Injectable} from '@angular/core'
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs/Observable';
import {Projectmodel} from '../models/projectmodel';
import {Global} from './global';


@Injectable()
export class ProjectService{
    public url:string;
    constructor(private _http: HttpClient){
        this.url = Global.url;
    }



    saveProject(project:Projectmodel):Observable<any>{
        let data = JSON.stringify(project);
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.post(this.url+'saveproject',data,{headers:headers})
    }

    getProjects():Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json')
        return this._http.post(this.url+'projects',{headers:headers});
        
    }   



    getProject(id):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'project/'+id,{headers:headers})
    }

    deleteproject(id):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.delete(this.url+'deleted/'+id,{headers:headers});

    }

    updateProject(project):Observable<any>{
        let params = JSON.stringify(project)
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.put(this.url+'updated/'+project._id,params,{headers:headers})

    }
}   