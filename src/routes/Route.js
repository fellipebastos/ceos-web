/* eslint-disable arrow-body-style */
import React from 'react';
import { Route as RouterRoute, Redirect } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

export default function Route({
  isPrivate = false,
  component: Component,
  ...rest
}) {
  const { user } = useAuth();

  return (
    <RouterRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}
