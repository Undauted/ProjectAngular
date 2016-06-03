import { Component }       from '@angular/core';
import { BookService } from './addressBook.service';
import { BookComponent } from './book.component';
import { MainComponent } from './dashboard.component';
import { AddressBookDetailComponent } from './book-detail.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
@Component({
	selector: 	'projekt-angular',
	template:  	`<h1>{{title}}</h1>
				<nav>
					<a [routerLink]="['Main']" class="btn btn-primary" name="ksiazka">Książka adresowa</a>
					<a [routerLink]="['AddressBooks']" class="btn btn-primary">Moje kontakty</a>
				</nav>
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
  path: '/main',
  name: 'Main',
  component: MainComponent,
  useAsDefault: true
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