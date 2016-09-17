import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
//import { ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { PhotoService } from './photo.service';
import { Observable } from 'rxjs/Rx';
/*import 'rxjs/add/operator/switchMap';*/

@Component({
    template: `
        <h1>Picture # {{ albumId }}</h1>
        <div *ngIf="isLoading">
            <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>
        <div style="width: 150px;float: left;margin: 3px;">
            <a href="">
                <img src="{{ thumbnailUrl }}">
            </a>
        </div>
        <div style="float: left;">
            <h1>
                {{ title }}
            </h1>
        </div>
    `,
    providers: [PhotoService, HTTP_PROVIDERS],
  //  precompile: [ AlbumsComponent, ContactComponent]
})
export class CustomAlbumComponent implements OnInit{
    isLoading = true;
    photos;
    albumId: number;
    thumbnailUrl;
    title;

    constructor(private _photoService: PhotoService, private _activatedRoute: ActivatedRoute){
    }
    
    ngOnInit() {
        let albumId = +this._activatedRoute.snapshot.params['id'];
        this.albumId = albumId;
        // this._activatedRoute.params
        //    // .map(params => params['id'])
        //     .subscribe(params =>{
        //         this.albumId = +params['id'];
        //         console.log(this.albumId);
        //     }
        // );

        this._photoService.getPhotos(
            albumId
        )
        .subscribe(photos => {
            this.title = photos[this.albumId]['title'];
            this.thumbnailUrl = photos[this.albumId]['thumbnailUrl'];
            this.isLoading = false;
            this.photos = photos;
            console.log(this.photos);
        });
    }
    // ngOnDestroy() {
    //     this.albumId.unsubscribe();
    // }
}