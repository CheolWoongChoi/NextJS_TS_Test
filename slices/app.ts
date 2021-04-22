import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type appState = {
	item: { id: number; title: string; content: string; }
	loading: boolean;
	lists: any;
}

// initialState
const initialState: appState = {
	item: { id: 1, title: 'hello', content: 'hello world' },
	loading: false,
	lists: []
}

// slice
export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setTitle: (
			state,
			action: PayloadAction<{ id: number; title: string; content: string }>
		) => {
			state.item = action.payload;
		}
	},
	// ??
	extraReducers: {}
});

// action export
export const { setTitle } = appSlice.actions;

// reducer export
export default appSlice.reducer;