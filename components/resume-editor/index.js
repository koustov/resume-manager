import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import styles from './index.module.scss';
import {
	Accordion,
	AccordionSummary,
	Typography,
	AccordionDetails,
	Drawer,
	DrawerHeader,
} from '@mui/material';
import { ProfileInformationTemplate } from 'constants/profile_template';
import dynamic from 'next/dynamic';
import { SampleProfile1 } from 'constants/profle_data';

const FormViewer = dynamic(() =>
	import('react-form-planner').then((mod) => mod.FormViewer)
);

const ResumeEditor = ({ resumeTemplate }) => {
	const [editable, setEditable] = useState(false);
	const [segmentOpen, setSegmentOpen] = useState(0);
	const [currentData, setCurrentData] = useState({});
	const [isAdhocOpen, setAdhocOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [TemplateComponent, setTemplateComponent] = useState();
	let Comp;

	useEffect(() => {
		setTemplateComponent(resumeTemplate.component_template);
		setCurrentData({
			...SampleProfile1,
			...resumeTemplate.sample_data,
		});
		setIsLoading(false);
	}, []);

	const onDataChanged = (k, v) => {
		currentData[k] = v;
		setCurrentData({ ...currentData });
	};

	const handleExpansionChange = (panel) => {
		setSegmentOpen(panel);
	};

	return (
		<div style={{ display: 'flex' }}>
			{isLoading ? null : (
				<>
					{/* <Drawer
				sx={{
					width: '50%',
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: '50%',
					},
				}}
				variant='persistent'
				anchor='right'
				open={isAdhocOpen}>
				<DrawerHeader>Information Stack</DrawerHeader>
				<div style={{ flex: 1, height: '100%', overview: 'auto' }}>
					{ProfileInformationTemplate.concat(resumeTemplate.data_template || []).map(
						(dt, dti) => {
							return (
								<Accordion
									expanded={segmentOpen === dti}
									onChange={() => handleExpansionChange(dti)}>
									<AccordionSummary
										// expandIcon={<ExpandMoreIcon />}
										aria-controls={`resume-segement-${dti}`}
										id={`resume-segement-${dti}`}>
										<Typography sx={{ width: '33%', flexShrink: 0 }}>
											{dt.name}
										</Typography>
										<Typography sx={{ color: 'text.secondary' }}>
											{dt.description}
										</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<FormViewer
											template={{ fields: dt.fields }}
											data={currentData}
											onControlValueChanged={(k, v) => onDataChanged(k, v)}
										/>
									</AccordionDetails>
								</Accordion>
							);
						}
					)}
				</div> 
			</Drawer>*/}
					<div
						style={{
							flex: 1,
							height: '100%',
							overflow: 'hidden',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'flex-start',
							background: '#585c68',
						}}>
						<div style={{ transform: 'scale(0.9)', padding: '8px' }}>
							<TemplateComponent data={currentData} />
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default ResumeEditor;
