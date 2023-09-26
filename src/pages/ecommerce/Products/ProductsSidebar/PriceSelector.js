import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const PriceSelector = () => {
  const [value, setValue] = React.useState([50, 400]);

  const handleChange = (value) => {
    setValue(value);
  };
  return (
    <>
      <Slider range defaultValue={value} onChange={handleChange} />

      <div className='d-flex justify-content-between'>
        <span className='font-weight-bold'>$ {value[0]}</span>
        <span className='font-weight-bold'>$ {value[1]}</span>
      </div>
    </>
  );
};

export default PriceSelector;
