import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthComponent } from './auth/auth.component';
import { JoinComponent } from './join/join.component';
import { HostComponent } from './host/host.component';
import { PartyComponent } from './party/party.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: AuthComponent },
  { path: 'join', component: JoinComponent },
  { path: 'host', component: HostComponent },
  { path: 'party/:id', component: PartyComponent},
  { path: '*', component: HomepageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
