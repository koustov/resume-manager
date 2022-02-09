import Container from '@/components/Container';
import WorkshopPost from '@/components/WorkshopPost';
import { getStaticPropsByType } from '@/lib/mdx';
import Link from 'next/link';

const Workshop = ({ elements }) => {
	return (
		<Container
			title={'Workshop - UI.Focus'}
			description='Workshops conducted by UI.Focus team'>
			<section>
				<div>
					<div>
						<h1>Workshops</h1>
					</div>
				</div>
			</section>
			<section>
				{elements && Object.keys(elements).length > 0 ? (
					Object.keys(elements).map((dir, dirIndex) => (
						<div key={dirIndex}>
							<h2>{dir}</h2>
							<ul>
								{elements[dir].map((workshop, index) => {
									return (
										<li key={workshop.short_name}>
											<WorkshopPost workshop={workshop} />
										</li>
									);
								})}
							</ul>
						</div>
					))
				) : (
					<p>No Workshops conducted</p>
				)}
			</section>
		</Container>
	);
};

export async function getStaticProps() {
	return getStaticPropsByType('workshops');
}

export default Workshop;
