import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Router, RouterModule } from '@angular/router'

import { 
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent
} from './events/index'

import { EventsAppComponent } from './events-app.component'
import { NavBarComponent } from "./nav/navbar.component";
import { appRoutes } from './routes';
import { ToastrService } from "./common/toastr.service";
import { Error404Component } from "./errors/404.component";
import { AuthService } from './user/auth.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    NavBarComponent,    
    Error404Component,
    CreateSessionComponent,
    SessionListComponent
  ],
  providers:[ 
    EventService,
     ToastrService,
     EventRouteActivator,
     EventListResolver,
     AuthService,
     {
       provide:'canDeactivateCreateEvent',
       useValue:checkDirtyState
     }
    ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}

function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty)
    return window.confirm('You have not saved this event. Do you really want to cancel?')
  return true;
}