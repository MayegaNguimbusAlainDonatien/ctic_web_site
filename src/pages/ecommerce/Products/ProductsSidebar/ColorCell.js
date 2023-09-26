import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';
import {AiOutlineCheck} from 'react-icons/ai';
import styles from './index.module.scss';
import clsx from 'clsx';

const ColorCell = ({selected, data, onChange}) => {
  return (
    <div
      onClick={() => onChange(data)}
      className={clsx(
        styles.productSidebarColorCell,
        'd-flex align-items-center justify-content-center',
      )}
      style={{
        backgroundColor: data,
      }}>
      {selected.some((item) => item === data) ? (
        <Button
          className={clsx(
            styles.productSidebarColorCellBtn,
            'd-flex align-items-center justify-content-center',
          )}>
          <AiOutlineCheck />
        </Button>
      ) : null}
    </div>
  );
};

export default ColorCell;

ColorCell.propTypes = {
  selected: PropTypes.array,
  data: PropTypes.any,
  onChange: PropTypes.func,
};
