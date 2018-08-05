import React from 'react'
import Link from 'gatsby-link'
import style from './experience.module.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(style)

const ExperiencePage = () => (
  <div className={cx('experience-container')}>
    <div className={cx('experience')}>
        <p className={cx('title')}>Experience</p>
        <div className={cx('time-and-job')}>
            <p className={cx('time')}>2018.03 - 2018.05</p>
            <div className={cx('job')}>
                <p className={cx('content','font-weight-500')}>前端工程師</p>
                <p className={cx('content','margin-8-0-20-0')}>RnR</p>
                <p className={cx('content')}>透過 React/SCSS 進行 JobsRnR 官網維護與新頁面開發</p>
            </div>
        </div>
        <div className={cx('time-and-job','margin-40-0')}>
            <p className={cx('time')}>2017.11 - 2018.01</p>
            <div className={cx('job')}>
                <p className={cx('content','font-weight-500')}>前端實習</p>
                <p className={cx('content','margin-8-0-20-0')}>⻝我餐飲顧問股份有限公司(EatMe Co.)</p>
                <p className={cx('content')}>透過 React/SCSS 進行 Eatgether 官網維護與新頁面開發</p>
            </div>
        </div>
        <div className={cx('time-and-job')}>
            <p className={cx('time')}>2001.05 - 2017.06</p>
            <div className={cx('job')}>
                <p className={cx('content','font-weight-500')}>內外場</p>
                <p className={cx('content','margin-8-0-20-0')}>肯亞手工咖啡</p>
                <p className={cx('content')}>於自家經營的咖啡店協助咖啡沖煮與烘豆</p>
            </div>
        </div>
    </div>
  </div>
)

export default ExperiencePage
