import { Component }       from '@angular/core';
import { BookService } from '../service/addressBook.service';
import { BookComponent } from '../book.component/book.component';
import { MainComponent } from '../dashboard/dashboard.component';
import { HomeComponent } from '../home/home.component';
import { FaqComponent } from '../faq/faq.component';
import { AddressBookDetailComponent } from '../book-detail/book-detail.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import './rxjs-operators';
import {  WikiComponent } from '../search/search.component';
@Component({
	selector: 	'projekt-angular',
	template:  	`<h1>{{title}}</h1>
				<div class="navbar">
				<div class="navbar-inner">
				  <a [routerLink]="['Home']" class="brand" >Home</a>
				  <ul class="nav">
					<li><a [routerLink]="['Main']"  name="ksiazka">Książka adresowa</a></li>
					<li><a [routerLink]="['AddressBooks']" >Moje kontakty</a></li>
					<li><a [routerLink]="['FAQ']" >FAQ</a></li>
					<li><a [routerLink]="['WikiComponent']" >Szukanie</a></li>
				  </ul>
				</div>
			  </div>
				<router-outlet></router-outlet>`,
	
	directives: [ROUTER_DIRECTIVES],
	providers: 	[
				ROUTER_PROVIDERS,
				BookService]
})
@RouteConfig([
{
    path: '/books',
    name: 'AddressBooks',
    component: BookComponent
},
{
    path: '/wiki',
    name: 'WikiComponent',
    component: WikiComponent
},
{
    path: '/',
    name: 'Home',
	component: HomeComponent
},
{
    path: '/faq',
    name: 'FAQ',
	component: FaqComponent
},
{
  path: '/main',
  name: 'Main',
  component: MainComponent,
  
},

{
  path: '/detail/:id',
  name: 'BookDetail',
  component: AddressBookDetailComponent
}

])
export class AppComponent {
	title = 'Projekt Angular - Piotr Kacprowicz';
}