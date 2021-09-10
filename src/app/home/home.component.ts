import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Product } from '../models/product.model';
import { GetItems } from '../store/actions/actions';
import { AddUser, GetUser, RemoveUser } from '../store/actions/userActions';
import { selectItems } from '../store/selectors/selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store<{ items: Product[], cart: []}>) {
    // this.store.pipe(select('shop')).subscribe(data => (this.items = data.items));
    this.store.pipe(select(selectItems)).subscribe((data) => this.items = data);
  }

  items: Product[] = [];

  ngOnInit() {
    this.store.dispatch(new GetItems());
    this.store.dispatch(new GetUser());
  }

  addUser() {
    this.store.dispatch(new AddUser({ firstName: 'Jane', lastName: 'Doe' }));
  }

  deleteUser() {
    this.store.dispatch(new RemoveUser('John'));
  }
}
