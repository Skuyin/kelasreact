import React from "react";

const PricingCard = ({ title, img, price, buttonText, features }) => {
  return (
    <div className="bg-white p-6  rounded-2xl shadow-lg border border-gray-200 text-center w-full max-w-sm">
      <img src={img} className="w-full h-80 object-cover" />
      <h3 className="text-2xl font-bold text-gray-800">{title}</h3>

      <ul className="mt-4 mx-2 space-y-2 text-gray-600 text-left">
        {features.map((item, index) => (
          <li className="font-bold" key={index}>
             {item}
          </li>
        ))}
      </ul>
      <p className="text-4xl font-extrabold text-amber-500 mt-4">{price}</p>
      <button className="mt-6 w-full py-3 bg-amber-500 text-white font-semibold rounded-lg shadow-lg hover:bg-amber-600 transition">
        {buttonText}
      </button>
    </div>
  );
};

const PackageInfo = () => {
  const plans = [
    {
      img: "https://down-id.img.susercontent.com/file/id-11134207-7rasb-m336e0h9jngxdb",
      title: "Lovely",
      price: "1.000.000",
      features: ["Up to 300 cups", "Drink Stand", ""],
      buttonText: "Choose Plan",
    },
    {
      img: "https://down-id.img.susercontent.com/file/id-11134207-7r98p-lpxlv4caxr8e38",
      title: "Sweet Heart",
      price: "1.500.000",
      features: ["Up to 800 cups", "Boot Stand", ""],
      buttonText: "Choose Plan",
    },
    {
      img: "https://asset.kompas.com/crops/sRBZOOxbDRbdohwhGR4hCr_iRgo=/0x0:1278x852/1200x800/data/photo/2022/03/19/6235816a1fd43.jpeg",
      title: "Sultan Booth",
      price: "2.500.000",
      features: ["Up to 1200 cups", "Boot Stand", "Abang Ganteng"],
      buttonText: "Choose Plan",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center items-center py-16 bg-gray-100">
      {plans.map((plan, index) => (
        <PricingCard key={index} {...plan} />
      ))}
    </div>
  );
};

export default PackageInfo;
