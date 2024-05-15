const SpecialOfferModal = ({ onClose }) => {
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="bg-white rounded-lg p-8 z-50">
            <div className="flex justify-end">
          <button className="btn btn-square btn-outline text-center"  onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          </div>
          <h2 className="font-extrabold text-xl text-red-600 text-center font-serif  rounded-badge p-3">
            SPECIAL OFFER
          </h2>
          
          <img
            src="https://i.ibb.co/fp935kj/Pngtree-up-to-20-off-price-8775259.png"
            className="w-80 h-80"
            alt="Special Offer"
          />
          <h2 className="font-extrabold text-4xl text-red-600 text-center font-serif bg-red-200 rounded-badge p-3">
            For Couples only!!!
          </h2>

          
        </div>
      </div>
    </div>
  );
};

export default SpecialOfferModal;
