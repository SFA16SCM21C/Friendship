import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ComplimentComponent } from './compliment/compliment.component';
import { HugComponent } from './hug/hug.component';
import { MessageComponent } from './message/message.component';
import { PlanComponent } from './plan/plan.component';
import { ShareComponent } from './share/share.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'compliment', component: ComplimentComponent },
  { path: 'hug', component: HugComponent },
  { path: 'message', component: MessageComponent },
  { path: 'plan', component: PlanComponent },
  { path: 'share', component: ShareComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
