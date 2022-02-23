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

const CustomLeftArrow: FC<ArrowProps> = ({ onClick }) => {
  return (
    <div onClick={onClick} style={{ position: 'absolute', cursor: 'pointer' }}>
      <img src={pref_arr} alt='previous arrow' />
    </div>
  );
};

const CustomRightArrow: FC<ArrowProps> = ({ onClick }) => {
  return (
    <div onClick={onClick} style={{ position: 'absolute', right: 0, cursor: 'pointer' }}>
      <img src={next_arr} alt='next arrow' />
    </div>
  );
};

const MainEmployeesCarousel: FC<IEmployeesCarouselData> = ({ employeesCarouselData }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      partialVisibilityGutter: 20,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      partialVisibilityGutter: 15,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      partialVisibilityGutter: 10,
    },
  };

  return employeesCarouselData ? (
    <Carousel
      customRightArrow={<CustomRightArrow />}
      customLeftArrow={<CustomLeftArrow />}
      draggable={false}
      partialVisible
      responsive={responsive}
      arrows
      infinite
      slidesToSlide={2}
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
