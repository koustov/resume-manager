import { PUBHome } from '../components/pub';
import Container from '@/components/Container';
import { getStaticPropsByType } from '@/lib/mdx';

export default function PUB({ elements }) {
	return (
		<Container
			title='PUB - UI.Focus'
			description='List of all posts from the PUB'>
			<PUBHome elements={elements} />
		</Container>
	);
}

export async function getStaticProps() {
	return getStaticPropsByType('pub');
}
