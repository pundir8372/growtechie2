// components/DiscountForm.tsx

const DiscountForm = () => {
  return (
    <div className="py-20 bg-gray-900 rounded-md shadow-md">
      <h2 className="text-center text-3xl font-bold mb-8">
        20% discount for early birds!
      </h2>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-around">
        <input
          type="text"
          placeholder="Your full name"
          className="p-4 mb-4 md:mb-0 md:mr-4 rounded-md w-full md:w-1/3"
        />
        <input
          type="email"
          placeholder="Your working email"
          className="p-4 mb-4 md:mb-0 md:mr-4 rounded-md w-full md:w-1/3"
        />
        <input
          type="tel"
          placeholder="Your phone number"
          className="p-4 mb-4 md:mb-0 rounded-md w-full md:w-1/3"
        />
        <button className="bg-purple-500 text-white px-8 py-4 rounded-md mt-4 md:mt-0 md:ml-4">
          Join the course
        </button>
      </div>
      <div className="flex justify-center items-center mt-8">
        <div className="text-center mr-4">
          <p className="text-lg">06</p>
          <p>Days</p>
        </div>
        <div className="text-center mr-4">
          <p className="text-lg">18</p>
          <p>Hours</p>
        </div>
        <div className="text-center mr-4">
          <p className="text-lg">24</p>
          <p>Mins</p>
        </div>
        <div className="text-center">
          <p className="text-lg">12</p>
          <p>Sec</p>
        </div>
      </div>
    </div>
  );
};

export default DiscountForm;
