import React from 'react';
import styles from './index.module.scss';
import { AllSocialEntries } from 'constants/social';
import ContainerEdtitable from '@/components/content-editable';
const ComponentTemplate = ({ data }) => {
	return (
		<div class='container'>
			<div class='header'>
				<div class='full-name'>
					<span class='first-name'>John</span>
					<span class='last-name'>Doe</span>
				</div>
				<div class='contact-info'>
					<span class='email'>Email: </span>
					<span class='email-val'>john.doe@gmail.com</span>
					<span class='separator'></span>
					<span class='phone'>Phone: </span>
					<span class='phone-val'>111-222-3333</span>
				</div>

				<div class='about'>
					<span class='position'>Front-End Developer </span>
					<span class='desc'>
						I am a front-end developer with more than 3 years of experience writing
						html, css, and js. I'm motivated, result-focused and seeking a successful
						team-oriented company with opportunity to grow.
					</span>
				</div>
			</div>
			<div class='details'>
				<div class='section'>
					<div class='section__title'>Experience</div>
					<div class='section__list'>
						<div class='section__list-item'>
							<div class='left'>
								<div class='name'>KlowdBox</div>
								<div class='addr'>San Fr, CA</div>
								<div class='duration'>Jan 2011 - Feb 2015</div>
							</div>
							<div class='right'>
								<div class='name'>Fr developer</div>
								<div class='desc'>did This and that</div>
							</div>
						</div>
						<div class='section__list-item'>
							<div class='left'>
								<div class='name'>Akount</div>
								<div class='addr'>San Monica, CA</div>
								<div class='duration'>Jan 2011 - Feb 2015</div>
							</div>
							<div class='right'>
								<div class='name'>Fr developer</div>
								<div class='desc'>did This and that</div>
							</div>
						</div>
					</div>
				</div>
				<div class='section'>
					<div class='section__title'>Education</div>
					<div class='section__list'>
						<div class='section__list-item'>
							<div class='left'>
								<div class='name'>Sample Institute of technology</div>
								<div class='addr'>San Fr, CA</div>
								<div class='duration'>Jan 2011 - Feb 2015</div>
							</div>
							<div class='right'>
								<div class='name'>Fr developer</div>
								<div class='desc'>did This and that</div>
							</div>
						</div>
						<div class='section__list-item'>
							<div class='left'>
								<div class='name'>Akount</div>
								<div class='addr'>San Monica, CA</div>
								<div class='duration'>Jan 2011 - Feb 2015</div>
							</div>
							<div class='right'>
								<div class='name'>Fr developer</div>
								<div class='desc'>did This and that</div>
							</div>
						</div>
					</div>
				</div>
				<div class='section'>
					<div class='section__title'>Projects</div>
					<div class='section__list'>
						<div class='section__list-item'>
							<div class='name'>DSP</div>
							<div class='text'>
								I am a front-end developer with more than 3 years of experience writing
								html, css, and js. I'm motivated, result-focused and seeking a
								successful team-oriented company with opportunity to grow.
							</div>
						</div>

						<div class='section__list-item'>
							<div class='name'>DSP</div>
							<div class='text'>
								I am a front-end developer with more than 3 years of experience writing
								html, css, and js. I'm motivated, result-focused and seeking a
								successful team-oriented company with opportunity to grow.{' '}
								<a href='/login'>link</a>
							</div>
						</div>
					</div>
				</div>
				<div class='section'>
					<div class='section__title'>Skills</div>
					<div class='skills'>
						<div class='skills__item'>
							<div class='left'>
								<div class='name'>Javascript</div>
							</div>
							<div class='right'>
								<input id='ck1' type='checkbox' checked />

								<label for='ck1'></label>
								<input id='ck2' type='checkbox' checked />

								<label for='ck2'></label>
								<input id='ck3' type='checkbox' />

								<label for='ck3'></label>
								<input id='ck4' type='checkbox' />
								<label for='ck4'></label>
								<input id='ck5' type='checkbox' />
								<label for='ck5'></label>
							</div>
						</div>
					</div>
					<div class='skills__item'>
						<div class='left'>
							<div class='name'>CSS</div>
						</div>
						<div class='right'>
							<input id='ck1' type='checkbox' checked />

							<label for='ck1'></label>
							<input id='ck2' type='checkbox' checked />

							<label for='ck2'></label>
							<input id='ck3' type='checkbox' />

							<label for='ck3'></label>
							<input id='ck4' type='checkbox' />
							<label for='ck4'></label>
							<input id='ck5' type='checkbox' />
							<label for='ck5'></label>
						</div>
					</div>
				</div>
				<div class='section'>
					<div class='section__title'>Interests</div>
					<div class='section__list'>
						<div class='section__list-item'>Football, programming.</div>
					</div>
				</div>
			</div>
		</div>
	);
};
const ResumeTemplate = {
	name: 'Plain',
	description: 'The old school way',
	component_template: ComponentTemplate,
	data_template: {
		name: 'Work Experience',
		description: 'Experiece Information',
		fields: [
			[
				{
					type: 'header',
					value: 'Job Detail 1',
					label: 'Value',
				},
			],
			[
				{
					type: 'text',
					label: 'Job Title',
					placeholder: 'Job Title',
					datafield: 'jobtitle1',
				},
				{
					type: 'text',
					label: 'Organization',
					placeholder: 'Organization',
					datafield: 'organization1',
				},
			],
			[
				{
					type: 'text',
					label: 'From',
					placeholder: 'From',
					datafield: 'from1',
				},
				{
					type: 'text',
					label: 'To',
					placeholder: 'To',
					datafield: 'to1',
				},
			],
			[
				{
					type: 'text',
					multiline: true,
					label: 'Work Details',
					placeholder: 'Work Details',
					datafield: 'workdetails1',
					placeholder: 'Work details',
				},
			],
			[
				{
					type: 'divider',
				},
			],

			[
				{
					type: 'header',
					value: 'Job Detail 2',
					label: 'Value',
				},
			],
			[
				{
					type: 'text',
					label: 'Job Title',
					placeholder: 'Job Title',
					datafield: 'jobtitle2',
				},
				{
					type: 'text',
					label: 'Organization',
					placeholder: 'Organization',
					datafield: 'organization2',
				},
			],
			[
				{
					type: 'text',
					label: 'From',
					placeholder: 'From',
					datafield: 'from2',
				},
				{
					type: 'text',
					label: 'To',
					placeholder: 'To',
					datafield: 'to2',
				},
			],
			[
				{
					type: 'text',
					multiline: true,
					label: 'Work Details',
					placeholder: 'Work Details',
					datafield: 'workdetails2',
					placeholder: 'Work details',
				},
			],
			[
				{
					type: 'divider',
				},
			],
			[
				{
					type: 'header',
					value: 'Job Detail 3',
					label: 'Value',
				},
			],
			[
				{
					type: 'text',
					label: 'Job Title',
					placeholder: 'Job Title',
					datafield: 'jobtitle3',
				},
				{
					type: 'text',
					label: 'Organization',
					placeholder: 'Organization',
					datafield: 'organization3',
				},
			],
			[
				{
					type: 'text',
					label: 'From',
					placeholder: 'From',
					datafield: 'from3',
				},
				{
					type: 'text',
					label: 'To',
					placeholder: 'To',
					datafield: 'to3',
				},
			],
			[
				{
					type: 'text',
					multiline: true,
					label: 'Work Details',
					placeholder: 'Work Details',
					datafield: 'workdetails3',
					placeholder: 'Work details',
				},
			],
		],
	},
	sample_data: {
		sidebar_color: '#b30000',
		base_color: '#b30000',
		text_highlight: '#ffffff',
		text_color: '#787878',
		jobtitle1: 'job1',
		jobtitle2: 'job2',
		jobtitle3: 'job3',
		organization1: 'org1',
		organization2: 'org2',
		organization3: 'org3',
		from1: 'July2001',
		from2: 'July2007',
		from3: 'May2018',
		to1: 'July2007',
		to2: 'May2018',
		to3: 'Present',
	},
	meta: {
		colors: ['#b30000', '#ffffff'],
	},
};

export default ResumeTemplate;
