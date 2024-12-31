import React, { useEffect, useReducer } from 'react';
import { UserContext, userReducer } from '../../store';
import { useStorage } from '../../hooks';
import { USER_STORAGE_KEY } from '../../config/constants';
import { UserActionTypes } from '../../types/contexts';

/**
 * Provides the user state to the application.
 *
 * Uses the `UserContext` to expose the user state to the application.
 *
 * Automatically persists the user state to local storage.
 *
 * @returns {JSX.Element} The user state provider element.
 */
export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }): JSX.Element => {
  const [state, dispatch] = useReducer(userReducer, null)
  const { get } = useStorage()

  useEffect(() => {
    if (!state) {
      let storageData = get(USER_STORAGE_KEY);
      if(storageData){
        dispatch({
          type: UserActionTypes.POST,
          payload: get(USER_STORAGE_KEY)
        })
      }
    }
  }, [state]);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
};
