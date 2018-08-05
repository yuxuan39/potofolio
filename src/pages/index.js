import React from 'react'
import Link from 'gatsby-link'
import style from './index.module.scss'
import NavPage from '../components/nav'
import IntroductionPage from '../components/introduction'
import ExperiencePage from '../components/experience'
import PotofolioPage from '../components/protofolio'
import SkillsPage from '../components/skills'
import ResumePage from '../components/resume'
import FooterPage from '../components/footer'

{/*<Link to="/page-2/">Go to page 2</Link>*/}

const IndexPage = () => (
  <div>
    <NavPage />
    <IntroductionPage />
    <ExperiencePage />
    <PotofolioPage />
    <SkillsPage />
    <ResumePage />
    <FooterPage />
  </div>
)

export default IndexPage
