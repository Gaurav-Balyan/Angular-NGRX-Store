import { createSelector } from '@ngrx/store';

export const userSelector = (state) => state.user;

export const selectUser = createSelector(userSelector, (user) => user);