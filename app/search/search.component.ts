import { Component }        from '@angular/core';
import { JSONP_PROVIDERS }  from '@angular/http';
import { Observable }       from 'rxjs/Observable';

import { WikipediaService } from './search.service';

@Component({
  selector: 'my-wiki',
  template: `
    <h1>Szukanie </h1>
    <input #term (keyup)="search(term.value)"/>

    <ul>
      <li *ngFor="let item of items | async">{{item}}</li>
    </ul>
  `,
   styleUrls:  ['app/search/search.component.css'],
  providers: [JSONP_PROVIDERS, WikipediaService]
})
export class WikiComponent {

  constructor (private wikipediaService: WikipediaService) {}

  items: Observable<string[]>;

  search (term: string) {
    this.items = this.wikipediaService.search(term);
  }
}