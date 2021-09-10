import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export enum ActionTypes {
    Add = '[User] Add a user',
    Remove = '[User] Remove a user',
    Get = '[User] Get a user'
}

export class AddUser implements Action {
    readonly type = ActionTypes.Add;

    constructor(public payload: User) {}
}

export class GetUser implements Action {
    readonly type = ActionTypes.Get;
}

export class RemoveUser implements Action {
    readonly type = ActionTypes.Remove;

    constructor(public payload: string) {}
}

export type ActionUnion = AddUser | GetUser | RemoveUser;