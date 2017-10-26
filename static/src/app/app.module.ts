import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { PollUseComponent } from './poll-use/poll-use.component'
import { PollMakeComponent } from './poll-make/poll-make.component'

import { LoginService } from './login.service'
import { PollsService } from './polls.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PollUseComponent,
    PollMakeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    LoginService,
    PollsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
