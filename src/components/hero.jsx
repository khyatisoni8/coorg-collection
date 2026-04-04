import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Hero() {
  const base = import.meta.env.BASE_URL;
  return (
    <section className="w-full">

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
      >

        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="relative h-[320px] sm:h-[420px] lg:h-[550px] bg-contain bg-center flex items-center justify-center md:justify-start"
            style={{ backgroundImage: `url(${base}bannerghee.jpg)` }}
          >
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative mx-4 sm:mx-8 md:ml-20 max-w-[90%] sm:max-w-md md:max-w-xl text-white backdrop-blur-md bg-white/20 p-4 sm:p-6 md:p-8 rounded-xl">
              <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                Golden Goodness
              </h1>

              <p className="text-sm sm:text-lg md:text-xl mb-4 md:mb-6">
                Pure Health — Choose Purity • Choose Health • Choose Us
              </p>

              <button className="bg-green-600 px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-green-700 transition">
                Order Your Jar Today
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="relative h-[320px] sm:h-[420px] lg:h-[550px] bg-contain bg-center flex items-center justify-center md:justify-start"
            style={{ backgroundImage: `url(${base}bannerhoney.jpg)` }}
          >
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative mx-4 sm:mx-8 md:ml-20 max-w-[90%] sm:max-w-md md:max-w-xl text-white backdrop-blur-md bg-white/20 p-4 sm:p-6 md:p-8 rounded-xl">
              <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                Pure Organic Honey
              </h1>

              <p className="text-sm sm:text-lg mb-4 md:mb-6">
                Natural sweetness directly from Coorg forests.
              </p>

              <button className="bg-green-600 px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-green-700">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="relative h-[320px] sm:h-[420px] lg:h-[550px] bg-contain bg-center flex items-center justify-center md:justify-start"
            style={{ backgroundImage: `url(${base}bannercoconutoil.jpg)` }}
          >
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative mx-4 sm:mx-8 md:ml-20 max-w-[90%] sm:max-w-md md:max-w-xl text-white backdrop-blur-md bg-white/20 p-4 sm:p-6 md:p-8 rounded-xl">
              <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                Pure Organic Coconut Oil
              </h1>

              <p className="text-sm sm:text-lg mb-4 md:mb-6">
                Natural richness directly from Coorg forests.
              </p>

              <button className="bg-green-600 px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-green-700">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div
            className="relative h-[320px] sm:h-[420px] lg:h-[550px] bg-contain bg-center flex items-center justify-center md:justify-start"
            style={{ backgroundImage: `url(${base}bannerspices.jpg)` }}
          >
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative mx-4 sm:mx-8 md:ml-20 max-w-[90%] sm:max-w-md md:max-w-xl text-white backdrop-blur-md bg-white/20 p-4 sm:p-6 md:p-8 rounded-xl">
              <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                Pure Organic Spices
              </h1>

              <p className="text-sm sm:text-lg mb-4 md:mb-6">
                Natural flavors directly from Coorg forests.
              </p>

              <button className="bg-green-600 px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-green-700">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 5 */}
        <SwiperSlide>
          <div
            className="relative h-[320px] sm:h-[420px] lg:h-[550px] bg-contain bg-center flex items-center justify-center md:justify-start"
            style={{ backgroundImage: `url(${base}bannercoffee.jpg)` }}
          >
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative mx-4 sm:mx-8 md:ml-20 max-w-[90%] sm:max-w-md md:max-w-xl text-white backdrop-blur-md bg-white/20 p-4 sm:p-6 md:p-8 rounded-xl">
              <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                Pure Organic Coffee
              </h1>

              <p className="text-sm sm:text-lg mb-4 md:mb-6">
                Natural richness directly from Coorg forests.
              </p>

              <button className="bg-green-600 px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-green-700">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>

    </section>
  );
}

export default Hero;