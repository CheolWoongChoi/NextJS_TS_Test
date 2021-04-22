import { combineReducers, AnyAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import app, { appState } from './app';

export interface State {
	app: appState
};

const rootReducer = (state: State, action: AnyAction) => {
	switch (action.type) {
		// case HYDRATE:
		// 	console.log('HYDRATE');
		// 		return {
		// 			...state,
		// 			...action.payload
		// 		};
		default: {
			const combineReducer = combineReducers({
				app
			});
			
			console.log('combineReducer');
			return combineReducer(state, action);
		}
	}
}

export default rootReducer;