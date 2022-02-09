import React, { createElement } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

import Header from '@/components/header';
import Home from '@/components/Home';
import Footer from '@/components/Footer';

export default function Container(props) {
	const { children, sections, ...customMeta } = props;
	const router = useRouter();
	const meta = {
		title: 'UI.Focus - Explore . Learn . Build . Share',
		description: `The UI.Focus team is formed by UI/UX enthusiasts and professional.`,
		image:
			'https://res.cloudinary.com/atapas/image/upload/v1639927292/logos/icon-512x512_tq1uah.png',
		type: 'website',
		...customMeta,
	};

	return (
		<div>
			<Head>
				<title>{meta.title}</title>
				<meta name='robots' content='follow, index' />
				<meta content={meta.description} name='description' />
				<meta
					property='og:url'
					content={`https://uifocus.microfocus.net${router.asPath}`}
				/>
				<link
					rel='canonical'
					href={`https://uifocus.microfocus.net${router.asPath}`}
				/>
				<meta property='og:type' content={meta.type} />
				<meta property='og:site_name' content='UI.Focus' />
				<meta property='og:description' content={meta.description} />
				<meta property='og:title' content={meta.title} />
				<meta property='og:image' content={meta.image} />
				<meta property='og:image:width' content='1200' />
				<meta property='og:image:height' content='627' />
				{meta.date && (
					<meta property='article:published_time' content={meta.date} />
				)}
			</Head>
			{/* <Header
				anchors={
					sections && sections.length
						? sections
								.filter((s) => s.display !== undefined)
								.map((s) => {
									return { name: s.name, display: s.display };
								})
						: []
				}
			/> */}
			<main id='skip'>{children}</main>
			{/* <Footer /> */}
		</div>
	);
}
