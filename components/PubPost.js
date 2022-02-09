import Link from 'next/link';
import Image from 'next/image';

const PUBPost = (pub) => {
	console.log(pub);
	return (
		<Link href={`/pub/${pub.slug}`}>
			<a>
				<div>
					<h1>{pub.name}</h1>
				</div>
			</a>
		</Link>
	);
};

export default PUBPost;
