const Newsletter = () => {
  return (
    <div>
      <div
        className="hero mt-4 h-96"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/k2kHPF3/image-02.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl">Get Our Updates</h1>
            <p className="mb-5">
            Find out about events and other news
            </p>
            <div className="flex flex-row">
			<input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
			<button type="button" className="btn btn-primary w-2/5 p-3 font-semibold rounded-r-lg rounded-l-none sm:w-1/3 dark:bg-violet-600 dark:text-gray-50">Subscribe</button>
		</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
