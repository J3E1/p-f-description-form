import { useContext, useEffect, useState } from 'react';
import FormContext from '../store/FormProvider';
import { Container, Button } from '@mui/material';

import Form from './Form';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { addForm } from '../features/formSlice';

type Props = {};
export default function FormList({}: Props) {
	// const { forms, addForm } = useContext(FormContext);
	const { forms } = useAppSelector(state => state.form);
	const dispatch = useAppDispatch();
	const [formIsValid, setFormIsValid] = useState<boolean | string>(false);

	useEffect(() => {
		const lastFormIndex = forms.length - 1;
		const formData = forms[lastFormIndex];
		const disabled =
			formData.description &&
			formData.diagnosed &&
			formData.physicalTrauma &&
			formData.mentalTrauma &&
			formData.problemFrequency &&
			formData.problemTiming.length > 0 &&
			formData.problemIntensity;

		setFormIsValid(disabled);
	}, [forms]);

	return (
		<>
			{forms.map((form, index) => (
				<Form key={index} form={form} index={index} />
			))}
			<div className='flex justify-center'>
				<Button
					variant='contained'
					color='primary'
					onClick={() => dispatch(addForm())}
					// disabled={!formIsValid}
					style={{
						borderRadius: '100rem',
						padding: '0',
						translate: '0 -2.5rem',
					}}>
					<svg
						viewBox='0 0 512 512'
						fill='currentColor'
						height='3rem'
						width='3rem'>
						<path
							fill='none'
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={55}
							d='M256 112v288M400 256H112'
						/>
					</svg>
				</Button>
			</div>
		</>
	);
}
