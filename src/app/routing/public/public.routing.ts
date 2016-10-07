
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UrlConstants } from '../../constants';


@NgModule({
    imports: [
        RouterModule.forChild([
            /*{
                path: '',
                redirectTo: UrlConstants.public.login.url,
                pathMatch: 'full'
            }*/
        ])
    ]
})
export class PublicRoutingModule {}
