import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
    <Layout>

      <div className='construction'>

        <SEO title="Home" keywords={[`art`, `design`, `leandro`, `pitz`]} />

        <p>This site is currently under construction.</p>
        <p>Meanwhile you can find me at my <a href='mailto:lpitzs19@gmail.com'>e-mail</a></p>
        <p>or send me a DM on my <a href='https://www.instagram.com/l.pitzs/'>instagram</a></p>

      </div>
    </Layout> 
)

export default IndexPage


