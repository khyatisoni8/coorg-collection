function About() {

  const features = [
    { title: "Chemical Free", icon: "🌿" },
    { title: "Ethically Sourced", icon: "🤝" },
    { title: "Locally Grown", icon: "🌾" },
    { title: "Handcrafted", icon: "👐" },
    { title: "Natural Ingredients", icon: "🍃" },
    { title: "Eco Friendly", icon: "🌍" },
  ];

  const reviews = [
    {
      name: "Jyotsna",
      text: "The quality of products is amazing. The ghee tastes completely natural and authentic!",
      rating: "★★★★★"
    },
    {
      name: "Vijay",
      text: "Fast delivery and premium quality. I can really feel the difference in taste.",
      rating: "★★★★★"
    },
    {
      name: "Renu",
      text: "Very pure products and great packaging. Highly recommended for healthy lifestyle.",
      rating: "★★★★"
    },
  ];

  const stats = [
    { number: "10K+", label: "Happy Customers" },
    { number: "50+", label: "Farmers Connected" },
    { number: "100%", label: "Natural Products" },
    { number: "4.8⭐", label: "Customer Rating" },
  ];

  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-16 md:py-20 px-4 sm:px-6">

      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-14 md:mb-16">

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-normal">
          Pure Goodness from the Hills of Coorg
        </h2>

        <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-sm sm:text-base">
          Coorg Collection brings authentic natural products directly from the
          beautiful hills of Coorg. Our mission is to provide pure, natural and
          responsibly sourced food while supporting local farmers and
          sustainable agriculture.
        </p>

      </div>


      {/* Feature Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-16 md:mb-20">

        {features.map((item, index) => (

          <div
            key={index}
            className="bg-white p-5 md:p-6 rounded-xl shadow-md text-center
            transition transform hover:-translate-y-2 hover:shadow-xl hover:bg-green-50"
          >

            <div className="text-3xl md:text-4xl mb-3">
              {item.icon}
            </div>

            <h3 className="font-semibold text-gray-800 text-sm md:text-base">
              {item.title}
            </h3>

          </div>

        ))}

      </div>


      {/* Stats Section */}
      <div className="max-w-5xl mx-auto mb-16 md:mb-20">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">

          {stats.map((stat, index) => (

            <div
              key={index}
              className="bg-white rounded-xl p-5 md:p-6 shadow-md hover:shadow-lg transition"
            >

              <h3 className="text-2xl md:text-3xl font-bold text-green-600">
                {stat.number}
              </h3>

              <p className="text-gray-600 mt-2 text-sm md:text-base">
                {stat.label}
              </p>

            </div>

          ))}

        </div>

      </div>


      {/* Why Choose Us */}
      <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">

        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Why Choose Us?
        </h3>

        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
          A healthy lifestyle begins with pure food. At Coorg Collection we
          focus on bringing products that are close to nature. Every item is
          carefully sourced from trusted farmers and prepared in small batches
          to preserve its natural taste and nutrition.
        </p>

        <p className="text-gray-600 mt-4 leading-relaxed text-sm md:text-base">
          Our goal is not just to sell products but to promote a healthier way
          of living by delivering food that is authentic, natural and
          responsibly produced.
        </p>

      </div>


      {/* Customer Reviews */}
      <div className="max-w-6xl mx-auto">

        <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10 md:mb-12">
          Loved by Our Customers
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">

          {reviews.map((review, index) => (

            <div
              key={index}
              className="bg-white p-5 md:p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >

              <p className="text-yellow-500 mb-2">
                {review.rating}
              </p>

              <p className="text-gray-600 mb-4 text-sm md:text-base">
                {review.text}
              </p>

              <h4 className="font-semibold text-gray-800">
                {review.name}
              </h4>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default About;