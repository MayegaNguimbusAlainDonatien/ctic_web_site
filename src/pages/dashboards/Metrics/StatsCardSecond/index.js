import React from 'react'
import AppCard from "@crema/core/AppCard";
import {Image} from 'react-bootstrap'
import PropTypes from 'prop-types';
import clsx from 'clsx'
import styles from './index.module.scss'
const StatsCardSecond =({icon,bgColor,value,text})=>{

    return(
        <AppCard>
        <div className='d-flex flex-column align-items-center'>
            <Image
            className={clsx(styles.StatImg,'mb-3')}
            src={icon}
            style={{backgroundColor:bgColor}}
            roundedCircle
            />
             <h2 className='fw-bold'>{value}</h2>
            <p className='fs-7 mb-2 text-muted'>{text}</p>
           

        </div>
    </AppCard>
    )
}
export default StatsCardSecond

StatsCardSecond.propTypes = {
    bgColor: PropTypes.string,
    text: PropTypes.any.isRequired,
    value: PropTypes.string,
    icon: PropTypes.string,
  };