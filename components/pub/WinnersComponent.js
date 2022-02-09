import React from 'react';
import { Container } from 'react-bootstrap';
import imgTrophyWinners from '../../images/events/pub/img-trophy-winners.svg';
import imgRays from '../../images/events/pub/img-rays.svg';
import Image from 'next/image';
import * as componentStyle from '@/styles/events/pub/index.module.scss';

export const WinnersTemplate = ({ data, id, key }) => {
	return (
		<article
			id={id}
			key={key}
			className={`${componentStyle['section-wintop']} container-fluid`}>
			<p
				className={`${componentStyle['p-lead']} ${componentStyle['p-bright']} text-center mb-5`}>
				Thanks for the wonderful <strong>{data.response_count}</strong> responses
			</p>
			<Container>
				<div className={componentStyle['section-wintop-container']}>
					<div className={componentStyle['box-winner']}>
						<h4 className={componentStyle['box-title']}>Winner</h4>
						<div className={componentStyle['winner-graphics-container']}>
							<Image
								src={imgRays}
								alt=''
								className={componentStyle['winner-bggraphics']}
							/>
							<Image
								src={imgTrophyWinners}
								alt=''
								className={componentStyle['winner-graphics']}
							/>
						</div>
						<div className={componentStyle['winner-name']}>
							{data.responder.winner.name}
						</div>
						<a
							className={componentStyle['winner-email']}
							href={`mailto:${data.responder.winner.email}`}>
							{data.responder.winner.email}
						</a>
					</div>
					<div className={componentStyle['box-topper']}>
						<h4 className={componentStyle['box-title']}>Toppers</h4>

						<ul className={componentStyle['list-toppers']}>
							{data.responder.toppers.map((t, index) => {
								return (
									<li key={index} className={componentStyle['list-item']}>
										<div className={componentStyle['topper-name']}>{t.name}</div>
										<a
											className={componentStyle['topper-email']}
											href={`mailto:${t.email}`}>
											{t.email}
										</a>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</Container>
		</article>
	);
};
