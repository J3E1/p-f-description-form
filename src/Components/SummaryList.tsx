import { useContext } from 'react';
import FormContext from '../store/FormProvider';
import Summary from './Summary';
import { Typography } from '@mui/material';
import { useAppSelector } from '../app/hooks';

type Props = {};
export default function SummaryList({}: Props) {
	// const { forms } = useContext(FormContext);
	const { forms } = useAppSelector(state => state.form);
	return (
		<div className='px-0 py-6 md:p-6 '>
			<Typography
				variant='h4'
				gutterBottom
				margin={'2rem'}
				fontWeight={500}
				color={'#2196f3'}
				align='center'>
				Form Summary
			</Typography>
			{forms.map((form, i) => (
				<Summary key={i} summaryData={form} index={i} />
			))}
		</div>
	);
}
