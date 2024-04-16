import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,

    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const img_src_sliders: string[] = [
    "https://hips.hearstapps.com/hmg-prod/images/hoka-zinal-13085-1643565794.jpg",
    "https://t4.ftcdn.net/jpg/02/11/11/15/360_F_211111574_VLtzH6ORhebXvnJXjlkAkaUuAftnvmJH.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Sports_shoes.jpg/1024px-Sports_shoes.jpg",
  ];

  return (
    <>
      <Slider {...settings}>
        {img_src_sliders.map((item, key) => (
          <div
            className="!flex items-center bg-gray-100 pl-6 h-[500px] place-items-end"
            key={key}
          >
            <div className="">
              <div className="text-5xl font-bold">
                En Kaliteli Ayakkabilar Burada
              </div>
              <div className="text-lg my-4">Lorem Ipsum Bla bla</div>
              <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
                Incele
              </div>
            </div>

            <img
              src={item}
              alt=""
              className="h-full w-full  object-cover m-auto place-items-end"
            />
          </div>
        ))}
      </Slider> 
      <div className="pb-3"></div>
    </>
  );
};

export default SliderComp;
