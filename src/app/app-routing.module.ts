import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppDevComponent } from './app-dev/app-dev.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'applicationDevelopment', component: AppDevComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomepageComponent, AppDevComponent]
