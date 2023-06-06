import { ReactNode, createContext, useState } from 'react';
import { FormData } from '../Components/Form';

type FormContext = {
	forms: FormData[];
	addForm: () => void;
	updateFormData: (formIndex: number, newData: FormData) => void;
};

const FormContext = createContext<FormContext>({} as FormContext);

export function FormProvider({ children }: { children: ReactNode }) {
	const [forms, setForms] = useState<FormData[]>([
		{
			description: '',
			diagnosed: '',
			physicalTrauma: '',
			mentalTrauma: '',
			problemFrequency: '',
			problemTiming: [],
			problemIntensity: '',
		},
	]);

	const addForm = () => {
		setForms(prev => [
			...prev,
			{
				description: '',
				diagnosed: '',
				physicalTrauma: '',
				mentalTrauma: '',
				problemFrequency: '',
				problemTiming: [],
				problemIntensity: '',
			},
		]);
	};

	const updateFormData = (formIndex: number, newData: FormData) => {
		setForms(prevData => {
			const updatedData = [...prevData];
			updatedData[formIndex] = newData;
			return updatedData;
		});
	};

	return (
		<FormContext.Provider value={{ forms, addForm, updateFormData }}>
			{children}
		</FormContext.Provider>
	);
}

export default FormContext;
