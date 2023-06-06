import {
	Container,
	Typography,
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
	FormLabel,
	Button,
	TextField,
	FormGroup,
	Checkbox,
	Box,
} from '@mui/material';

import { FormEvent, ChangeEvent, useState, useContext } from 'react';
import FormContext from '../store/FormProvider';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { updateFormData } from '../features/formSlice';

export type FormData = {
	description: string;
	diagnosed: string;
	physicalTrauma: string;
	mentalTrauma: string;
	problemFrequency: string;
	problemTiming: string[];
	problemIntensity: string;
};
type Props = { form: FormData; index: number };
export default function Form({ form, index }: Props) {
	const [formData, setFormData] = useState<FormData>(form);
	// const { forms, updateFormData } = useContext(FormContext);
	const { forms } = useAppSelector(state => state.form);
	const dispatch = useAppDispatch();
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData(prevData => ({
			...prevData,
			[name]: value,
		}));
		const { name, value } = e.target;
		const updatedForm = { ...forms[index], [name]: value };
		dispatch(updateFormData({ formIndex: index, newData: updatedForm }));
		// updateFormData(index, updatedForm);
	};

	const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value, checked } = e.target;

		setFormData(prevData => {
			if (checked) {
				return {
					...prevData,
					problemTiming: [...prevData.problemTiming, value],
				};
			} else {
				return {
					...prevData,
					problemTiming: prevData.problemTiming.filter(item => item !== value),
				};
			}
		});
		const updatedForm = { ...forms[index] };

		if (checked) {
			updatedForm.problemTiming = [...updatedForm.problemTiming, value];
		} else {
			updatedForm.problemTiming = updatedForm.problemTiming.filter(
				item => item !== value
			);
		}
		dispatch(updateFormData({ formIndex: index, newData: updatedForm }));
		// updateFormData(index, updatedForm);
	};

	const validateForm = () => {
		return (
			formData.description &&
			formData.diagnosed &&
			formData.physicalTrauma &&
			formData.mentalTrauma &&
			formData.problemFrequency &&
			formData.problemTiming.length > 0 &&
			formData.problemIntensity
		);
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Perform form submission logic here
		console.log(forms[index]);
	};

	// const formData = form;

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<div className='max-w-[30rem] mx-auto mb-8 pt-8'>
					<Typography
						variant='h5'
						align='center'
						gutterBottom
						fontWeight={550}
						color={'#2196f3'}
						margin={0}>
						Pain & Functional Description
					</Typography>
					<Typography variant='body1' gutterBottom align='center'>
						The description of the current situation gives your Optimum Trainer
						a picture of and clues to the underlying causes of your problems
					</Typography>
				</div>
				<div className='max-w-4xl px-6 md:mx-auto'>
					<FormLabel>
						If you have problems with pain/aches, stiffness, weakness, or
						functional problems, describe this/these below. (List the symptoms
						in descending order with the most troublesome first)
					</FormLabel>
					<TextField
						id='outlined-multiline-flexible'
						fullWidth
						multiline
						maxRows={4}
						margin='normal'
						required
						name='description'
						value={formData.description}
						onChange={handleChange}
					/>

					<FormControl component='fieldset' fullWidth margin='normal'>
						<div className='flex flex-col sm:flex-row gap-2 md:gap-4 sm:items-center'>
							<FormLabel component='legend' className='w-full sm:w-1/2'>
								Have you been diagnosed with this problem?
							</FormLabel>
							<RadioGroup
								style={{ display: 'flex', flexDirection: 'row' }}
								aria-label='diagnosed'
								name='diagnosed'
								className='w-full sm:w-auto'
								value={formData.diagnosed}
								onChange={handleChange}>
								<FormControlLabel
									value='notRelevant'
									control={<Radio required />}
									label='Not relevant'
								/>
								<FormControlLabel
									value='yes'
									control={<Radio required />}
									label='Yes'
								/>
								<FormControlLabel
									value='no'
									control={<Radio required />}
									label='No'
								/>
							</RadioGroup>
						</div>
					</FormControl>

					<FormControl component='fieldset' fullWidth margin='normal'>
						<div className='flex flex-col sm:flex-row gap-2 md:gap-4 sm:items-center'>
							<FormLabel component='legend' className='w-full sm:w-1/2'>
								Did the problem start after a physical trauma?
							</FormLabel>
							<RadioGroup
								style={{ display: 'flex', flexDirection: 'row' }}
								className='w-full sm:w-auto'
								aria-label='physicalTrauma'
								name='physicalTrauma'
								value={formData.physicalTrauma}
								onChange={handleChange}>
								<FormControlLabel
									value='notRelevant'
									control={<Radio required />}
									label='Not relevant'
								/>
								<FormControlLabel
									value='yes'
									control={<Radio required />}
									label='Yes'
								/>
								<FormControlLabel
									value='no'
									control={<Radio required />}
									label='No'
								/>
							</RadioGroup>
						</div>
					</FormControl>
					<FormControl component='fieldset' fullWidth margin='normal'>
						<div className='flex flex-col sm:flex-row gap-2 md:gap-4 sm:items-center'>
							<FormLabel component='legend' className='w-full sm:w-1/2'>
								Did the problem start after a mental trauma?
							</FormLabel>
							<RadioGroup
								aria-label='mentalTrauma'
								name='mentalTrauma'
								style={{ display: 'flex', flexDirection: 'row' }}
								className='w-full sm:w-auto'
								value={formData.mentalTrauma}
								onChange={handleChange}>
								<FormControlLabel
									value='notRelevant'
									control={<Radio required />}
									label='Not relevant'
								/>
								<FormControlLabel
									value='yes'
									control={<Radio required />}
									label='Yes'
								/>
								<FormControlLabel
									value='no'
									control={<Radio required />}
									label='No'
								/>
							</RadioGroup>
						</div>
					</FormControl>
					<FormControl component='fieldset' margin='normal'>
						<FormLabel component='legend'>
							How often do you experience the problem?
						</FormLabel>
						<RadioGroup
							aria-label='problemFrequency'
							name='problemFrequency'
							style={{ display: 'flex', flexDirection: 'row' }}
							className='w-full sm:w-auto'
							value={formData.problemFrequency}
							onChange={handleChange}>
							<FormControlLabel
								value='notRelevant'
								control={<Radio required />}
								label='Not relevant'
							/>
							<FormControlLabel
								value='daily'
								control={<Radio required />}
								label='Daily'
							/>
							<FormControlLabel
								value='severalTimesPerWeek'
								control={<Radio required />}
								label='Several times/week'
							/>
							<FormControlLabel
								value='severalTimesPerMonth'
								control={<Radio required />}
								label='Several times/month'
							/>
							<FormControlLabel
								value='fewTimesPerYear'
								control={<Radio />}
								label='A few times/year'
							/>
						</RadioGroup>
					</FormControl>
					<FormControl component='fieldset' margin='normal'>
						<FormLabel component='legend'>
							When do you experience the problem?
						</FormLabel>
						<div className='flex sm:items-center flex-col sm:flex-row'>
							<FormGroup>
								<FormControlLabel
									control={
										<Checkbox
											name='notRelevant'
											checked={formData.problemTiming.includes('notRelevant')}
											onChange={handleCheckboxChange}
											value='notRelevant'
										/>
									}
									label='Not relevant'
								/>
								<FormControlLabel
									control={
										<Checkbox
											name='whenLyingDown'
											checked={formData.problemTiming.includes('whenLyingDown')}
											onChange={handleCheckboxChange}
											value='whenLyingDown'
										/>
									}
									label='When lying down'
								/>
								<FormControlLabel
									control={
										<Checkbox
											name='whenSitting'
											checked={formData.problemTiming.includes('whenSitting')}
											onChange={handleCheckboxChange}
											value='whenSitting'
										/>
									}
									label='When sitting'
								/>
								<FormControlLabel
									control={
										<Checkbox
											name='underStanding'
											checked={formData.problemTiming.includes('underStanding')}
											onChange={handleCheckboxChange}
											value='underStanding'
										/>
									}
									label='Under standing'
								/>
								<FormControlLabel
									control={
										<Checkbox
											name='inWalking'
											checked={formData.problemTiming.includes('inWalking')}
											onChange={handleCheckboxChange}
											value='inWalking'
										/>
									}
									label='In walking'
								/>
								<FormControlLabel
									control={
										<Checkbox
											name='other'
											checked={formData.problemTiming.includes('other')}
											onChange={handleCheckboxChange}
											value='other'
										/>
									}
									label='Other'
								/>
							</FormGroup>

							<Box
								border={1}
								borderColor='gray'
								p={2}
								style={{ opacity: '.6' }}>
								<Typography variant='body1'>
									Other? For example in rotations, side bends, wing stairs, when
									working with the arms above the head.
								</Typography>
							</Box>
						</div>
					</FormControl>
					<FormControl component='fieldset' margin='normal'>
						<FormLabel component='legend'>
							How intense is the experience of the problem on average on a 0-10
							scale?
						</FormLabel>
						<RadioGroup
							value={formData.problemIntensity}
							onChange={handleChange}
							style={{
								display: 'flex',
								flexDirection: 'row',
								marginBottom: '2rem',
							}}
							aria-label='problemIntensity'
							name='problemIntensity'>
							{[...Array(10)].map((_, index) => (
								<FormControlLabel
									className='!mr-8'
									key={index + 1}
									value={(index + 1).toString()}
									control={<Radio required />}
									label={(index + 1).toString()}
								/>
							))}
						</RadioGroup>
					</FormControl>
				</div>
				<div
					style={{
						borderBottom: '2px solid #ccc',
						margin: '1rem 0',
					}}></div>
			</div>
		</form>
	);
}
