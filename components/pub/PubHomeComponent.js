import Link from 'next/link';
import { Row, Col, Container } from 'react-bootstrap';
import imgTrophyPeople from '@/images/events/pub/img-trophy-people.svg';
import imgRope from '@/images/events/pub/img-rope.svg';
import imgFeaturedPlayful from '@/images/events/pub/img-featured-playful.svg';
import imgFeaturedBreathtaking from '@/images/events/pub/img-featured-breathtaking.svg';
import imgFeaturedUltimate from '@/images/events/pub/img-featured-ultimate.svg';
import Image from 'next/image';

import * as style from '@/styles/events/pub/index.module.scss';
export const PUBHome = ({ elements }) => {
	return (
		<div>
			<section className={style['section-home-about']}>
				<div className='container'>
					<p
						className={`${style['p-lead']} ${style['section-desc--light']} ${style['my-4']}`}>
						A fun-filled war zone, with a series of questions, puzzles and challenges.
					</p>
					<p className={style['section-text-lead']}>
						<small>You could be the next winner</small>
						You should <strong>contest</strong>, because it is
					</p>
					<div className={style['home-trophy-graphics']}>
						<Image src={imgTrophyPeople} alt='trophy' />
					</div>
				</div>
				<div className={style['section-about-featured__wrapper']}>
					<Image src={imgRope} className={style['img-rope']} alt='rope' />
					<section className={style['section-about-featured']}>
						<Container>
							<Row>
								<Col md={6}>
									<div className={style['featured-content']}>
										<h3 className={style['section-title--primary']}>
											<small>Unique &amp;</small>
											Playful
										</h3>
										<p className={style['section-desc--light']}>
											{' '}
											A high-time experience thats on every Friday
										</p>
									</div>
								</Col>
							</Row>
						</Container>
						<div className={style['featured-graphics']}>
							<Image
								src={imgFeaturedPlayful}
								className={style['content-img']}
								alt='playful'
							/>
						</div>
					</section>
					<section className={style['section-about-featured']}>
						<Container>
							<Row>
								<Col md={{ span: 6, offset: 6 }}>
									<div className={style['featured-content']}>
										<h3 className={style['section-title--primary']}>
											<small>Edge &amp;</small> Ultimate
										</h3>
										<p className={style['section-desc--light']}>
											{' '}
											A rapid fire questions on rapidly growing trends and technology in
											the area of UI/UX.{' '}
										</p>
									</div>
								</Col>
							</Row>
						</Container>
						<div
							className={`${style['featured-graphics']} ${style['featured-graphics--left']}`}>
							<Image
								src={imgFeaturedUltimate}
								className='content-img'
								alt='ultimate'
							/>
						</div>
					</section>
					<section className={style['section-about-featured']}>
						<Container>
							<Row>
								<Col md={6}>
									<div className={style['featured-content']}>
										<h3 className={style['section-title--primary']}>
											<small>Adrenal &amp;</small> Breathtaking
										</h3>
										<p className={style['section-desc--light']}>
											{' '}
											Experience a proper convergence of UX Design and UI Technology based
											trailblazing quizzles{' '}
										</p>
									</div>
								</Col>
							</Row>
						</Container>
						<div className={style['featured-graphics']}>
							<Image
								src={imgFeaturedBreathtaking}
								className={style['content-img']}
								alt='breath taking'
							/>
						</div>
					</section>
				</div>
			</section>
			<section className={style['section-home-events']}>
				<Container mt={5} className='text-center'>
					<h3
						className={`${style['section-title--primary']} ${style['section-title--primary-light']} ${style['mt-5']}`}>
						<small>Recent </small> Thrill Rides
					</h3>
					{Object.keys(elements).map((k, ki) => {
						return (
							<div key={ki}>
								<h4
									key={ki}
									className={`${style['section-title-framed']} ${style['py5']}`}>
									Season {k}
								</h4>
								<ul
									className={`${style['list-episodes']} ${style['list-episodes-dark']}`}>
									{elements[k].map((p, pi) => {
										return (
											<li className={style['list-item']} key={pi}>
												<div className={style['list-item__label']}>Episode</div>
												<Link href={`/pub/${p.slug}`}>
													<a className={style['list-item__value']}> {p.episode}</a>
													{/* {p.episode} */}
												</Link>
											</li>
										);
									})}
								</ul>
							</div>
						);
					})}
				</Container>
			</section>
		</div>
	);
};
