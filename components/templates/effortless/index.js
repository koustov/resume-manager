import React from 'react';
import styles from './index.module.scss';
import { AllSocialEntries } from 'constants/social';
import ContainerEdtitable from '@/components/content-editable';
const ComponentTemplate = ({ data }) => {
	return (
		<div className='resume-wrapper'>
			<div className={styles['container']}>
				<div className={styles['left_col']}>
					<div className={styles['left_col_1']}>
						<img className={styles.img} src={data.image} alt='profile_picture' />
						<p className={styles['name']}>S.M. Iftikhar Rasha</p>
						<p className={styles['date']}>22 November, 1995</p>
					</div>
					<div className={styles['br']}></div>
					<div className={styles['left_col_2']}>
						<p className={styles['header header2']}>Contact</p>
						<p className={styles['address']}>
							Bashundhara R/A Block C<br />
							Dhaka Bangladesh
							<br />
							+880-1980058647
							<br />
							<br />
							iftikharrasha@gmail.com
							<br />
							<br />
							<a href='https://www.fiverr.com/iftikharrasha'>My Fiverr Account</a>
						</p>
					</div>
					<div className={styles['br']}></div>

					<div className={styles['left_col_3']}>
						<div className={styles['skill']}>
							<p className={styles['header header3']}>Skills</p>
						</div>
						<ul>
							<li>
								<div className={styles['progress_bar']}>
									<span className={styles.span} style={{ width: '88%' }}>
										<p className={styles['align']}>HTML5</p>
									</span>
								</div>
							</li>
							<li>
								<div className={styles['progress_bar']}>
									<span className={styles.span} style={{ width: '88%' }}>
										<p className={styles['align']}>CSS3</p>
									</span>
								</div>
							</li>
							<li>
								<div className={styles['progress_bar']}>
									<span className={styles.span} style={{ width: '76%' }}>
										<p className={styles['align']}>BOOTSTRAP</p>
									</span>
								</div>
							</li>
							<li>
								<div className={styles['progress_bar']}>
									<span className={styles.span} style={{ width: '73%' }}>
										<p className={styles['align']}>PHP</p>
									</span>
								</div>
							</li>
							<li>
								<div className={styles['progress_bar']}>
									<span className={styles.span} style={{ width: '81%' }}>
										<p className={styles['align']}>MYSQL</p>
									</span>
								</div>
							</li>
							<li>
								<div className={styles['progress_bar']}>
									<span className={styles.span} style={{ width: '85%' }}>
										<p className={styles['align']}>WORDPRESS</p>
									</span>
								</div>
							</li>
							<li>
								<div className={styles['progress_bar']}>
									<span className={styles.span} style={{ width: '88%' }}>
										<p className={styles['align']}>UI/UX</p>
									</span>
								</div>
							</li>
							<li>
								<div className={styles['progress_bar']}>
									<span className={styles.span} style={{ width: '58%' }}>
										<p className={styles['align']}>JAVASCRIPT</p>
									</span>
								</div>
							</li>
							<li>
								<div className={styles['progress_bar']}>
									<span className={styles.span} style={{ width: '71%' }}>
										<p className={styles['align']}>JQUERY</p>
									</span>
								</div>
							</li>
							<li>
								<div className={styles['progress_bar']}>
									<span className={styles.span} style={{ width: '88%' }}>
										<p className={styles['align']}>GIT-GITHUB</p>
									</span>
								</div>
							</li>
							<li>
								<div className={styles['progress_bar']}>
									<span className={styles.span} style={{ width: '88%' }}>
										<p className={styles['align']}>DATA ANALYSIS WITH EXCEL</p>
									</span>
								</div>
							</li>
						</ul>
					</div>
				</div>

				<div className={styles['right_col']}>
					<div className={styles['right_col_1']}>
						<p className={styles['header header4']}>PROFILE</p>
						<p className={styles['profile profile1']}>
							Being a computer science student involves identifying a problem and
							coming up with a technological solution to address it. I love to try to
							catch the ability to solve complex problems in a logical way. Since
							coming up with a solution of a problem is never a straightforward
							process, out of the box thinking is often required in order to ensure
							delivering the most innovative and effective solutions.
						</p>
						<p className={styles['profile profile2']}>
							{' '}
							My Interest in Web development is what keeps my passion alive in my study
							of Computer Science and Engineering.
						</p>
					</div>
					<div className={styles['right_col_2']}>
						<p className={styles['header header5']}>EDUCATION</p>
						<div className={styles['right_col_left1']}>
							<p className={styles['header header6']}>University</p>
							<p className={styles['header below']}>2016 - PRESENT</p>
							<p className={styles['header header6" style="top: 110px;']}>College</p>
							<p className={styles['header below" style="top: 130px;']}>2013 - 2014</p>
							<p className={styles['header header6" style="top: 202px;']}>School</p>
							<p className={styles['header below" style="top: 220px;']}>2011 - 2012</p>
						</div>
						<div className={styles['right_col_right1']}>
							<p className={styles['side" >North South University']}>
								<br />
								Computer Science and Engineering
								<br />
								Dhaka, Bangladesh
							</p>
							<p className={styles['side" style="top: 106px;']}>
								Noapara Degree College
								<br />
								Subject: Science
								<br />
								Abhoynagar, Jashore
							</p>
							<p className={styles['side" style="top: 198px;']}>
								Little Jewel’s School
								<br />
								Subject: Science
								<br />
								Abhoynagar, Jashore
							</p>
						</div>
					</div>
					<div className={styles['right_col_3']}>
						<p className={styles['header header5']}>CO-CURRICULAR</p>
						<div className={styles['right_col_left2']}>
							<p className={styles['header header6']}>2008</p>
							<p className={styles['header header6" style="top: 50px;']}>2009</p>
							<p className={styles['header header6" style="top: 80px;']}>2010</p>
							<p className={styles['header header6" style="top: 110px;']}>2017</p>
							<p className={styles['header header6" style="top: 140px;']}>2018</p>
						</div>
						<div className={styles['right_col_right2']}>
							<p className={styles['side']}>
								First prize in Inter School Oil Painting Competition
							</p>
							<p className={styles['side" style="top: 50px;']}>
								Intra School, Jewel of The Year Award
							</p>
							<p className={styles['side" style="top: 80px;']}>
								Inter School Under 14 Badminton Champion
							</p>
							<p className={styles['side" style="top: 110px;']}>
								Team Leader of Sputnik-1 (Mars Rover Summit)
							</p>
							<p className={styles['side" style="top: 140px; padding-right: 30px;']}>
								Bot Controller of Team AUX-Alpha
								<br />
								Robo Fight: Bit-Arena & Cybernauts
							</p>
						</div>
					</div>
					<div className={styles['right_col_4']}>
						<p className={styles['header header5']}>RECENT</p>
						<div className={styles['recent']}>
							<p className={styles['side']}>
								Certified in Introduction to Data Analysis Using Excel
							</p>
							<p className={styles['side" style="top: 50px;']}>Rice University</p>
							<p className={styles['side" style="top: 50px; left: 260px;']}>
								Credential ID G5HCEHP2DQYN
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
const ResumeTemplate = {
	name: 'Effortless',
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
