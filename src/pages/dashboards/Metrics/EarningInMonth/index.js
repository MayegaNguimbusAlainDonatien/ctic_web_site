import React from 'react';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import Categories from './Categories';
import EarningGraph from './EarningGraph';
import AppCard from '@crema/core/AppCard';
import styles from './index.module.scss'
import clsx from 'clsx'

const EarningInMonth = ({data}) => {
    const {messages} = useIntl();
    return (<AppCard
        heightFull
        title={messages['dashboard.earningInMonth']}
        footer={<Categories data={data}/>}>
        <div
            className={clsx(styles.EarningGraph, 'd-flex flex-column justify-content-center align-items-center')}
        >
            <EarningGraph data={data}/>
        </div>
    </AppCard>);
};

export default EarningInMonth;

EarningInMonth.defaultProps = {
    data: [],
};

EarningInMonth.propTypes = {
    data: PropTypes.array,
};
