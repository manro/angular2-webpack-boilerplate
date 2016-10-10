
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UrlConstants } from '../../constants';
import { LoginComponent } from '../../views/login/login.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', redirectTo: UrlConstants.public.login.url, pathMatch: 'full' },
            { path: UrlConstants.public.login.url, component: LoginComponent }
        ])
    ]
})
export class PublicRoutingModule {}
