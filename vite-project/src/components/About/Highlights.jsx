const Highlight = () => {
  return (
    <section className="highlight mb-8 animate-fade-up bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 p-6 rounded-xl shadow-lg">
      <h2 className="text-3xl font-semibold text-white mb-6 transition-transform duration-300 transform hover:scale-105 hover:text-yellow-300">
        Notable Highlights
      </h2>
      <ul className="list-disc pl-6 mt-4 text-xl text-white ">
        <li className="transition-transform duration-300 hover:scale-105 hover:text-yellow-300 hover:font-bold">
          Successfully launched 10+ websites for clients worldwide.
        </li>
        <li className="transition-transform duration-300 hover:scale-105 hover:text-yellow-300 hover:font-bold">
          Awarded "Best Web Design" in 2023 by Design Expo.
        </li>
        <li className="transition-transform duration-300 hover:scale-105 hover:text-yellow-300 hover:font-bold">
          Collaborated with leading brands like Razer and Intel to create web experiences that increased conversions by 25%.
        </li>
      </ul>
    </section>
  );
};

export default Highlight;
