import React from 'react';
import styles from './index.module.scss';
import { AllSocialEntries } from 'constants/social';
import ContainerEdtitable from '@/components/content-editable';
const ComponentTemplate = ({ data }) => {
	return (
		<div className='resume-wrapper'>
			<div className={styles['grid-container']}>
				<div className={styles['zone-1']}>
					<div className={styles['toCenter']}>
						<img className={styles['profile']} src={data.image} alt='profile' />
						{/* <img src={data.image} alt='profile' /> */}
						{/* </div> */}
					</div>
					<div className={styles['contact-box']}>
						<div className={styles['title']}>
							<h2>Contact</h2>
						</div>
						<div className={styles['call']}>
							<i className={styles['fas fa-phone-alt']}></i>
							<div className={styles['text']}>{data.contact1}</div>
						</div>
						<div className={styles['home']}>
							<i className={styles['fas fa-home']}></i>
							<div className={styles['text']}>{data.address1}</div>
						</div>
						<div className={styles['website']}>
							<i className={styles['fas fa-globe']}></i>
							<div className={styles['text']}>https://codepen.io/MiniMark</div>
						</div>
						<div className={styles['email']}>
							<i className={styles['fas fa-envelope']}></i>
							<div className={styles['text']}>{data.email1}</div>
						</div>
					</div>
					<div className={styles['personal-box']}>
						<div className={styles['title']}>
							<h2>Skills</h2>
						</div>
						{data.skills.map((s, si) => {
							return (
								<div className={styles[`skill-${si + 1}`]} key={si}>
									<p>{s.name}</p>

									<div className={styles['progress']}>
										{new Array(s.score / 10).fill(0).map((d, di) => {
											return (
												<div
													className={styles['dot']}
													style={{ backgroundColor: data.base_color }}
													key={di}></div>
											);
										})}
										{/* {new Array(10 - s.score / 10).fill(0).map((d, di) => {
											return <div className={styles['dot']} key={di}></div>;
										})} */}
									</div>
								</div>
							);
						})}
					</div>
					<div className={styles['hobbies-box']}>
						<div className={styles['title']}>
							<h2>Hobbies</h2>
						</div>
						<div className={styles['logo']}>
							<div className={styles['logo-1']}>
								<i className={styles['fas fa-gamepad']}></i>
							</div>
							<div className={styles['logo-2']}>
								<i className={styles['fas fa-tv']}></i>
							</div>
							<div className={styles['logo-3']}>
								<i className={styles['fas fa-camera']}></i>
							</div>
							<div className={styles['logo-4']}>
								<i className={styles['fas fa-lightbulb']}></i>
							</div>
						</div>
					</div>
				</div>
				<div className={styles['zone-2']}>
					<div className={styles['headTitle']}>
						<h1>
							{data.firstname}
							<br />
							<b>{data.lastname}</b>
						</h1>
					</div>
					<div className={styles['subTitle']}>
						<h1>{data.designation}</h1>
					</div>
					<div className={styles['group-1']}>
						<div className={styles['title']}>
							<div className={styles['box']}>
								<h2>About Me</h2>
							</div>
						</div>
						<div className={styles['desc']}>{data.about}</div>
					</div>
					<div className={styles['group-2']}>
						<div className={styles['title']}>
							<div className={styles['box']}>
								<h2>Education</h2>
							</div>
						</div>
						<div className={styles['desc']}>
							<ul>
								<li>
									<div className={styles['msg-1']}>2017-2018 | Lorem, ipsum</div>
									<div className={styles['msg-2']}>Masterall School of Texas</div>
								</li>
							</ul>
							<ul>
								<li>
									<div className={styles['msg-1']}>2014-2017 | Lorem, ipsum</div>
									<div className={styles['msg-2']}>Lorem, ipsum dolor.</div>
								</li>
							</ul>
							<ul>
								<li>
									<div className={styles['msg-1']}>
										2012-2014 | Lorem ipsum dolor sit
									</div>
									<div className={styles['msg-2']}>Lorem ipsum dolor sit amet.</div>
								</li>
							</ul>
						</div>
					</div>
					<div className={styles['group-3']}>
						<div className={styles['title']}>
							<div className={styles['box']}>
								<h2>Education</h2>
							</div>
						</div>
						<div className={styles['desc']}>
							<ul>
								<li>
									<div className={styles['msg-1']}>Present | Achitect</div>
									<div className={styles['msg-2']}>Lorem, ipsum dolor</div>
									<div className={styles['msg-3']}>
										Lorem ipsum dolor sit amet consectetur adipisicing.
									</div>
								</li>
							</ul>
							<ul>
								<li>
									<div className={styles['msg-1']}>2019-2020 | Draftsman</div>
									<div className={styles['msg-2']}>Lorem ipsum dolor sit</div>
									<div className={styles['msg-3']}>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
									</div>
								</li>
							</ul>
							<ul>
								<li>
									<div className={styles['msg-1']}>2018-2019 | Junior Draftman</div>
									<div className={styles['msg-2']}>Lorem, ipsum</div>
									<div className={styles['msg-3']}>
										Lorem, ipsum dolor sit amet consectetur adipisicing.
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
const ResumeTemplate = {
	name: 'Elegant',
	description: 'The old school way',
	component_template: ComponentTemplate,
	data_template: {},
	sample_data: {
		sidebar_color: '#b30000',
		base_color: '#9db858',
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
		colors: ['#9db858', '#313131', '#2c2b29'],
	},
};

export default ResumeTemplate;
