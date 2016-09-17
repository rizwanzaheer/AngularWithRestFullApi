import {Component} from '@angular/core';
import {Router, CanDeactivate,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Component({
    templateUrl: '/app/contact.component.html',
/*    directives: [Location]*/
})
export class ContactComponent {
	constructor(private _router: Router){

	}

	CanDeactivate(next, previous){
		console.log("Next: " + next);
		console.log("Previous: " + previous );
	}
/*	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean> {
	    return this.permissions.canDeactivate(this.currentUser, route.params.id);
	  }
*/
    onSubmit(form){
        console.log(form);
        this._router.navigate(['albums']);
       /* this.router.subscribe((url) => console.log(url));*/

    }
    /*console.log( id);*/
}