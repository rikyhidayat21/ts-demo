import {
  IUser,
  UserActions,
  IUserActionTypes
} from './UserTypes';

// export function saveUsername(user: IUser): IUserActionTypes {
//   return {

//   }
// }

export const saveUsername = (user: IUser): IUserActionTypes => {
  return {
    type: UserActions.SAVE_USERNAME,
    payload: user
  }
}

export const saveUserMessage = (user: IUser): IUserActionTypes => {
  return {
    type: UserActions.SAVE_USER_MESSAGE,
    payload: user
  }
}