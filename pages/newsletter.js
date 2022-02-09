import React, { useEffect, useState, Suspense, lazy } from 'react';
import Container from '@/components/Container';
import LightingTalkPost from '@/components/LightingTalkPost';
import { getStaticPropsByType } from '@/lib/mdx';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import dynamic from 'next/dynamic';
import Accordion from '@mui/material/Accordion';
import { AccordionDetails, Button, Grid, Item } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { SampleProfile1 } from 'constants/profle_data';
import { ProfileInformationTemplate } from 'constants/profile_template';
import { templates } from '@/components/templates';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ResumeListing from '@/components/resume-listing';
import ResumeEditor from '@/components/resume-editor';

const steps = ['Select a template', 'Fill Details', 'Preview', 'Done'];

const FormViewer = dynamic(() =>
	import('react-form-planner').then((mod) => mod.FormViewer)
);

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
	({ theme, open }) => ({
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginRight: -drawerWidth,
		...(open && {
			transition: theme.transitions.create('margin', {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginRight: 0,
		}),
	})
);

export default function Newsletter() {
	const [selectedTemplate, setSelectedTemplate] = useState(templates['dynamic']);
	const [currentData, setCurrentData] = useState({});
	const [segmentOpen, setSegmentOpen] = useState(0);
	const [currentStep, setCurrentStep] = useState(0);
	const [isAdhocOpen, setAdhocOpen] = useState(false);

	// const rfp = React.lazy(() => import('react-form-planner'));
	useEffect(() => {
		setCurrentData({
			...SampleProfile1,
			...templates['dynamic'].sample_data,
		});
	}, []);

	// Step 0
	const renderTemplates = () => {
		return <ResumeListing onChane={(t) => setSelectedTemplate(t)} />;
	};

	// Step 1

	const renderEditor = () => {
		return <ResumeEditor resumeTemplate={selectedTemplate} />;
	};

	const handleExpansionChange = (panel) => {
		setSegmentOpen(panel);
	};

	const onDataChanged = (k, v) => {
		currentData[k] = v;
		setCurrentData({ ...currentData });
	};

	const renderSteps = () => {
		switch (currentStep) {
			case 0:
				return renderTemplates();
			case 1:
				return renderEditor();
		}
	};

	return (
		<Container
			title='Resume Manager'
			description='List of all posts from the newsletter'>
			<div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
				<Stepper
					activeStep={currentStep}
					alternativeLabel
					style={{ padding: '32px' }}>
					{steps.map((label) => (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
						</Step>
					))}
				</Stepper>
				<div style={{ flex: 1 }}>{renderSteps()}</div>
				<div style={{ height: '50px', borderTop: '1px solid #454545' }}>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						<div>
							<Button
								size='large'
								disabled={currentStep === 0}
								onClick={() => {
									setCurrentStep(currentStep - 1);
								}}>
								Previous
							</Button>
						</div>
						<div>
							<Button
								color='success'
								size='large'
								disabled={currentStep === steps.length - 1}
								onClick={() => {
									setCurrentStep(currentStep + 1);
								}}>
								Next
							</Button>
						</div>
						<div>
							<Button size='large'>Finish</Button>
						</div>
						<div>
							<Button color='error' size='large'>
								Cancel
							</Button>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
}

export async function getStaticProps() {
	return getStaticPropsByType('newsletter');
}
