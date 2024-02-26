import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplimentComponent } from './compliment/compliment.component';
import { LoginComponent } from './login/login.component';
import { HugComponent } from './hug/hug.component';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';
import { PlanComponent } from './plan/plan.component';
import { ShareComponent } from './share/share.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'message', component: MessageComponent },
  { path: 'compliment', component: ComplimentComponent },
  { path: 'hug', component: HugComponent },
  { path: 'plan', component: PlanComponent },
  { path: 'share', component: ShareComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
