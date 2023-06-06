import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FormData } from '../Components/Form';

type InitialState = {
	forms: FormData[];
};
const initialState: InitialState = {
	forms: [
		{
			description: '',
			diagnosed: '',
			physicalTrauma: '',
			mentalTrauma: '',
			problemFrequency: '',
			problemTiming: [],
			problemIntensity: '',
		},
	],
};

const formSlice = createSlice({
	name: 'Form',
	initialState,
	reducers: {
		addForm: state => {
			state.forms.push({
				description: '',
				diagnosed: '',
				physicalTrauma: '',
				mentalTrauma: '',
				problemFrequency: '',
				problemTiming: [],
				problemIntensity: '',
			});
		},
		updateFormData: (
			state,
			action: PayloadAction<{ formIndex: number; newData: FormData }>
		) => {
			// setForms(prevData => {
			// 	const updatedData = [...prevData];
			// 	updatedData[formIndex] = newData;
			// 	return updatedData;
			// });
			const updatedData = [...state.forms];
			updatedData[action.payload.formIndex] = action.payload.newData;
			state.forms = updatedData;
		},
	},
});
export const { addForm, updateFormData } = formSlice.actions;
export default formSlice;
