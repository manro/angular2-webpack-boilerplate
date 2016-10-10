
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from '../../views/home/home.component';
import { AboutComponent } from '../../views/about/about.component';
import { UsersComponent } from '../../views/users/users.component';

import { AuthGuard } from '../../services/security/authGuard';

import { UrlConstants } from '../../constants/url.constants';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: UrlConstants.private.index.url, component: HomeComponent, canActivate: [ AuthGuard ] },
            { path: UrlConstants.private.index.about.url, component: AboutComponent},
            { path: UrlConstants.private.index.users.url, component: UsersComponent}
        ])
    ]
})
export class PrivateRoutingModule {}
