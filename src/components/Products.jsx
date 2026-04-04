import { useState } from "react";

function Products() {

  const [cart, setCart] = useState([]);
  const base = import.meta.env.BASE_URL;
  const products = [
    {
      name: "A2 COW Pure Ghee",
      image: "/pureghee.jpg",
      price: 899,
      oldPrice: 999,
      rating: 4.8,
      weight: "500g",
    },
    {
      name: "Cold-Pressed Coconut Oil",
      image: "/coconutoil.png",
      price: 499,
      oldPrice: 599,
      rating: 4.7,
      weight: "1L",
    },
    {
      name: "Honey",
      image: "/honey.png",
      price: 399,
      oldPrice: 450,
      rating: 4.9,
      weight: "500g",
    },
    {
      name: "Coffee",
      image: "/coffee.png",
      price: 599,
      oldPrice: 699,
      rating: 4.7,
      weight: "250g",
    },
    {
      name: "Red Rice",
      image: "/redrice.jpg",
      price: 799,
      oldPrice: 899,
      rating: 4.8,
      weight: "5kg",
    },
    {
      name: "Pistachio Nuts",
      image: "/pista.jpg",
      price: 699,
      oldPrice: 799,
      rating: 4.9,
      weight: "500g",
    },
    {
      name: "Almonds Nuts",
      image: "/almond.jpg",
      price: 699,
      oldPrice: 799,
      rating: 4.7,
      weight: "500g",
    },
    {
      name: "Cardamom Spice",
      image: "/cardamom.jpg",
      price: 899,
      oldPrice: 999,
      rating: 4.8,
      weight: "500g",
    },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(product.name + " added to cart 🛒");
  };

  return (
    <section className="px-4 sm:px-6 lg:px-10 py-12 md:py-16 lg:py-20 bg-gray-50">

      {/* Section Heading */}
      <div className="text-center mb-10 md:mb-12">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Featured Products
        </h2>

        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Fresh and authentic products directly from nature
        </p>

      </div>


      {/* Products Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[1400px] mx-auto">

        {products.map((product, index) => (

          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden
            transition-all duration-300
            hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]"
          >

            {/* Product Image */}
            <div className="relative overflow-hidden">

              {/* Discount Badge */}
              <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                SALE
              </span>

              {/* Wishlist */}
              <span className="absolute top-3 right-3 text-lg sm:text-xl cursor-pointer">
                🤍
              </span>

              <img
                src={`${base}${product.image}`}
                alt={product.name}
                className="w-full h-44 sm:h-48 md:h-52 lg:h-56 object-cover"
              />

            </div>

            {/* Product Info */}
            <div className="p-4 sm:p-5">

              <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                {product.name}
              </h3>

              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Weight: {product.weight}
              </p>

              {/* Rating */}
              <p className="text-yellow-500 text-xs sm:text-sm mt-1">
                ⭐ {product.rating}
              </p>

              {/* Price */}
              <div className="flex items-center gap-3 mt-2 sm:mt-3">

                <span className="text-lg sm:text-xl font-bold text-green-600">
                  ₹{product.price}
                </span>

                <span className="line-through text-gray-400 text-sm">
                  ₹{product.oldPrice}
                </span>

              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => addToCart(product)}
                className="mt-3 sm:mt-4 w-full bg-green-600 text-white py-2 rounded-lg text-sm sm:text-base hover:bg-green-700 transition"
              >
                Add to Cart 🛒
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Products;