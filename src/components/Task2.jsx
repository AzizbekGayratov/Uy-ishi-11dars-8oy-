import { Carousel } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Vortex } from "react-loader-spinner";

export default function Task2() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/products`
        );
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const chunkArray = (data, chunkSize) => {
    const chunkedArr = [];
    for (let i = 0; i < data.length; i += chunkSize) {
      const chunk = data.slice(i, i + chunkSize);
      chunkedArr.push(chunk);
    }
    return chunkedArr;
  };

  const customTheme = {
    root: {
      base: "relative h-full w-full bg-neutral-300 rounded-lg overflow-hidden",
      leftControl:
        "absolute right-12 hover:opacity-70 transition-opacity cursor-pointer top-2 flex rounded-[99px] bg-white items-center justify-center focus:outline-none",
      rightControl:
        "absolute right-2 hover:opacity-70 transition-opacity cursor-pointer top-2 flex rounded-[99px] bg-white items-center justify-center focus:outline-none",
    },
    indicators: {
      active: {
        off: "bg-[#D9D9D9] w-[10px] h-[10px] dark:bg-gray-800/50 dark:hover:bg-gray-800",
        on: "bg-black w-[24px] h-[10px] dark:bg-gray-800 ",
      },
      base: "rounded-full",
      wrapper:
        "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-[8px] bg-white p-[8px] rounded-[99px]",
    },
    item: {
      base: "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
      wrapper: {
        off: "w-full flex-shrink-0 transform cursor-default snap-center",
        on: "w-full flex-shrink-0 transform cursor-grab snap-center",
      },
    },
    control: {
      base: "p-[10px] w-8 h-8 flex items-center justify-center",
      icon: "sm:h-[32px] sm:w-[32px] text-black text-red-600 dark:text-gray-800 h-8 w-8",
    },
    scrollContainer: {
      base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
      snap: "snap-x",
    },
  };

  const chunkedData = chunkArray(data, 4);
  return (
    <div className="carousel mt-14 mx-8 px-10">
      <div className="h-48 sm:h-64 md:h-80 lg:h-96 bg-inherit mb-10">
        {isLoading ? (
          <div className="w-full h-full flex justify-center items-center">
            <Vortex
              visible={true}
              height="340"
              width="340"
              ariaLabel="vortex-loading"
              wrapperStyle={{}}
              wrapperClass="vortex-wrapper"
            />
          </div>
        ) : error ? (
          <div className="w-full h-full flex justify-center items-center">
            <div>
              <p className="text-red-600 text-4xl font-semibold">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8"
              >
                Try again
              </button>
            </div>
          </div>
        ) : (
          <Carousel theme={customTheme} slideInterval={2000}>
            {chunkedData.map((chunk, index) => (
              <div key={index} className="grid grid-cols-4">
                {chunk.map((country, id) => {
                  const { image, title, price } = country;
                  return (
                    <div
                      key={id}
                      className="col-span-1 carousel-item m-2 flex flex-col justify-between p-4 max-w-40 hover:scale-110 hover:shadow-2xl ml-16 transition-transform rounded-md outline-none bg-white "
                    >
                      <div className="w-38">
                        <img src={image} alt="img" />
                      </div>
                      <div className="">
                        <p>{String(title).replace(/^(.{20}).*/, "$1")}</p>
                        <p className="text-xl font-bold mt-4">${price}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
}
