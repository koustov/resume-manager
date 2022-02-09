import React from 'react';
import styles from './index.module.scss';
import { AllSocialEntries } from 'constants/social';
import ContainerEdtitable from '@/components/content-editable';
const ComponentTemplate = ({ data }) => {
	return (
		<div className='resume-wrapper'>
			<div className={styles['container']}>
				<section className={styles['section_left']}>
					<center>
						<img src={data.image} alt='AUTHOR' />
						<h1 className={styles['title']}>LEVIOOSA</h1>
					</center>
					<hr />
					<h5 className={styles['sub-title']}>CONTACT INFO</h5>
					<ul>
						<li>
							<i className={styles['fa fa-phone']}></i> +xx-xxxxx-xxxxx
						</li>
						<li>
							<i className={styles['fa fa-envelope']}></i> Levioosa@mail.com
						</li>
						<li>
							<i className={styles['fa fa-globe']}></i> www.Levioosa.tech
						</li>
						<li>
							<i className={styles['fa fa-map-marker']}></i> Street, Province, State,
							Country
						</li>
					</ul>
					<h5 className={styles['sub-title']}>EDUCATION</h5>
					<em>Primary</em>
					<p>School name - year to year</p>
					<em>College</em>
					<p>College name - year to year</p>
					<em>Graduation</em>
					<p>Collage name - year to year</p>
					<h5 className={styles['sub-title']}>LANGUAGE</h5>
					<label>Language-1</label>
					<div className={styles['progress_container']}>
						<div className={styles['progress_bar']} style={{ width: '25%' }}></div>
					</div>
					<label>Language-2</label>
					<div className={styles['progress_container']}>
						<div className={styles['progress_bar']} style={{ width: '25%' }}></div>
					</div>
					<label>Language-3</label>
					<div className={styles['progress_container']}>
						<div className={styles['progress_bar']} style={{ width: '90%' }}></div>
					</div>
				</section>
				<section className={styles['section_right']}>
					<h1 className={styles['title']}>PROFILE</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.{' '}
					</p>
					<h1 className={styles['title']}>EXPERIENCE</h1>
					<h5 className={styles['sub-title']}>Web developer and designer</h5>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam.
					</p>
					<em style={{ float: 'right' }}>Period Of Work</em>
					<h5 className={styles['sub-title']}>Web developer and designer</h5>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam.
					</p>
					<em style={{ float: 'right' }}>Period Of Work</em>
					<h5 className={styles['sub-title']}>Web developer and designer</h5>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam.
					</p>
					<em style={{ float: 'right' }}>Period Of Work</em>
					<h1 className={styles['title']}>PROFESSIONAL SKILLS</h1>
					<table>
						<tr>
							<td>HTML</td>
							<td>
								<div className={styles['progress_container']}>
									<div className={styles['progress_bar']} style={{ width: '90%' }}></div>
								</div>
							</td>
						</tr>
						<tr>
							<td>HTML</td>
							<td>
								<div className={styles['progress_container']}>
									<div className={styles['progress_bar']} style={{ width: '90%' }}></div>
								</div>
							</td>
						</tr>
						<tr>
							<td>HTML</td>
							<td>
								<div className={styles['progress_container']}>
									<div className={styles['progress_bar']} style={{ width: '90%' }}></div>
								</div>
							</td>
						</tr>
						<tr>
							<td>HTML</td>
							<td>
								<div className={styles['progress_container']}>
									<div className={styles['progress_bar']} style={{ width: '90%' }}></div>
								</div>
							</td>
						</tr>
					</table>
				</section>
			</div>
		</div>
	);
};
const ResumeTemplate = {
	name: 'Cool',
	description: 'Cool representation of your profile',
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
