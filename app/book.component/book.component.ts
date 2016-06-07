import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router-deprecated';

import { AddressBook } from '../book/book';
import { BookService } from '../service/addressBook.service';
import { AddressBookDetailComponent } from '../book-detail/book-detail.component';


@Component({
  selector: 'my-book',
  templateUrl: 'app/book.component/book.component.html',
  styleUrls:  ['app/book.component/book.component.css'],
  directives: [AddressBookDetailComponent]
})
export class BookComponent implements OnInit {
  address: AddressBook[];
  selectedBook: AddressBook;
  addingBook = false;
  error: any;
  mode = 'Observable';		
  constructor(
    private router: Router,
    private bookService: BookService) { }

  getBook() {
    this.bookService
        .getBook()
        .subscribe(address => this.address = address, error => this.error = error);
  }

  addBook() {
    this.addingBook = true;
    this.selectedBook = null;
  }

  close(savedBook: AddressBook) {
    this.addingBook = false;
    if (savedBook) {  this.bookService.getBook().subscribe(address => this.address = address.slice(28,123232131333));}
  }

  delete(book: AddressBook, event: any) {
    event.stopPropagation();
    this.bookService
        .delete(book)
        .subscribe(res => {
          this.address = this.address.filter(h => h !== book);
          if (this.selectedBook === book) { this.selectedBook = null; }
        },error => this.error = error);
  }

  ngOnInit() {
    this.bookService.getBook().subscribe(address => this.address = address.slice(28,123232131333));
  }

  onSelect(book: AddressBook) {
    this.selectedBook = book;
    this.addingBook = false;
  }

  gotoDetail() {
    this.router.navigate(['BookDetail', { id: this.selectedBook.id }]);
  }
}