import React from "react";
import Layout from "../components/layout/Layout";
import { PROPERTYLISTINGSAMPLE } from "../constants";
import { PropertyProps } from "../interfaces";

const Home: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-72 rounded-md flex items-center justify-center"
        style={{ backgroundImage: "url('https://example.com/hero-image.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded text-center text-white max-w-lg">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Find Your Luxury Property
          </h1>
          <p className="mb-6">Discover exclusive homes with the best views.</p>
          <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded text-white font-semibold transition">
            Browse Listings
          </button>
        </div>
      </section>

      {/* Filter Section (Placeholder) */}
      <section className="my-8">
        <h2 className="text-xl font-semibold mb-4">Filter by Category</h2>
        {/* TODO: Implement filter pills */}
      </section>

      {/* Property Listing Grid */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Featured Properties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {PROPERTYLISTINGSAMPLE.map((property: PropertyProps, index: number) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
            >
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{property.name}</h3>
                <p className="text-gray-600 text-sm mb-2">
                  {property.address.city}, {property.address.state}
                </p>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-indigo-600 font-bold">${property.price}</span>
                  <span className="text-yellow-400 font-semibold">
                    ⭐ {property.rating.toFixed(2)}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {property.category.map((cat, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-indigo-100 text-indigo-800 rounded-full px-2 py-0.5"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Home;
