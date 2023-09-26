import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from "./../../../assets/images/imm2.jpg";
import img2 from "./../../../assets/images/imm3.jpg";
import img3 from "./../../../assets/images/movie.png";
import styles from "./index.module.scss";

const Crossfade = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className={`${styles.imgBaniar} d-block w-100`}
            src={img1}
            alt='First slide'
          />
          <Carousel.Caption style={{ background: "#00000055" }}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={`${styles.imgBaniar} d-block w-100`}
            src={img2}
            alt='Second slide'
          />

          <Carousel.Caption style={{ background: "#00000055" }}>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={`${styles.imgBaniar} d-block w-100`}
            src={img3}
            alt='Third slide'
          />

          <Carousel.Caption style={{ background: "#00000055" }}>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Crossfade;
