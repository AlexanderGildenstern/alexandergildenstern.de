import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MainStartComponent } from './main-start/main-start.component';
import { MySkillsComponent } from './my-skills/my-skills.component';

// import { SlideshowComponent } from './slideshow/slideshow.component';  // slideshow deactivated

const routes: Routes = [
  // { path: '', component: SlideshowComponent }, // slideshow deactivated
  { path: 'imprint', component: ImprintComponent },
  { path: 'data-protection', component: DataProtectionComponent },  
  { path: 'main-start', component: MainStartComponent },  
  { path: 'mySkills', component: MySkillsComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
