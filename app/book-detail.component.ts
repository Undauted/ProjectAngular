import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { AddressBook } from './book';
import { BookService } from './addressBook.service';
@Component({
  selector: 'my-book-detail',
  templateUrl: 'app/book-detail.component.html',
  styleUrls: ['app/book-detail.component.css']
})
export class AddressBookDetailComponent implements OnInit {
  @Input() book: AddressBook;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here

  constructor(
    private bookService: BookService,
    private routeParams: RouteParams) {
  }

  ngOnInit() {
    if (this.routeParams.get('id') !== null) {
      let id = +this.routeParams.get('id');
      this.navigated = true;
      this.bookService.getId(id)
          .then(book => this.book = book);
    } else {
      this.navigated = false;
      this.book = new AddressBook();
    }
  }
  save() {
    this.bookService
        .save(this.book)
        .then(book => {
          this.book = book; // saved book, w/ id if new
          this.goBack(book);
        })
        .catch(error => this.error = error); // TODO: Display error message
  }
  goBack(savedBook: AddressBook = null) {
    this.close.emit(savedBook);
    if (this.navigated) { window.history.back(); }
  }
}