import {
	configureStore,
	getDefaultMiddleware,
	EnhancedStore
} from '@reduxjs/toolkit';
import { createWrapper, MakeStore } from 'next-redux-wrapper';
import rootReducer from '../slices';

const devMode = process.env.NODE_ENV === 'development';

const store = configureStore({
	reducer: rootReducer,
	middleware: [...getDefaultMiddleware()],
	devTools: devMode
});

// const setupStore = (context: any): EnhancedStore => store;

// const makeStore: MakeStore = (context) => setupStore(context);

// const wrapper = createWrapper(makeStore, {
// 	debug: devMode
// })

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
// export default wrapper;