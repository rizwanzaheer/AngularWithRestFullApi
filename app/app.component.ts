import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, provideRouter, RouterConfig } from '@angular/router';

import { AlbumsComponent } from './albums.component';
import { AlbumComponent } from './album.component';
import { ContactComponent } from './contact.component';

@Component({
    selector: 'my-app',
    templateUrl: '/app/app.template.html',
    directives: [ ROUTER_DIRECTIVES ],
    precompile: [ AlbumsComponent, ContactComponent, AlbumComponent]
})

export class AppComponent {
}