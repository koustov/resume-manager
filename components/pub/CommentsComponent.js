import React from 'react';
import { Container } from 'react-bootstrap';
import Comments from '@/components/CommentsComponent';

export const CommentsTemplate = ({ data, id, key }) => {
	return (
		<article id={id} key={key}>
			<Container>
				<Comments identifier={`/${data.slug}/`} />
			</Container>
		</article>
	);
};
