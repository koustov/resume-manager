import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import * as componentStyle from '@/styles/events/pub/index.module.scss';
import { getTextFormatted } from '@/utils/md-text-util';
import Image from 'next/image';

export const AnswersTemplate = ({ data, id, key }) => {
	const getImage = (img, data) => {
		if (img) {
			return (
				<div>
					<Image
						height='200px'
						src={require(`/images/events/pub/question_meta/${data.season}/${data.episode}/${img}`)}
						alt=''
					/>
				</div>
			);
		}
		return <></>;
	};

	return (
		<article id={id} key={key} className={componentStyle['section-answers']}>
			<Container>
				<Row>
					<Col md={7}>
						<h3 className={componentStyle['section-title--primary']}>
							Curious to know the answers?
						</h3>
					</Col>
				</Row>
				<p className={componentStyle['section-desc--light']}>Here you go ..</p>
				<ul className={componentStyle['list-qa']}>
					{data.question_meta.map((q, qi) => {
						return (
							<li key={qi} className={componentStyle['list-qa__item']}>
								<span dangerouslySetInnerHTML={getTextFormatted(q.q.text, data)}></span>
								{getImage(q.q.img, data)}
								{q.choices && q.choices.length ? (
									<ul className={componentStyle['list-answers']}>
										{q.choices.map((o, oi) => {
											return (
												<li
													key={oi}
													className={
														q.answers.indexOf(oi) > -1 ? componentStyle['answer-correct'] : ''
													}>
													<span dangerouslySetInnerHTML={getTextFormatted(o, data)}></span>
												</li>
											);
										})}
									</ul>
								) : (
									<span
										dangerouslySetInnerHTML={getTextFormatted(q.answers[0], data)}></span>
								)}
							</li>
						);
					})}
				</ul>
			</Container>
		</article>
	);
};
