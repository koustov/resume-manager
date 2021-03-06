import React from 'react';
import styles from './index.module.scss';
import { AllSocialEntries } from 'constants/social';
import ContainerEdtitable from '@/components/content-editable';
const ComponentTemplate = ({ data }) => {
	return (
		<div className='resume-wrapper'>
			<div className={styles['container']} style={{ color: data.text_color }}>
				<div className={styles['header']}>
					<div className={styles['full-name']}>
						<div
							className={styles['first-name']}
							style={{ color: data.text_highlight }}>
							{data.firstname}
						</div>
						<div
							datafield='lastname'
							className={styles['last-name']}
							style={{ color: data.text_highlight }}>
							{data.lastname}
						</div>
					</div>
					<div className={styles['contact-info']}>
						<span className={styles['email']}>Email: </span>
						<span className={styles['email-val']}>{data.email1}</span>
						<span className={styles['separator']}></span>
						<span className={styles['phone']}>Phone: </span>
						<span className={styles['phone-val']}>111-222-3333</span>
					</div>

					<div className={styles['about']}>
						<span className={styles['position']}>Front-End Developer </span>
						<span className={styles['desc']}>{data.about}</span>
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
							<div className={styles['section__list-item']}>
								Football, programming.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
const ResumeTemplate = {
	name: 'Simple',
	description: 'The old school way',
	component_template: ComponentTemplate,
	data_template: {},
	sample_data: {
		sidebar_color: '#b30000',
		base_color: '#b30000',
		text_highlight: '#000000',
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
