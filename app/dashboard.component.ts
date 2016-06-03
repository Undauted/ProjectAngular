import { Component, OnInit } from '@angular/core';
import { AddressBook } from './book';
import { BookService } from './addressBook.service';
import { Router } from '@angular/router-deprecated';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']
})
export class MainComponent { 

	address: AddressBook[] = [];
	constructor(private router: Router,
				private bookService: BookService) { }
	ngOnInit() {
    this.bookService.getBook().then(address => this.address = address);
  }
  gotoDetail(book: AddressBook) {
  let link = ['BookDetail', { id: book.id }];
  this.router.navigate(link);
}

}