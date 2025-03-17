const Hero = () => {
  return (
    <section className="bg-yellow-200 text-center py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-extrabold text-gray-900">Minuman Jelly</h1>
        <p className="text-xl mt-4 text-gray-700">
          Ambil Sendiri, Ambil Sepuasnya
        </p>
        <button className="mt-6 bg-red-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-red-600 transition">
          Coba Sekarang
        </button>
      </div>
    </section>
  );
};

export default Hero;
