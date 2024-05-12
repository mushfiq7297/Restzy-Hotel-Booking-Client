import React from 'react';

const Contact = () => {
    return (
        <div>
          <div className="flex justify-center">
            <h2 className="text-5xl font-bold my-10 w-48 border-b-4 border-blue-500">Contact</h2>
            </div>
      <div className="hero min-h-screen items-start">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left bg-[url('https://i.ibb.co/RPxx1v9/image-08.jpg')]  h-[473px] bg-cover items-center py-10 px-10 rounded-lg shadow-lg">
            <h1 className="p-5 text-2xl md:text-5xl font-bold text-white">Need to contact us?</h1>
            <p className='md:py-10 md:px-5 w-full md:w-3/4 text-white bg-gradient-to-r from-[#0000006d] to-[#0000006d]'
            >Waters midst. Creature man female. Them You’re female there his for first were have whose and blessed darkness his man Darkness had you’re hath fill were. Gathering may living moveth had evening called behold. Blessed darkness subdue he open she’d of void sea one let after light thing have creeping living the brought.</p>
           
            
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Massage</span>
                </label>
                <textarea
                  placeholder="Massage"
                  className="textarea textarea-bordered textarea-lg w-full max-w-xs"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">SEND MASSAGE</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Contact;