import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { AddressBook } from './book';

@Injectable()
export class BookService {

  private addressUrl = 'app/address';  // URL to web api

  constructor(private http: Http) { }

  getBook(): Promise<AddressBook[]> {
    return this.http.get(this.addressUrl)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
  }

  getId(id: number) {
    return this.getBook()
               .then(address => address.filter(book => book.id === id)[0]);
  }

  save(book: AddressBook): Promise<AddressBook>  {
    if (book.id) {
      return this.put(book);
    }
    return this.post(book);
  }

  delete(book: AddressBook) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.addressUrl}/${book.id}`;

    return this.http
               .delete(url, headers)
               .toPromise()
               .catch(this.handleError);
  }

  // Add new AddressBook
  private post(book: AddressBook): Promise<AddressBook> {
    let headers = new Headers({
      'Content-Type': 'application/json'});

    return this.http
               .post(this.addressUrl, JSON.stringify(book), {headers: headers})
               .toPromise()
               .then(res => res.json().data)
               .catch(this.handleError);
  }

  // Update existing AddressBook
  private put(book: AddressBook) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.addressUrl}/${book.id}`;

    return this.http
               .put(url, JSON.stringify(book), {headers: headers})
               .toPromise()
               .then(() => book)
               .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}