import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import {Container} from 'bulma-ui'
import {Columns} from 'bulma-ui'
import {Column} from 'bulma-ui'
import {Image} from 'bulma-ui'

const RealIndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hello.</h1>
    <p>Welcome to my site.</p>
    <p>I'm an Art Director and graphics designer currently residing in Belgium.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/* <Image /> */}
    </div>
    <Container isFluid>
<Columns>
  <Column>
    <Image 
      size="640x480"
      alt="alternate text"
      src="https://bulma.io/images/placeholders/128x128.png" 
    />
  </Column>
  <Column>
    <Image 
      size="640x480"
      alt="alternate text"
      src="https://bulma.io/images/placeholders/128x128.png" 
    />
  </Column>
    <Column>
    <Image 
      size="640x480"
      alt="alternate text"
      src="https://bulma.io/images/placeholders/128x128.png" 
    />
  </Column>
</Columns>    </Container>
  </Layout>
)

export default RealIndexPage


