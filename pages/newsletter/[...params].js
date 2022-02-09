import { MDXRemote } from 'next-mdx-remote';
import { getFileBySlug, getStaticPathsByType } from '@/lib/mdx';
import MDXComponents from '@/components/MDXComponents';

import NewsletterLayout from '@/layouts/NewsletterLayout';

export default function Project({ mdxSource, frontMatter }) {
	console.log(frontMatter);
	return (
		<NewsletterLayout frontMatter={frontMatter}>
			<MDXRemote
				{...mdxSource}
				components={{
					...MDXComponents,
				}}
			/>
		</NewsletterLayout>
	);
}

export async function getStaticPaths() {
	return getStaticPathsByType('newsletter');
}

export async function getStaticProps({ params }) {
	const post = await getFileBySlug('newsletter', params.params);
	return { props: { ...post } };
}
