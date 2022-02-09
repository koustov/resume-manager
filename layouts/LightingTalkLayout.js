import Container from '@/components/Container';

export default function LightingTalkLayout({ children, frontMatter }) {
  
  const path = `project/${frontMatter.slug}`;

  return (
    <Container
      title={`LightingTalk - ${frontMatter.name}`}
      description={`UI.Focus lighting talks`}
      image={`https://uifocus.microfocus.net${frontMatter.header_image}`}
      date={new Date(frontMatter['date_origin']).toISOString()}
    >
      <article>
        <section>
          <div>
            <p>LightingTalk</p>
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
