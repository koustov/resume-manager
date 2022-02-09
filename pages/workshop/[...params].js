import MDXComponents from '@/components/MDXComponents';
import WorkshopLayout from '@/layouts/WorkshopLayout';
import { getFileBySlug, getStaticPathsByType } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote';

const Project = ({ mdxSource, frontMatter }) => {
	console.log(frontMatter);
	return (
		<WorkshopLayout frontMatter={frontMatter}>
			<MDXRemote
				{...mdxSource}
				components={{
					...MDXComponents,
				}}
			/>
		</WorkshopLayout>
	);
};
export async function getStaticPaths() {
	return getStaticPathsByType('workshops');
}

export async function getStaticProps({ params }) {
	const posts = await getFileBySlug('workshops', params.params);
	return { props: { ...posts } };
}

export default Project;
