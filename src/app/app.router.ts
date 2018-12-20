import { ModuleWithProviders, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/components/projects/projects.component';
import { ProjectDetailComponent } from './projects/components/project-detail/project-detail.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';

export const router:  Routes = [
    { path: '',component: HomeComponent},
    { path: 'about',component: AboutComponent},
    { path: 'projects',component: ProjectsComponent},
    { path: 'projects/detail/:id', component: ProjectDetailComponent },
    { path: 'contact',component: ContactComponent},
    { path: 'terms', component: TermsComponent},
    { path: 'privacy', component: PrivacyComponent}
];



export const routes: ModuleWithProviders = RouterModule.forRoot(router,  {scrollPositionRestoration: 'enabled', useHash: true});
