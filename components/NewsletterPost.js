import Link from 'next/link';
import Image from 'next/image';

const NewsletterPost = (newsletter) => {
  console.log(newsletter);
  return (
    <Link href={`/newsletter/${newsletter.slug}`}>
      <a>
        <div>
          <h1>{newsletter.name}</h1>
        </div>
      </a>
    </Link>
  );
};

export default NewsletterPost;
