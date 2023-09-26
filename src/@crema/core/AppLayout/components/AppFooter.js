import React from 'react';
import styles from './AppFooter.module.scss';
import { useLayoutContext } from '../../../utility/AppContextProvider/LayoutContextProvider';
import clsx from 'clsx';
import PropTypes from "prop-types";

const AppFooter = ({ className }) => {
  const { footer } = useLayoutContext();

  if (footer) {
    return (
      <div className={clsx(styles.appMainFooter, 'd-flex align-items-center appMainFooter', className)}>
        <p>Copy right @CTIC 2023 - FOKAM SOP Eloi</p>
        <div className={clsx(styles.footerInfos, 'ms-auto')} >
          <p className={styles.footerInfos}>BP 9055 Douala - bonaberi</p>
          <p>+00237654 038505 (whatsapp)</p>
          <p>+237 658414313 (appel direct)</p>
          <p>cateimco@gmail.com</p>
        </div>
      </div>
    );
  }
  return null;
};

export default AppFooter;

AppFooter.propTypes = {
  className: PropTypes.string,
};
