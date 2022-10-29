import React, { FC } from 'react';
import Carousel, { ArrowProps } from 'react-multi-carousel';
import next_arr from 'assets/images/next-arrow.png';
import pref_arr from 'assets/images/prev-arrow.png';
import 'react-multi-carousel/lib/styles.css';
import { IEmployeesCarousel } from 'store/services/Main/EmployeesCarouselService/EmployeesCarouselService.types';
import EmployeesCarouselChild from 'pages/Main/components/MainAbout/components/OurEmployees/components/MainEmployeesCarousel/components/EmployeesCarouselChild/EmployeesCarouselChild';

interface IEmployeesCarouselData {
  employeesCarouselData: IEmployeesCarousel[] | undefined;
}

export const CustomLeftArrow: FC<ArrowProps> = ({ onClick }) => {
  return (
    <div onClick={onClick} style={{ position: 'absolute', cursor: 'pointer', left: '-3%' }}>
      <img src={pref_arr} alt='previous arrow' />
    </div>
  );
};

export const CustomRightArrow: FC<ArrowProps> = ({ onClick }) => {
  return (
    <div onClick={onClick} style={{ position: 'absolute', right: '-3%', cursor: 'pointer' }}>
      <img src={next_arr} alt='next arrow' />
    </div>
  );
};

const MainEmployeesCarousel: FC<IEmployeesCarouselData> = ({ employeesCarouselData }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    smallTablet: {
      breakpoint: { max: 768, min: 481 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 481, min: 0 },
      items: 1,
    },
  };

  return employeesCarouselData ? (
    <Carousel
      customRightArrow={<CustomRightArrow />}
      customLeftArrow={<CustomLeftArrow />}
      draggable={false}
      responsive={responsive}
      arrows
      infinite
      slidesToSlide={1}
    >
      {employeesCarouselData.map(elem => (
        <EmployeesCarouselChild key={elem.id} item={elem} />
      ))}
    </Carousel>
  ) : (
    <div>Не удалось загрузить данные</div>
  );
};

export default MainEmployeesCarousel;
