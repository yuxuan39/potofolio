import React from 'react'
import Link from 'gatsby-link'
import style from './resume.module.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(style)

const ResumePage = () => (
  <div className={cx('resume-container', 'bgc-default')}>
    <button>
      <p>Download & View</p>
      <p>Resume</p>
    </button>
  </div>
)

export default ResumePage
