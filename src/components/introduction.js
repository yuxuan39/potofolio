import React from 'react'
import Link from 'gatsby-link'
import style from './introduction.module.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(style)

const IntroductionPage = () => (
    <div className={cx('introduction-container','bgc-default')}>
      <div className={cx('blank-space')}></div>
      <p className={cx('font-64px')}>Hello!</p>
      <p className={cx('font-64px')}>I'm Kaya :)</p>
      <p className={cx('font-36px')}>Front-End Developer & UI designer</p>
    </div>
  )
  
  export default IntroductionPage
  