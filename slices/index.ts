import { combineReducers, AnyAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import app, { TAppState } from './app';

export interface State {
  app: TAppState;
}

const rootReducer = (state: State, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };
    default: {
      const combineReducer = combineReducers({
        app,
      });

      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
