import { Container, Button, tabScrollButtonClasses } from '@mui/material';
import Form from './Components/Form';
import { useContext, useState } from 'react';
import FormContext from './store/FormProvider';
import SummaryList from './Components/SummaryList';
import FormList from './Components/FormList';

function App() {
	const [summaryMode, setSummaryMode] = useState(false);

	return (
		<Container>
			<div className='shadow-none md:shadow-2xl mb-16'>
				{summaryMode ? <SummaryList /> : <FormList />}

				<div className=' flex gap-6 justify-center pb-8'>
					<Button
						variant='contained'
						color='primary'
						style={{
							maxWidth: '20rem',
							width: '15rem',
						}}
						type='submit'
						onClick={() => setSummaryMode(false)}
						disabled={!summaryMode}>
						Back
					</Button>
					<Button
						variant='contained'
						color='primary'
						style={{
							maxWidth: '20rem',
							width: '15rem',
						}}
						type='submit'
						onClick={() => setSummaryMode(true)}
						disabled={summaryMode}>
						NEXT
					</Button>
				</div>
			</div>
		</Container>
	);
}

export default App;
