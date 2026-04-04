const base = import.meta.env.BASE_URL;
const categories = [
  { name: "Ghee", img: base + "ghee.png" },
  { name: "Coconut Oil", img: base + "coconutoil.png" },
  { name: "Honey", img: base + "honey.png" },
  { name: "Spices", img: base + "spices.png" },
  { name: "Coffee", img: base + "coffee.png" },
  { name: "Rice", img: base + "rice.jpg" },
  { name: "Nuts", img: base + "nuts.jpg" },
];

function Categories() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">

      {/* Heading */}
      <div className="text-center mb-10 md:mb-14 px-4">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
          Shop by Category
        </h2>

        <p className="text-gray-700 mt-2 text-sm sm:text-base">
          Discover pure and natural products from our collection
        </p>

      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6 sm:gap-8 md:gap-10 max-w-[1400px] mx-auto px-4 sm:px-6">

        {categories.map((cat, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center group cursor-pointer p-4 sm:p-6 rounded-xl transition-all duration-300 transform hover:-translate-y-2"
          >

            {/* Glow Background */}
            <div className="absolute w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full bg-green-300 blur-2xl opacity-0 group-hover:opacity-40 transition duration-500"></div>

            {/* Gradient Border */}
            <div className="p-[3px] sm:p-[4px] rounded-full transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:via-yellow-300 group-hover:to-green-400">

              {/* Image Circle */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden bg-white shadow-md">

                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

            </div>

            {/* Category Name */}
            <h3 className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-semibold text-black group-hover:text-green-600 transition text-center">
              {cat.name}
            </h3>

          </div>
        ))}

      </div>


      {/* Trust Badges */}
      <div className="mt-12 md:mt-16 lg:mt-20 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center px-4 sm:px-6">

        <div>
          <div className="text-2xl sm:text-3xl mb-2">🌿</div>
          <p className="font-semibold text-black text-sm sm:text-base">
            100% Organic
          </p>
        </div>

        <div>
          <div className="text-2xl sm:text-3xl mb-2">🚚</div>
          <p className="font-semibold text-black text-sm sm:text-base">
            Fast Delivery
          </p>
        </div>

        <div>
          <div className="text-2xl sm:text-3xl mb-2">⭐</div>
          <p className="font-semibold text-black text-sm sm:text-base">
            Premium Quality
          </p>
        </div>

        <div>
          <div className="text-2xl sm:text-3xl mb-2">🔒</div>
          <p className="font-semibold text-black text-sm sm:text-base">
            Secure Checkout
          </p>
        </div>

      </div>

    </section>
  );
}

export default Categories;