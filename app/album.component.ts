import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
//import { ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { PhotoService } from './photo.service';
import { Observable } from 'rxjs/Rx';
/*import 'rxjs/add/operator/switchMap';*/

// import { AlbumsComponent } from './albums.component';
// import { ContactComponent } from './contact.component';

@Component({
    template: `
        <h1>Album # {{ albumId }}</h1>
        <div *ngIf="isLoading">
            <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>
        <div *ngFor="let photo of photos" style="width: 150px;float: left;margin: 3px;">
            <a href="album/{{ photo.id }}">
                <img src="{{ photo.thumbnailUrl }}">
            </a>
        </div>
    `,
    providers: [PhotoService, HTTP_PROVIDERS],
  //  precompile: [ AlbumsComponent, ContactComponent]
})
export class AlbumComponent implements OnInit{
    isLoading = true;
    photos;
    albumId;

    constructor(private _photoService: PhotoService, private _activatedRoute: ActivatedRoute){
    }
    
    ngOnInit() {
        let albumId = +this._activatedRoute.snapshot.params['id'];
        this.albumId = albumId;
        console.log(albumId);
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
            let id = photos[0]['title'];
            console.log(id);
            this.isLoading = false;
            this.photos = photos;
            console.log(this.photos);
        });
    }
    // ngOnDestroy() {
    //     this.albumId.unsubscribe();
    // }
}