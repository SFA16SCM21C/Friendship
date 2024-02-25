import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { HugComponent } from './hug/hug.component';
import { ShareComponent } from './share/share.component';
import { ComplimentComponent } from './compliment/compliment.component';
import { PlanComponent } from './plan/plan.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    HugComponent,
    ShareComponent,
    ComplimentComponent,
    PlanComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
