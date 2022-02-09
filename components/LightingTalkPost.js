import Link from 'next/link';
import Image from 'next/image';

const LightingTalkPost = (lightingtalk) => {
  console.log(lightingtalk);
  return (
    <Link href={`/lightingtalk/${lightingtalk.slug}`}>
      <a>
        <div>
          <h1>{lightingtalk.name}</h1>
        </div>
      </a>
    </Link>
  );
};

export default LightingTalkPost;
