import bannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className='max-w-[1320px] mx-auto mt-[50px] mb-[100px]'>
      <div
        className='hero lg:h-[600px] rounded-xl md:rounded-2xl lg:rounded-3xl'
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}>
        <div className='bg-opacity-90'></div>
        <div className='hero-content text-center'>
          <div className='px-2 md:px-10 lg:px-52'>
            <h1 className='mb-6 text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight'>
              Savor Excellence: Unforgettable Dining Awaits
            </h1>
            <p className='mb-6 text-white'>
              Welcome to JustForFoodies, where culinary mastery meets
              exceptional service. Indulge in a culinary journey unlike any
              other, where every dish is a masterpiece crafted with passion and
              precision. Join us for an unforgettable dining experience filled
              with exquisite flavors and cherished moments.
            </p>
            <div className='flex flex-col md:flex-row gap-7 justify-center items-center'>
              <button className='bg-[#0BE58A] py-5 px-7 rounded-full border border-[#0BE58A] text-[#150B2B] text-xl font-semibold cursor-pointer'>
                Explore Now
              </button>
              <button className='bg-none py-5 px-7 rounded-full border border-white text-white text-xl font-semibold cursor-pointer'>
                Our Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
