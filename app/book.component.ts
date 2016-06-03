import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router-deprecated';

import { AddressBook } from './book';
import { BookService } from './addressBook.service';
import { AddressBookDetailComponent } from './book-detail.component';

@Component({
  selector: 'my-book',
  templateUrl: 'app/book.component.html',
  styleUrls:  ['app/book.component.css'],
  directives: [AddressBookDetailComponent]
})
export class BookComponent implements OnInit {
  address: AddressBook[];
  selectedBook: AddressBook;
  addingBook = false;
  error: any;

  constructor(
    private router: Router,
    private bookService: BookService) { }

  getBook() {
    this.bookService
        .getBook()
        .then(address => this.address = address)
        .catch(error => this.error = error); // TODO: Display error message
  }

  addBook() {
    this.addingBook = true;
    this.selectedBook = null;
  }

  close(savedBook: AddressBook) {
    this.addingBook = false;
    if (savedBook) {  this.bookService.getBook().then(address => this.address = address.slice(6,123232131333));}
  }

  delete(book: AddressBook, event: any) {
    event.stopPropagation();
    this.bookService
        .delete(book)
        .then(res => {
          this.address = this.address.filter(h => h !== book);
          if (this.selectedBook === book) { this.selectedBook = null; }
        })
        .catch(error => this.error = error); // TODO: Display error message
  }

  ngOnInit() {
    this.bookService.getBook().then(address => this.address = address.slice(6,123232131333));
  }

  onSelect(book: AddressBook) {
    this.selectedBook = book;
    this.addingBook = false;
  }

  gotoDetail() {
    this.router.navigate(['BookDetail', { id: this.selectedBook.id }]);
  }
}