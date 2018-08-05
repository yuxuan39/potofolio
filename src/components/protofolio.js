import React from 'react'
import Link from 'gatsby-link'
import style from './protofolio.module.scss'
import classnames from 'classnames/bind'
import img1 from '../image/Rectangle.jpg'

const cx = classnames.bind(style)

const PotofolioPage = () => (
    <div className={cx('potofolio-container','bgc-default')}>
        <div className={cx('potofolio')}>
            <div className={cx('buttons-container')}>
                <div className={cx('button-container')}>
                    <i className="fas fa-code"></i>
                    <p>Front-End</p>
                </div>
                <div className={cx('button-container')}>
                    <i className="fas fa-object-group"></i>
                    <p>User Interface</p>
                </div>
            </div>
            <div className={cx('works')}>
                <div className={cx('work')}>
                    <img src={img1} alt="work-image"/>
                    <p className={cx('work-title')}>作品集網站</p>
                    <p className={cx('work-introduction')}>從設計 wireframe、mockup，到使用 gatsby 建立網站</p>
                </div>
                <div className={cx('work')}>
                    <img src={img1} alt="work-image"/>
                    <p className={cx('work-title')}>作品集網站</p>
                    <p className={cx('work-introduction')}>從設計 wireframe、mockup，到使用 gatsby 建立網站</p>
                </div>
                <div className={cx('work')}>
                    <img src={img1} alt="work-image"/>
                    <p className={cx('work-title')}>作品集網站</p>
                    <p className={cx('work-introduction')}>從設計 wireframe、mockup，到使用 gatsby 建立網站</p>
                </div>
                <div className={cx('work')}>
                    <img src={img1} alt="work-image"/>
                    <p className={cx('work-title')}>作品集網站</p>
                    <p className={cx('work-introduction')}>從設計 wireframe、mockup，到使用 gatsby 建立網站</p>
                </div>
                <div className={cx('work')}>
                    <img src={img1} alt="work-image"/>
                    <p className={cx('work-title')}>作品集網站</p>
                    <p className={cx('work-introduction')}>從設計 wireframe、mockup，到使用 gatsby 建立網站</p>
                </div>
                <div className={cx('work')}>
                    <img src={img1} alt="work-image"/>
                    <p className={cx('work-title')}>作品集網站</p>
                    <p className={cx('work-introduction')}>從設計 wireframe、mockup，到使用 gatsby 建立網站</p>
                </div>
            </div>
        </div>
    </div>
  )
  
  export default PotofolioPage
  