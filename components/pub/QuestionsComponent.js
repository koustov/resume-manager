import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import * as componentStyle from '@/styles/events/pub/index.module.scss';
export const QuestionsTemplate = ({ data, id, key }) => {
	return (
		<article id={id} key={key} className={componentStyle['section-questions']}>
			<Container>
				<h3 className={componentStyle['section-title-primary']}>
					<small>The Challenge</small>
					Questions
				</h3>
				<Row>
					<Col md={8}>
						<iframe
							width='800px'
							height='800px'
							src={data.form_link}
							frameBorder='0'
							marginWidth='0'
							marginHeight='0'
							style={{ border: 'none', maxWidth: '100%', maxHeight: '100vh' }}
							allowFullScreen
							webkitallowfullscreen
							mozallowfullscreen
							msallowfullscreen></iframe>
					</Col>
				</Row>
			</Container>
		</article>
	);
};
