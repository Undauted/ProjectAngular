import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router-deprecated';

import { AddressBook } from '../book/book';
import { BookService } from '../service/addressBook.service';
import { AddressBookDetailComponent } from '../book-detail/book-detail.component';

@Component({
  selector: 'my-faq',
  templateUrl: 'app/faq/faq.component.html',
  styleUrls:  ['app/faq/faq.component.css'],
  directives: [AddressBookDetailComponent]
})
export class FaqComponent{

  start=false;
  contact=false;
  addingFaq = false;
  error: any;

addFaq() {
	this.addingFaq = true;  
	this.contact=false;
	this.start=false;
}
  
addContact() {
	this.contact=true;
	this.start=false;
}

addStart() {
	this.start=true;
	this.contact=false;
} 

	address: AddressBook[] = [];
	constructor(private router: Router,
	private bookService: BookService) { }
	ngOnInit() {
		this.bookService.getBook().then(address => this.address = address);
	}

} 
