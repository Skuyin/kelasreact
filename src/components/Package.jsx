import React from "react";

const Package = () => {
  return (
    <>
      {/* Section Lokasi */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-12 py-16 md:py-20 bg-pink-500">
        {/* Map Section */}
        <div className="flex-1 flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.612010932659!2d106.9701056750384!3d-6.31459029367475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6992681fe69f47%3A0xf1f3e1284d370436!2sRuko%20Villa%20Nusa%20Indah%202%2C%20Jl.%20Vila%20Nusa%20Indah%2C%20Bojong%20Kulur%2C%20Kec.%20Gn.%20Putri%2C%20Kabupaten%20Bogor%2C%20Jawa%20Barat%2016969!5e0!3m2!1sid!2sid!4v1742253616559!5m2!1sid!2sid"
            width="100%"
            height="350"
            className="rounded-lg shadow-lg border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Lokasi</h1>
          <p className="text-xl md:text-2xl mt-4 text-white">
            Ruko Villa Nusa Indah 2
          </p>
        </div>
      </div>

      {/* Section Paket Acara */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-12 py-16 md:py-20 bg-pink-400">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-right">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Paket untuk Acara?
          </h1>
          <p className="text-xl md:text-2xl mt-4 text-white">
            Biarkan kami andil dalam menciptakan momen bersamamu dalam satu
            paket.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://images-cdn.ubuy.co.in/67a95b26e7d7ca3a272a03cf-275-pc-colorful-birthday-party.jpg"
            alt="Paket Acara"
            className="w-full max-w-xs md:max-w-sm rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Package;
