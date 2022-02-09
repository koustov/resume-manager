import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';
import { serialize } from 'next-mdx-remote/serialize';
import mdxPrism from 'mdx-prism';

const root = process.cwd();

export async function getFiles(type) {
	return fs.readdirSync(path.join(root, 'data', type));
}

export async function getFileBySlug(type, slug_array) {
	const slug = slug_array.join('/');
	const source = slug
		? fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`), 'utf8')
		: fs.readFileSync(path.join(root, 'data', `${type}.mdx`), 'utf8');

	const { data, content } = matter(source);
	const mdxSource = await serialize(content, {
		mdxOptions: {
			remarkPlugins: [
				require('remark-slug'),
				[
					require('remark-autolink-headings'),
					{
						linkProperties: {
							className: ['anchor'],
						},
					},
				],
				require('remark-code-titles'),
			],
			rehypePlugins: [mdxPrism],
		},
	});

	return {
		mdxSource,
		frontMatter: {
			wordCount: content.split(/\s+/gu).length,
			readingTime: readingTime(content),
			slug: slug || null,
			...data,
		},
	};
}

export async function getAllFilesFrontMatter(type, subdir) {
	const files = fs.readdirSync(path.join(root, 'data', type, subdir));

	return files.reduce((allPosts, postSlug) => {
		const source = fs.readFileSync(
			path.join(root, 'data', type, subdir, postSlug),
			'utf8'
		);
		const { data } = matter(source);

		return [
			{
				...data,
				slug: `${subdir}/${postSlug.replace('.mdx', '')}`,
			},
			...allPosts,
		];
	}, []);
}

export async function getAllDirectories(type) {
	return fs
		.readdirSync(path.join(root, 'data', type), { withFileTypes: true })
		.filter((dirent) => dirent.isDirectory())
		.map((dirent) => dirent.name);
}

export async function getStaticPropsByType(type) {
	const dirs = await getAllDirectories(type);
	const elements = {};
	for (const d of dirs) {
		const files = await getAllFilesFrontMatter(type, d);
		elements[d] = files;
	}

	return { props: { elements } };
}

export async function getStaticPathsByType(type) {
	const params_data = [];
	const dirs = await getAllDirectories(type);
	for (const d of dirs) {
		const files = await getFiles(`${type}/${d}`);
		for (const f in files) {
			params_data.push([d, files[f].replace(/\.mdx/, '')]);
		}
	}
	const paths = params_data.map((p) => ({
		params: {
			params: p,
		},
	}));
	return {
		paths,
		fallback: false,
	};
}
