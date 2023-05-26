import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileComponent } from './profile/profile.component';
import { ChooseComponent } from './choose/choose.component';
import { ChooseDifficultyComponent } from './choose-difficulty/choose-difficulty.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', component: HomepageComponent},
  {path:'signUp', component: SignUpComponent},
  {path:'logIn', component: LogInComponent},
  {path:'profile', component: ProfileComponent},
  {path:'choose', component: ChooseComponent},
  {path:'difficulty', component: ChooseDifficultyComponent},
  {path:'contact', component: ContactComponent},
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
