import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Product } from '../models/product.model';
import { User } from '../models/user.model';
import { selectCart } from '../store/selectors/selectors';
import { selectUser } from '../store/selectors/userSelectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private store: Store<{items: [], cart: []}>) {
    // this.store.pipe(select('shop')).subscribe(data=> (this.cart = data.cart));
    this.store.pipe(select(selectCart)).subscribe((data) => this.cart = data);
    // Another way to achieve the same thing
    // this.store.pipe(select(selectUser)).subscribe((data) => {
    //   return this.user = data.users.find(user => user !== undefined);
    // });
    this.store.pipe(select(selectUser)).subscribe((data) => {
      let [user] = data.users;
      return this.user = user;
    });
  }

  cart: Product[] = [];
  user: User;

  ngOnInit() {
  }

}
