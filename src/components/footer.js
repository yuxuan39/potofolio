import React from 'react'
import Link from 'gatsby-link'
import style from './footer.module.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(style)

const FooterPage = () => (
  <div className={cx('footer-container')}>
    <p>Are you looking for a UI designer or a front-end developer?</p>
    <p>If so, let's get in touch!  </p>
    <p className={cx('font-weight-500')}>kumo9102151@gmail.com</p>
  </div>
)

export default FooterPage
