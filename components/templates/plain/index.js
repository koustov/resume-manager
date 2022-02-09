import React from 'react';
import styles from './index.module.scss';
import { AllSocialEntries } from 'constants/social';
import ContainerEdtitable from '@/components/content-editable';
const ComponentTemplate = ({ data }) => {
	return (
		<div className={styles['container']}>
			<div className={styles['header']}>
				<div className={styles['full-name']}>
					<span className={styles['first-name']}>John</span>
					<span className={styles['last-name']}>Doe</span>
				</div>
				<div className={styles['contact-info']}>
					<span className={styles['email']}>Email: </span>
					<span className={styles['email-val']}>john.doe@gmail.com</span>
					<span className={styles['separator']}></span>
					<span className={styles['phone']}>Phone: </span>
					<span className={styles['phone-val']}>111-222-3333</span>
				</div>

				<div className={styles['about']}>
					<span className={styles['position']}>Front-End Developer </span>
					<span className={styles['desc']}>
						I am a front-end developer with more than 3 years of experience writing
						html, css, and js. I am motivated, result-focused and seeking a successful
						team-oriented company with opportunity to grow.
					</span>
				</div>
			</div>
			<div className={styles['details']}>
				<div className={styles['section']}>
					<div className={styles['section__title']}>Experience</div>
					<div className={styles['section__list']}>
						<div className={styles['section__list-item']}>
							<div className={styles['left']}>
								<div className={styles['name']}>KlowdBox</div>
								<div className={styles['addr']}>San Fr, CA</div>
								<div className={styles['duration']}>Jan 2011 - Feb 2015</div>
							</div>
							<div className={styles['right']}>
								<div className={styles['name']}>Fr developer</div>
								<div className={styles['desc']}>did This and that</div>
							</div>
						</div>
						<div className={styles['section__list-item']}>
							<div className={styles['left']}>
								<div className={styles['name']}>Akount</div>
								<div className={styles['addr']}>San Monica, CA</div>
								<div className={styles['duration']}>Jan 2011 - Feb 2015</div>
							</div>
							<div className={styles['right']}>
								<div className={styles['name']}>Fr developer</div>
								<div className={styles['desc']}>did This and that</div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles['section']}>
					<div className={styles['section__title']}>Education</div>
					<div className={styles['section__list']}>
						<div className={styles['section__list-item']}>
							<div className={styles['left']}>
								<div className={styles['name']}>Sample Institute of technology</div>
								<div className={styles['addr']}>San Fr, CA</div>
								<div className={styles['duration']}>Jan 2011 - Feb 2015</div>
							</div>
							<div className={styles['right']}>
								<div className={styles['name']}>Fr developer</div>
								<div className={styles['desc']}>did This and that</div>
							</div>
						</div>
						<div className={styles['section__list-item']}>
							<div className={styles['left']}>
								<div className={styles['name']}>Akount</div>
								<div className={styles['addr']}>San Monica, CA</div>
								<div className={styles['duration']}>Jan 2011 - Feb 2015</div>
							</div>
							<div className={styles['right']}>
								<div className={styles['name']}>Fr developer</div>
								<div className={styles['desc']}>did This and that</div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles['section']}>
					<div className={styles['section__title']}>Projects</div>
					<div className={styles['section__list']}>
						<div className={styles['section__list-item']}>
							<div className={styles['name']}>DSP</div>
							<div className={styles['text']}>{data.about}</div>
						</div>

						<div className={styles['section__list-item']}>
							<div className={styles['name']}>DSP</div>
							<div className={styles['text']}>
								{data.about}
								<a href='/login'>link</a>
							</div>
						</div>
					</div>
				</div>
				<div className={styles['section']}>
					<div className={styles['section__title']}>Skills</div>
					<div className={styles['skills']}>
						<div className={styles['skills__item']}>
							<div className={styles['left']}>
								<div className={styles['name']}>Javascript</div>
							</div>
							<div className={styles['right']}>
								<input id='ck1' type='checkbox' checked />

								<label></label>
								<input id='ck2' type='checkbox' checked />

								<label></label>
								<input id='ck3' type='checkbox' />

								<label></label>
								<input id='ck4' type='checkbox' />
								<label></label>
								<input id='ck5' type='checkbox' />
								<label></label>
							</div>
						</div>
					</div>
					<div className={styles['skills__item']}>
						<div className={styles['left']}>
							<div className={styles['name']}>CSS</div>
						</div>
					</div>
				</div>
				<div className={styles['section']}>
					<div className={styles['section__title']}>Interests</div>
					<div className={styles['section__list']}>
						<div className={styles['section__list-item']}>Football, programming.</div>
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
