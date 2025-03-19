import React from "react";
import Button from "../components/Button";
import Hero from "../components/Hero";
import Products from "../components/Products";
import InfoSection from "../components/CallToAction";
import CallToAction from "../components/CallToAction";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/bg-home.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Hero />
      <Products />
      <CallToAction
        right={
          <div className="flex flex-col">
            <h1 className="text-7xl">Location</h1>
            <h2 className="text-4xl">Ruko Villa Nusa Indah 2</h2>
            <Button
              title="Kunjungi"
              link="https://maps.app.goo.gl/XjWZ9zvAsNSeSJpJA"
              className="self-start"
            />
          </div>
        }
        left={
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.612010932659!2d106.9701056750384!3d-6.31459029367475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6992681fe69f47%3A0xf1f3e1284d370436!2sRuko%20Villa%20Nusa%20Indah%202%2C%20Jl.%20Vila%20Nusa%20Indah%2C%20Bojong%20Kulur%2C%20Kec.%20Gn.%20Putri%2C%20Kabupaten%20Bogor%2C%20Jawa%20Barat%2016969!5e0!3m2!1sid!2sid!4v1742253616559!5m2!1sid!2sid"
              width="350"
              height="350"
              className="rounded-lg shadow-lg border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        }
      />
      <CallToAction
        right={
          <div>
            <img
              className=" h-60 object-cover"
              src="https://thumbs.dreamstime.com/b/blue-birthday-cake-presents-hats-colorful-balloons-over-light-grey-94034395.jpg"
            />
          </div>
        }
        left={
          <div className="flex flex-col">
            <h1 className="text-8xl">Pesta</h1>
            <h2 className="text-4xl">Biarakan kita andil didalam pesta anda</h2>
            <Button title="Lanjut" link="/party" className="self-end" />
          </div>
        }
      />
    </div>
  );
};

export default Home;
