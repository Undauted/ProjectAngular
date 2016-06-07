import { Component, OnInit } from '@angular/core';
import { AddressBook } from '../book/book';
import { BookService } from '../service/addressBook.service';
import { Router } from '@angular/router-deprecated';
import {DateComponent } from '../date/date';
@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard/dashboard.component.html',
  styleUrls: ['app/dashboard/dashboard.component.css'],
  directives: [DateComponent]
})
export class MainComponent { 

	address: AddressBook[] = [];
	constructor(private router: Router,
				private bookService: BookService) { }
	ngOnInit() {
    this.bookService.getBook().subscribe(address => this.address = address);
  }
  gotoDetail(book: AddressBook) {
  let link = ['BookDetail', { id: book.id }];
  this.router.navigate(link);
}

}