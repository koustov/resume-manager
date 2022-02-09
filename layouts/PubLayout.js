import React, { useEffect, useState } from 'react';
import Container from '@/components/Container';
import {
	WinnersTemplate,
	QuestionsTemplate,
	AnswersTemplate,
	CommentsTemplate,
} from '../components/pub';
import SectionRenderer from '@/components/SectionRenderer';

const Sections = [
	{
		template: QuestionsTemplate,
		display: 'Questions',
		name: 'questions',
	},
	{
		template: WinnersTemplate,
		display: 'Winners',
		name: 'winners',
	},

	{
		template: AnswersTemplate,
		display: 'Answers',
		name: 'answers',
	},
	{
		template: CommentsTemplate,
		name: 'comments',
	},
];

export default function PubLayout({ frontMatter }) {
	const [sectionsProcessed, setSectionsProcessed] = useState();
	useEffect(() => {
		let sections = Sections;
		if (frontMatter.status === 'declared') {
			sections.splice(0, 1);
			setSectionsProcessed(sections);
		} else {
			sections.splice(1, 3);
			setSectionsProcessed(sections);
		}
	}, []);

	return (
		<Container
			title={`PUB - ${frontMatter.name}`}
			description={`UI.Focus monthly PUB`}
			image={`https://uifocus.microfocus.net${frontMatter.header_image}`}
			date={new Date(frontMatter['date_origin']).toISOString()}
			data={frontMatter}
			sections={sectionsProcessed}>
			<SectionRenderer sections={sectionsProcessed} data={frontMatter} />
		</Container>
	);
}
