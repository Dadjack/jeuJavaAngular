import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileComponent } from './profile/profile.component';
import { ChooseComponent } from './choose/choose.component';
import { ChooseDifficultyComponent } from './choose-difficulty/choose-difficulty.component';

const routes: Routes = [
  {path:'', component: HomepageComponent},
  {path:'profile', component: ProfileComponent},
  {path:'choose', component: ChooseComponent},
  {path:'difficulty', component: ChooseDifficultyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
