import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Faq from './Faq'
import { graphql, useStaticQuery } from 'gatsby'

const Faqs = () => {
  const {
    websiteYaml: { mail },
    faqsYaml: {
      header,
      faqs,
    },
  } = useStaticQuery(graphql`
    {
      websiteYaml {
        mail
      }
      faqsYaml {
        header
        faqs {
          header
          body
        }
      }
    }
  `)

  return (
    <section id="faqs" className="section-spacer section-faq">
      <Container>
        <header className="section-header text-center">
          <h2 className="section-title">{header}</h2>
        </header>
        {
          Array(Math.ceil(faqs.length / 2))
            .fill(0)
            .map((_, i) =>
              <Row className="row">
                <Faq {...faqs[i * 2]} />
                { ((i*2)+1 < faqs.length) && <Faq {...faqs[(i * 2) + 1]} /> }
              </Row>
            )
        }
      </Container>
      {mail === '' ? null : (
        <div className="mt-40 text-center">
          <a href={`mailto:${mail}`} className="hero-button">
            Send us an email
          </a>
        </div>
      )}
    </section>
  )
}

export default Faqs
