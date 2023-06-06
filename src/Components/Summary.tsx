import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import { FormData } from './Form';

type Props = { summaryData: FormData; index: number };
export default function Summary({ summaryData, index }: Props) {
	return (
		<div className='max-w-4xl px-6 md:mx-auto'>
			<Box
				border={1}
				borderColor='gray'
				p={2}
				style={{ opacity: '.8', marginBottom: '2rem' }}>
				<Typography variant='h5' gutterBottom>
					Form {index + 1}
				</Typography>
				<List>
					<ListItem>
						<ListItemText primary='Description' />
						<Typography variant='body1'>
							{summaryData.description || 'NA'}
						</Typography>
					</ListItem>
					<ListItem>
						<ListItemText primary='Diagnosed' />
						<Typography variant='body1'>
							{summaryData.diagnosed || 'NA'}
						</Typography>
					</ListItem>
					<ListItem>
						<ListItemText primary='Physical Trauma' />
						<Typography variant='body1'>
							{summaryData.physicalTrauma || 'NA'}
						</Typography>
					</ListItem>
					<ListItem>
						<ListItemText primary='Mental Trauma' />
						<Typography variant='body1'>
							{summaryData.mentalTrauma || 'NA'}
						</Typography>
					</ListItem>
					<ListItem>
						<ListItemText primary='Problem Frequency' />
						<Typography variant='body1'>
							{summaryData.problemFrequency || 'NA'}
						</Typography>
					</ListItem>
					<ListItem>
						<ListItemText primary='Problem Timing' />
						<Typography variant='body1' align='right'>
							{summaryData.problemTiming.join(', ') || 'NA'}
						</Typography>
					</ListItem>
					<ListItem>
						<ListItemText primary='Problem Intensity' />
						<Typography variant='body1'>
							{summaryData.problemIntensity || 'NA'}
						</Typography>
					</ListItem>
				</List>
			</Box>
		</div>
	);
}
