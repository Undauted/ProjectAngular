import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router-deprecated';

import { AddressBook } from '../book/book';
import { BookService } from '../service/addressBook.service';
import { AddressBookDetailComponent } from '../book-detail/book-detail.component';

@Component({
  selector: 'my-home',
  templateUrl: 'app/home/home.component.html',
  styleUrls:  ['app/home/home.component.css'],
  directives: [AddressBookDetailComponent]
})
export class HomeComponent{
  

 
}