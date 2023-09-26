import React, {useState} from 'react';
import MapChart from './MapChart';
import ReactTooltip from 'react-tooltip';
import clsx from 'clsx';
import styles from '../index.module.scss';

const MapView = () => {
  const [content, setContent] = useState('');
  return (
    <div
      className={clsx(
        styles.mapView,
        'position-relative h-100 overflow-hidden',
      )}>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
};

export default MapView;
