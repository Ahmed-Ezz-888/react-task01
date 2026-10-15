import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <header className="w-full bg-[rgba(248, 249, 250, 0.8)]">
      <div className="container mx-auto px-6 py-4 flex justify-between ">
        <div className="flex logo">
          <img src="/public/Background.svg"></img>
          <h1 className="flex items-center pb-5">Gourmet Bistro</h1>
        </div>
        <nav className="flex gap-8 justify-center items-center pb-3 ">
          <a>Home</a>
          <a>Menu</a>
          <a>Our Story</a>
          <a>Gallery</a>
        </nav>
        <button className="b1 bg-[#FF6B35] text-[#FFFFFF] shadow rounded-full flex items-center justify-center w-37.5 h-10">
          Book a Table
        </button>
      </div>
    </header>
    <div className="section1 min-h-screen bg-cover bg-center flex items-center justify-center flex-col gap-0  bg-[url('/Container.png')]">
      <p className="text-[#FF6B35] bg-[#FF6B351A] rounded-full flex items-center justify-center w-42.5 h-8 mb-10 mr-95">
        THE ART OF DINING
      </p>
      <h1>
        Elevated culinary<br></br>
        <span className="relative -top-2.5 ">experiences</span> for<br></br>
        every palate.
      </h1>
      <p className="p2 text-[#E5E7EB] mt-6 mr-30">
        Discover a symphony of flavors crafted with locally<br></br> sourced
        ingredients and exceptional passion.
      </p>
      <div className="but2 flex gap-4 mt-8 mr-65">
        <button className="b01 bg-[#FF6B35] text-[#FFFFFF] shadow rounded-full flex items-center justify-center w-37.5 h-10">
          View Menu
        </button>
        <button className="b02 bg-[#FFFFFF33] text-[#FFFFFF] shadow rounded-full flex items-center justify-center w-37.5 h-10">
          Book a Table
        </button>
      </div>
      <div className="flex items-center gap-5 mt-8 mr-55">
        <img
          src="/public/Container (1).png "
          className="w-20 h-10 object-contain"
        ></img>
        <p className="text-[#E5E7EB] m2">
          <b>4.9/5</b> from over 2,000+ happy diners
        </p>
      </div>
    </div>

    <section id="story" className="container mx-auto px-6 story">
      <div className="story-image">
        <img src="/public/Professional chef carefully garnishing a gourmet plate in a high-end kitchen, close-up, shallow depth of field..png" />
        <div className="years">
          <h2>15+</h2>
          <p>YEARS OF EXCELLENCE</p>
        </div>
      </div>

      <div className="story-text">
        <h2>
          Crafting stories on
          <br />
          every plate since <span>2008.</span>
        </h2>

        <p className="mb-5">
          Gourmet Bistro was born from a simple vision: to create a space where
          culinary excellence meets genuine hospitality. Our journey began in a
          small kitchen with big dreams, focusing on the purity of ingredients
          and the joy of shared meals.
        </p>

        <p>
          Today, we continue that legacy, blending traditional techniques with
          modern innovation to bring you a menu that celebrates the best of the
          season.
        </p>

        <div className="flex gap-8 mt-8">
          <div className="feature">
            <img src="/public/Overlay.svg"></img>
            <div>
              <h3>Fresh Harvest</h3>
              <p>Daily sourced organic ingredients.</p>
            </div>
          </div>

          <div className="feature">
            <img src="/public/Overlay (1).svg"></img>
            <div>
              <h3>Expert Chefs</h3>
              <p>Award-winning culinary team.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="vvv bg-[#F8F9FA]">
      <div className="container mx-auto px-6 py-4 flex justify-between flex-col">
        <h1 className="items-center pt-25 pb-10">Visual Feast</h1>
        <p className="pb-10">
          A glimpse into our kitchen and the vibrant atmosphere we've created
          for <br></br>you.
        </p>
        <div className="mx-auto grid max-w-215 grid-cols-2 gap-4">
          <div className="h-96.5 overflow-hidden rounded-[20px]">
            <img
              src="/public/Top-down view of a perfectly cooked medium-rare steak with rosemary and roasted vegetables on a white plate..png"
              alt="Steak"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-8.5">
            <div className="h-41.5 overflow-hidden rounded-[20px]">
              <img
                src="/public/Fresh seafood platter with oysters, shrimp, and lemon on a bed of ice, vibrant colors..png"
                alt="Seafood"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-3.75">
              <div className="h-41.5 overflow-hidden rounded-[20px]">
                <img
                  src="/public/Close-up of a stylish restaurant lounge area with velvet chairs and modern art..png"
                  alt="Restaurant"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="h-41.5 overflow-hidden rounded-[20px]">
                <img
                  src="/public/Beautifully crafted colorful cocktail with fruit garnish and ice, professional product photography..png"
                  alt="Drink"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>,
);
