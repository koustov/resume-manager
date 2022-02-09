import { MDXRemote } from 'next-mdx-remote';
import { getFileBySlug, getStaticPathsByType } from '@/lib/mdx';
import MDXComponents from '@/components/MDXComponents';

import LightingTalkLayout from '@/layouts/LightingTalkLayout';

export default function Project({ mdxSource, frontMatter }) {
	console.log(frontMatter);
	return (
		<LightingTalkLayout frontMatter={frontMatter}>
			<MDXRemote
				{...mdxSource}
				components={{
					...MDXComponents,
				}}
			/>
		</LightingTalkLayout>
	);
}

export async function getStaticPaths() {
	return getStaticPathsByType('lightingtalk');
}

export async function getStaticProps({ params }) {
	const post = await getFileBySlug('lightingtalk', params.params);
	return { props: { ...post } };
}
