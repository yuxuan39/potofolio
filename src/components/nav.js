import React from 'react'
import Link from 'gatsby-link'
import style from './nav.module.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(style)

const NavPage = () => (
  <div className={cx('nav-container')}>
    <nav>
      <a className={cx('logo')} href="#">
        Kaya
      </a>
      <div>
        <a href="#">Experience</a>
        <a href="#">Protofolio</a>
        <a href="#">Skills</a>
        <a href="#">Resume</a>
      </div>
    </nav>
  </div>
)

export default NavPage
