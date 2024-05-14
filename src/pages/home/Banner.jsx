import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <div className="">
      <Swiper
        autoplay={true}
        modules={[Autoplay]}
        className="mySwiper"
        data-swiper-autoplay="2000"
      >
        <SwiperSlide
          className="bg-[url('https://i.ibb.co/RPxx1v9/image-08.jpg')] w-full bg-cover bg-center "
        >
          <div className="flex flex-col justify-center items-center bg-gradient-to-r from-[#0000006d] to-[#0000006d] w-full text-white h-screen ">
            <div className="hero-content text-center">
              <div className="text-center">
                <h1 className="text-7xl font-bold">Cozy Like Your Home</h1>
                <p className="py-6 text-lg">
                  Find your peace and make your tour more enjoyable having a
                  comfy rest with restzy
                </p>
                <button className="btn btn-primary rounded-full">
                  EXPLORE ROOMS
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="bg-[url('https://i.ibb.co/bKPf2Zy/image-07.jpg')] w-full bg-cover bg-center "
        >
          <div className="flex flex-col justify-center items-center bg-gradient-to-r from-[#0000006d] to-[#0000006d] w-full text-white h-screen font-cerdaville">
          <div className="hero-content text-center">
              <div className="text-center">
                <h1 className="text-7xl font-bold">Cozy Like Your Home</h1>
                <p className="py-6 text-lg">
                  Find your peace and make your tour more enjoyable having a comfy rest with restzy
                </p>
                <button className="btn btn-primary rounded-full">EXPLORE ROOMS</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="bg-[url('https://i.ibb.co/ZTBnNvB/image-06.jpg')] w-full bg-cover bg-center "
        >
          <div className="flex flex-col justify-center items-center bg-gradient-to-r from-[#0000006d] to-[#0000006d] w-full h-screen text-white">
          <div className="hero-content text-center">
              <div className="text-center">
                <h1 className="text-7xl font-bold">Cozy Like Your Home</h1>
                <p className="py-6 text-lg">
                  Find your peace and make your tour more enjoyable having a comfy rest with restzy
                </p>
                <button className="btn btn-primary rounded-full">EXPLORE ROOMS</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[url('https://i.ibb.co/kcMp8SD/image-05.jpg')] w-full bg-cover bg-center ">
          <div className="flex flex-col justify-center items-center  bg-gradient-to-r from-[#0000006d] to-[#0000006d] text-white w-full h-screen font-cerdaville">
          <div className="hero-content text-center">
              <div className="text-center">
                <h1 className="text-7xl font-bold">Cozy Like Your Home</h1>
                <p className="py-6 text-lg">
                  Find your peace and make your tour more enjoyable having a comfy rest with restzy
                </p>
                <button className="btn btn-primary rounded-full">EXPLORE ROOMS</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[url('https://i.ibb.co/GQdp8B8/image-04.png')] w-full bg-cover bg-center">
          <div className="flex flex-col justify-center items-center bg-gradient-to-r from-[#0000006d] to-[#0000006d] w-full h-screen text-white">
          <div className="hero-content text-center">
              <div className="text-center">
                <h1 className="text-7xl font-bold">Cozy Like Your Home</h1>
                <p className="py-6 text-lg">
                  Find your peace and make your tour more enjoyable having a comfy rest with restzy
                </p>
                <button className="btn btn-primary rounded-full">EXPLORE ROOMS</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
