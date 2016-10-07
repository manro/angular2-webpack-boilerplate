import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PublicRoutingModule, PrivateRoutingModule } from '../routing';

/*import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { UsersComponent } from './views/users/users.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'users', component: UsersComponent}
];

export const routing = RouterModule.forRoot(routes);*/

@NgModule({
    imports: [
        RouterModule.forRoot([]),
        PublicRoutingModule,
        PrivateRoutingModule
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
