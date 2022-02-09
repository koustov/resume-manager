import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Grid, Item } from '@mui/material';
import { templates } from '@/components/templates';
import styles from './index.module.scss';
import Rating from '@mui/material/Rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { SampleProfile1 } from 'constants/profle_data';

const ResumeListing = () => {
	const [editable, setEditable] = useState(false);
	const [allTemplates, setAllTemplates] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setAllTemplates(templates);
		setIsLoading(false);
		// setInterval(() => {
		// 	scale();
		// }, 1000);
	}, []);

	const onTextChange = (v) => {
		setEditable(false);
		if (onChange) {
			onChange(v);
		}
	};

	const scale = () => {
		let scaledWrapper = document.getElementsByClassName('scale-container')[0];
		let scaledContentAll = document.getElementsByClassName('scale-component');
		console.log(scaledWrapper);
		scaledContentAll.foreach((scaledContent) => {
			scaledContent.style.transform = 'scale(1, 1)';

			let { width: cw, height: ch } = scaledContent.getBoundingClientRect();
			let { width: ww, height: wh } = scaledWrapper.getBoundingClientRect();

			//  let scaleAmtX = ww / cw;
			//  let scaleAmtY = wh / ch;
			let scaleAmtX = Math.min(ww / cw, wh / ch);
			let scaleAmtY = scaleAmtX;

			scaledContent.style.transform = `scale(${scaleAmtX}, ${scaleAmtY})`;
		});
	};

	return (
		<Grid container spacing={2} style={{ padding: '0 48px' }}>
			{isLoading ? null : (
				<>
					{Object.keys(allTemplates).length ? (
						<>
							{Object.keys(allTemplates).map((k, ki) => {
								console.log(k);
								const Temps = allTemplates[k].component_template;

								return (
									<Grid
										item
										xs={2}
										key={ki}
										className={styles.snip1527}
										className='glass-button'>
										<div className={styles.container}>
											<div className={styles['rating-container']}>
												<Rating
													name='hover-feedback'
													value={4}
													precision={0.5}
													emptyIcon={
														<FontAwesomeIcon
															icon={faStar}
															style={{ opacity: 0.55 }}
															fontSize='inherit'
														/>
													}
												/>
											</div>
											<div className={styles['marker-container']}>
												{allTemplates[k].meta.colors.map((c, ci) => {
													return (
														<div
															className={styles.marker}
															style={{
																border: `1px solid ${c}`,
																boxShadow: `0 0 15px ${c}`,
																background: `${c}`,
															}}
															key={ci}
														/>
													);
												})}
											</div>
											<div className={styles['component-container']}>
												<div id={`component-${k}`} className={styles['component-wrapper']}>
													<Temps
														key={ki}
														data={{
															...SampleProfile1,
															...allTemplates[k].sample_data,
														}}
													/>
												</div>
											</div>
											{/* <div className={styles['details-container']}>
												<div className={styles['details-wrapper']}>
													<h3>
														<span>{allTemplates[k].name}</span>
													</h3>
													<p>{allTemplates[k].description}</p>
												</div>
											</div> */}

											<div className={styles['card_footer']}>
												{/* <div className={styles['details-container']}> */}
												<div className={styles['card_text']}>
													<h5 className={styles['name']}>{allTemplates[k].name}</h5>
													<h6 className={styles['description']}>
														{allTemplates[k].description}
													</h6>
													{/* </div> */}
												</div>
												{/* <div className={styles['social_box']}>
													<a href='#' style={{'--'}}'--i:1'>
														<i className={styles['icon fa fa-facebook']}></i>
													</a>
													<a href='#' style='--i:2'>
														<i className={styles['icon fa fa-twitter']}></i>
													</a>
													<a href='#' style='--i:3'>
														<i className={styles['icon fa fa-youtube']}></i>
													</a>
													<a href='#' style='--i:4'>
														<i className={styles['icon fa fa-pinterest']}></i>
													</a>
												</div> */}
											</div>
										</div>

										{/* <div className={styles.imageContainer}>
											<div className={styles.image}>
												<Temps
													key={ki}
													data={{
														...SampleProfile1,
														...allTemplates[k].sample_data,
													}}
												/>
											</div>
										</div>
										
										<figcaption>
											
											<div className={styles.date}>
												<span className={styles.day}>28</span>
												<span className={styles.month}>Oct</span>
											</div>
											<h3>{allTemplates[k].name}</h3>
											<p>{allTemplates[k].description}</p>
										</figcaption>
										<a href='#'></a> */}
									</Grid>
								);
							})}
						</>
					) : (
						<div>Nothing to show</div>
					)}
				</>
			)}
			{/* sdfsffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff */}
		</Grid>
	);
};

export default ResumeListing;
