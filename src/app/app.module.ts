import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{routing,appRouting} from './app.routing';
import { AppComponent } from './app.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    SobremiComponent,
    ProjectsComponent,
    CreateComponent,
    ContactComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRouting],
  bootstrap: [AppComponent]
})
export class AppModule { }
