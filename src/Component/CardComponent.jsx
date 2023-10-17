import Profile from "../assets/img/Profile-image.svg";

const CardComponent = () => {
  return (
    <>
      <div className="flex flex-row justify-between text-white bg-custom-color w-64 h-18 p-1.5 rounded-xl border-2 border-solid border-white ">

        <div className="w-12 h-12 flex items-center justify-center">
          <img src={Profile} className="w-10 h-10 " alt="Profile" />
        </div>

        <div className="flex flex-col justify-center ml-2 pr-4">
          <h1 className="font-inter text-base font-bold text-center ">Wzard Dee</h1>
          <p className="font-inter text-sm text-center ">4.89 ETH</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="text-4xl text-white rounded-sm">|</div>
        </div>

        <div className="flex flex-col justify-center pl-4 pr-5">
          <h1 className="font-inter text-base font-bold text-center ">33</h1>
          <p className="font-inter text-sm text-center ">Items</p>
        </div>

      </div>
    </>
  );
};

export default CardComponent;
