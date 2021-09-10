import { createSelector, State } from '@ngrx/store';

export const shopSelector = (state) => state.shop;

// export const selectItems = state => state.shop.items;
// export const selectCart = state => state.shop.cart;

export const selectItems = createSelector(shopSelector, (shop) => shop.items);
export const selectCart = createSelector(shopSelector, (shop) => shop.cart);