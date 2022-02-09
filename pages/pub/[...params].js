import { MDXRemote } from 'next-mdx-remote';
import { getFileBySlug, getStaticPathsByType } from '@/lib/mdx';
import MDXComponents from '@/components/MDXComponents';

import PubLayout from '@/layouts/PubLayout';

export default function Project({ mdxSource, frontMatter }) {
	console.log(frontMatter);
	return (
		<PubLayout frontMatter={frontMatter}>
			<MDXRemote
				{...mdxSource}
				components={{
					...MDXComponents,
				}}
			/>
		</PubLayout>
	);
}

export async function getStaticPaths() {
	return getStaticPathsByType('pub');
}

export async function getStaticProps({ params }) {
	const post = await getFileBySlug('pub', params.params);
	return { props: { ...post } };
}
