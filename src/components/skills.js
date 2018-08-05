import React from 'react'
import Link from 'gatsby-link'
import style from './skills.module.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(style)

const SkillsPage = () => (
    <div className={cx('skills-container')}>
        <div className={cx('skills')}>
            <p className={cx('title')}>Skills</p>
            <div className={cx('skills-details')}>
                <div className={cx('skill')}>
                    <p className={cx('font-weight-500')}>Programming</p>
                    <ul>
                        <li>CSS/SCSS</li>
                        <li>HTML</li>
                    </ul>
                </div>
                <div className={cx('skill')}>
                    <p className={cx('font-weight-500')}>Software</p>
                    <ul>
                        <li>Sketch</li>
                        <li>Balsamiq</li>
                    </ul>
                </div>
                <div className={cx('skill')}>
                    <p className={cx('font-weight-500')}>Language</p>
                    <ul>
                        <li>JLPT N2</li>
                        <li>TOEIC 625</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
  
  export default SkillsPage
  