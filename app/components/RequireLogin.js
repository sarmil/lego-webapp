// @flow

import React from 'react';

type Props = {
  loggedIn: boolean,
  children?: any
};

function RequireLogin({ loggedIn, children }: Props) {
  if (!loggedIn) {
    return null;
  }

  return <div>{children}</div>;
}

export default RequireLogin;
