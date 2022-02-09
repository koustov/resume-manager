import React from 'react';
import styles from './index.module.scss';
import { AllSocialEntries } from 'constants/social';
const ComponentTemplate = ({ data }) => {
	return (
		<div className='resume-wrapper'>
			<div className={styles.resume}>
				<div className={styles.resume_left}>
					<div className={styles.resume_profile}>
						<img src={data.image} alt='profile_pic' />
					</div>
					<div
						className={styles.resume_content}
						style={{ backgroundColor: data.sidebar_color }}>
						<div className={[styles.resume_item, styles.resume_info]}>
							<div className={styles.title}>
								<p className={styles.bold}>
									{data.firstname} {data.lastname}
								</p>
								<p className={styles.regular}>{data.designation}</p>
							</div>
							<ul>
								<li>
									<div className={styles.icon}>
										<i className='fas fa-map-signs'></i>
									</div>
									<div className={styles.data}>
										{data.address1}
										<br />
										{data.address2}
										<br />
										{data.address3}
									</div>
								</li>
								<li>
									<div className={styles.icon}>
										<i className='fas fa-mobile-alt'></i>
									</div>
									<div className={styles.data}>
										{data.contact1}
										<br />
										{data.contact2}
									</div>
								</li>
								<li>
									<div className={styles.icon}>
										<i className='fas fa-envelope'></i>
									</div>
									<div className={styles.data}>stephen@gmail.com</div>
								</li>
								<li>
									<div className={styles.icon}>
										<i className='fab fa-weebly'></i>
									</div>
									<div className={styles.data}>www.stephen.com</div>
								</li>
							</ul>
						</div>
						<div className={[styles.resume_item, styles.resume_skills]}>
							<div className={styles.title}>
								<p className={styles.bold}>Skills</p>
							</div>
							<ul>
								<li>
									<div className={styles.skill_name}>HTML</div>
									<div className={styles.skill_progress}>
										<span style={{ width: '80%' }}></span>
									</div>
									<div className={styles.skill_per}>80%</div>
								</li>
								<li>
									<div className={styles.skill_name}>CSS</div>
									<div className={styles.skill_progress}>
										<span style={{ width: '70%' }}></span>
									</div>
									<div className={styles.skill_per}>70%</div>
								</li>
								<li>
									<div className={styles.skill_name}>SASS</div>
									<div className={styles.skill_progress}>
										<span style={{ width: '90%' }}></span>
									</div>
									<div className={styles.skill_per}>90%</div>
								</li>
								<li>
									<div className={styles.skill_name}>JS</div>
									<div className={styles.skill_progress}>
										<span style={{ width: '60%' }}></span>
									</div>
									<div className={styles.skill_per}>60%</div>
								</li>
							</ul>
						</div>
						<div className={[styles.resume_item, styles.resume_social]}>
							<div className={styles.title}>
								<p className={styles.bold}>Social</p>
							</div>
							<ul>
								{AllSocialEntries.map((s, si) => {
									return (
										<li key={si}>
											<div className={styles.icon}>
												<i className='fab fa-facebook-square'></i>
											</div>
											<div className={styles.data}>
												<p className={[styles.capitalize, styles['semi-bold']]}>
													{s.display}
												</p>
												<p>{data[s.datafield]}</p>
											</div>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
				<div className={styles.resume_right}>
					<div className={[styles.resume_item, styles.resume_about]}>
						<div className={styles.title}>
							<p className={styles.bold}>About us</p>
						</div>
						<p>{data.about}</p>
					</div>
					<div className={[styles.resume_item, styles.resume_work]}>
						<div className={styles.title}>
							<p className={styles.bold}>Work Experience</p>
						</div>
						<ul>
							<li>
								<div className={styles.date}>2013 - 2015</div>
								<div className={styles.info}>
									<p className={styles['semi-bold']}>Lorem ipsum dolor sit amet.</p>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
										voluptatibus!
									</p>
								</div>
							</li>
							<li>
								<div className={styles.date}>2015 - 2017</div>
								<div className={styles.info}>
									<p className={styles['semi-bold']}>Lorem ipsum dolor sit amet.</p>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
										voluptatibus!
									</p>
								</div>
							</li>
							<li>
								<div className={styles.date}>2017 - Present</div>
								<div className={styles.info}>
									<p className={styles['semi-bold']}>Lorem ipsum dolor sit amet.</p>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
										voluptatibus!
									</p>
								</div>
							</li>
						</ul>
					</div>
					<div className={[styles.resume_item, styles.resume_education]}>
						<div className={styles.title}>
							<p className={styles.bold}>Education</p>
						</div>
						<ul>
							<li className={styles.date_link}>
								<div className={styles.date}>2010 - 2013</div>
								<div className={styles.info}>
									<p className={styles['semi-bold']}>Web Designing (Texas University)</p>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
										voluptatibus!
									</p>
								</div>
							</li>
							<li>
								<div className={styles.date}>2000 - 2010</div>
								<div className={styles.info}>
									<p className={styles['semi-bold']}>Texas International School</p>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
										voluptatibus!
									</p>
								</div>
							</li>
						</ul>
					</div>
					<div className={[styles.resume_item, styles.resume_hobby]}>
						<div className={styles.title}>
							<p className={styles.bold}>Hobby</p>
						</div>
						<ul>
							<li>
								<i className='fas fa-book'></i>
							</li>
							<li>
								<i className='fas fa-gamepad'></i>
							</li>
							<li>
								<i className='fas fa-music'></i>
							</li>
							<li>
								<i className='fab fa-pagelines'></i>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
const ResumeTemplate = {
	name: 'Casual',
	description:
		'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was pop',
	component_template: ComponentTemplate,
	sample_data: {
		sidebar_color: '#0bb5f4',
		base_color: '#0bb5f4',
		text_highlight: '#ffffff',
		text_color: '#787878',
	},
	meta: {
		colors: ['#0bb5f4', '#ffffff', '#787878'],
	},
};

export default ResumeTemplate;
