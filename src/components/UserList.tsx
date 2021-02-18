import type from 'os'

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IUser } from '../store/user/UserTypes';

const CenterContent = styled.div`
  text-align: center;
`;

interface IUserListOwnProps {
  
}

interface IUserListStateToProps {
  user: IUser
}

export const UserList: React.FC<IUserListOwnProps> = (): JSX.Element => {
  return (
    <CenterContent>
      <p>
        UserList
      </p>
      <Link
        to="/"
      >
        Home
      </Link>

    </CenterContent>
  )
}
