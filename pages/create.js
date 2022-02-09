import Container from '@/components/Container';
import LightingTalkPost from '@/components/LightingTalkPost';
import { getStaticPropsByType } from '@/lib/mdx';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import templates from '@/components/templates';

const steps = ['Select a template', 'Fill Details', 'Preview', 'Done'];

export default function Create() {
	const renderTemplates = () => {
		Object.keys(templates).forEach((k, ki) => {
			const s = k;
		});
	};

	const renderSteps = (stepindex) => {
		switch (stepindex) {
			case 0:
				return renderTemplates();
		}
	};

	return (
		<Container
			title='Newsletter - UI.Focus'
			description='List of all posts from the newsletter'>
			<Box sx={{ width: '100%' }}>
				<Stepper activeStep={1} alternativeLabel>
					{steps.map((label) => (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
						</Step>
					))}
				</Stepper>
				{renderSteps(0)}
			</Box>
		</Container>
	);
}

export async function getStaticProps() {
	return getStaticPropsByType('newsletter');
}
