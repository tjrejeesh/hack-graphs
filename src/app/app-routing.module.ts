import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ProcessComponent } from './views/process/process.component';
import { OutputComponent } from './views/output/output.component';
import { GamerComponent } from './views/gamer/gamer.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
const routes: Routes = [{ path: '', component: HomeComponent },
{
  path: 'dashboard', component: DashboardComponent,
  children: [
    { path: 'gamer', component: GamerComponent}
  ]
},
{ path: 'process', component: ProcessComponent },
{ path: 'output', component: OutputComponent },
{
  path: '**',
  component: PageNotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
