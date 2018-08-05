import React from 'react'
import Link from 'gatsby-link'
import style from './index.module.scss'
import NavPage from '../components/nav'
import IntroductionPage from '../components/introduction'
import ExperiencePage from '../components/experience'
import PotofolioPage from '../components/protofolio'

{/*<Link to="/page-2/">Go to page 2</Link>*/}

const IndexPage = () => (
  <div>
    <NavPage />
    <IntroductionPage />
    <ExperiencePage />
    <PotofolioPage />
  </div>
)

export default IndexPage
