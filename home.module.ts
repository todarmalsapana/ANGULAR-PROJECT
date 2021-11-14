import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingHomeComponent } from './landing-home/landing-home.component';
import { VaccinationCountComponent } from './vaccination-count/vaccination-count.component';
import { SearchVaccinationComponent } from './search-vaccination/search-vaccination.component';
import { WhatsnewsComponent } from './whatsnews/whatsnews.component';
import { RaisIssueComponent } from './rais-issue/rais-issue.component';
import { StepsToVaccinationComponent } from './steps-to-vaccination/steps-to-vaccination.component';
import { FaqComponent } from './faq/faq.component';
import { SummaryVaccinationComponent } from './summary-vaccination/summary-vaccination.component';
import { OurpartnerComponent } from './ourpartner/ourpartner.component';
import { RouterModule, Routes } from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { FormsModule } from '@angular/forms';

const routes: Routes =[
 {path:'landing-home',component:LandingHomeComponent},


 ]



@NgModule({
  declarations: [
    LandingHomeComponent,
    VaccinationCountComponent,
    SearchVaccinationComponent,
    WhatsnewsComponent,
    RaisIssueComponent,
    StepsToVaccinationComponent,
    FaqComponent,
    SummaryVaccinationComponent,
    OurpartnerComponent
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  imports: [
    CommonModule,
    TabViewModule,
     [RouterModule.forChild(routes)],
     FormsModule
  ]
})




export class HomeModule { }
