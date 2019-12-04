import {ModuleWithProviders} from '@angular/core'
import {Routes,RouterModule} from '@angular/router'


import { AppComponent } from './app.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';



const appRoutes:Routes = [
    {
        path:'',component:SobremiComponent
    },
    {
        path:'sobre-mi',component:SobremiComponent
    },
    {
        path:'proyectos',component:ProjectsComponent
    },
    {
        path:'crear-proyect',component:CreateComponent
    },
    {
        path:'contacto',component:ContactComponent
    },
    {
        path:'**',component:ErrorComponent
    }

]

export const appRouting:any[] = [];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);