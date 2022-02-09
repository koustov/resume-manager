import Container from '@/components/Container';
import { format, isEqual } from 'date-fns';
const WorkshopLayout = ({ frontMatter, children }) => {
	return (
		<Container
			title={`Workshop - ${frontMatter.name}`}
			description={`UI.Focus Workshop conducted`}
			image={`https://uifocus.microfocus.net${frontMatter.header_image}`}
			date_origin={new Date(frontMatter['date_origin']).toISOString()}
		>
			{/* landing section */}
			<section>
				<div>
					<p>Workshop</p>
					<h1>{frontMatter.name}</h1>
				</div>
			</section>
			<section>
				<p>{frontMatter.pre_title}</p>
				<h2>{frontMatter.title}</h2>
				<div>{children}</div>
			</section>
		</Container>
	);
};

export default WorkshopLayout;
