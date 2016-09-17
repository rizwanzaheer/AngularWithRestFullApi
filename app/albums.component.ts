import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { PhotoService } from './photo.service';

@Component({
    template: `
        <h1>Albums</h1>
        <div *ngIf="isLoading">
            <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>
        <ul>
            <li *ngFor="let album of albums">
                <a [routerLink] = "['/albums/', album.id]">
                    {{ album.title }}
                </a>
            </li> 
        </ul>
    `,
    directives: [ ROUTER_DIRECTIVES ],
    providers: [ PhotoService, HTTP_PROVIDERS ]
})
export class AlbumsComponent implements OnInit {
    isLoading = true;
    albums;

    constructor(
        private _photoService: PhotoService,
        private _route: ActivatedRoute) {
    }
    
    ngOnInit(){
        this._photoService.getAlbums()
            .subscribe(albums => {
                this.isLoading = false;
                this.albums = albums;
            });
        this._route.params
            .map(params => params['id'])
            .subscribe(id =>{
              this._photoService
                .getPhotos(id)
                .subscribe(albums => this.albums = albums);
            });
    }
}