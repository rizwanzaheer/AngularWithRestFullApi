import { provideRouter, RouterConfig } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';

// Router view file's 
import { AlbumsComponent } from './albums.component';
import { ContactComponent } from './contact.component';
import { AlbumComponent } from './album.component';
import { CustomAlbumComponent } from './customalbum.component';
import { PageNotFoundComponent } from './notfound.component';


const routes: RouterConfig = [
 	{
 		/* That's defuault routes of the app when app is run !*/
		path: '', component: AlbumsComponent,
	},
	{
		path: 'albums', component: AlbumsComponent,
	},
	{
		path: 'albums/:id', component: AlbumComponent,
	},
	{
		path: 'album/:id', component: CustomAlbumComponent,
	},
	{
		path: 'contact', component: ContactComponent,
	},
	{
		path: '**', component: PageNotFoundComponent,
	}
];

export const appRouterProviders = [
  provideRouter(routes)
];
