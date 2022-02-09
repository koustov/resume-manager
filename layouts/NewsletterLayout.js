import Container from '@/components/Container';
import { parseISO, format } from 'date-fns';

export default function NewsletterLayout({ children, frontMatter }) {
  
  const path = `project/${frontMatter.slug}`;

  return (
    <Container
      title={`Newsletter - ${frontMatter.name}`}
      description={`UI.Focus monthly newsletter`}
      image={`https://uifocus.microfocus.net${frontMatter.header_image}`}
      date={new Date(frontMatter['date_origin']).toISOString()}
    >
      <article>
        <section>
          <div>
            <p>Newsletter</p>
              <h1>
                  {frontMatter.name}
              </h1>
           </div>
        </section>
        <section>
          <div>
            {`${frontMatter.pre_title} ${frontMatter.title}`}
          </div>
          <div>
           {children}
          </div>
        </section>        
      </article>
    </Container>
  );
}
