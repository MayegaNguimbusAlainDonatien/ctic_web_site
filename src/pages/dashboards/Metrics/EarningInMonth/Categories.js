import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss'
import clsx from 'clsx'

const Categories = ({data}) => {
    return (
        <div className='d-flex flex-row flex-wrap align-items-center position-relative'>
            {data.map((item) => {
                return (
                    <div className={clsx(styles.footerPadding, 'd-flex flex-row')} key={item.id}>
                        <span className={clsx(styles.CategoriesDot, 'px-1 py-1 mt-1')}
                              style={{backgroundColor: item.colorName}}/>
                        <p className='fs-7 text-uppercase text-muted mb-0'>
                            {item.name}
                        </p>
                    </div>
                )
            })}
        </div>)
};

export default Categories;

Categories.defaultProps = {
    data: [],
};

Categories.propTypes = {
    data: PropTypes.array,
};
