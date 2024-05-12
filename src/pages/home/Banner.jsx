const Banner = () => {
  return (
    <div className="">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/L0vGBGM/image-03.jpg)"
            , 
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="py-5 text-5xl lg:text-7xl font-bold">Enjoy The Experience</h1>
            <p className="py-5 text-2xl font-bold">
              Everything you can dream about, available here, for 50$ per night
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
