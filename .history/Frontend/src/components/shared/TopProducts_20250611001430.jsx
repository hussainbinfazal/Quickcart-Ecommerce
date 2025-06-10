import React, { use } from "react";
import { useRef, useState, useEffect } from "react";
import { FiEye, FiHeart, FiEyeOff } from "react-icons/fi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Seperation from "../../pages/Home/components/Seperation";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";

import {addToGuestWishlist,
  removeFromGuestWishlist,
  fetchGuestWishlist,
  removeFromWishlist,
  addToWishlist,
  fetchWishlist,} from "../../redux/slices/wishlistSlice";


import {
  addToCart,
  removeFromCart,
  fetchCartItems,
  clearCart,
  addToGuestCart,
  removeFromGuestCart,
  clearGuestCart,
  setGuestCart,
  fetchGuestCart,
} from "../../redux/slices/cartSlice";
import LoadingSpinner from "../shared/LoadingSpinner";
import "../../App.css";
export const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {/* Full stars */}
      {[...Array(fullStars)].map((_, i) => (
        <svg
          key={`full-${i}`}
          className="w-4 h-4 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}

      {/* Half star */}
      {hasHalfStar && (
        <svg
          className="w-4 h-4 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <defs>
            <linearGradient id="half-star" x1="0" x2="100%" y1="0" y2="0">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#D1D5DB" />
            </linearGradient>
          </defs>
          <path
            fill="url(#half-star)"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
      )}

      {/* Empty stars */}
      {[...Array(emptyStars)].map((_, i) => (
        <svg
          key={`empty-${i}`}
          className="w-4 h-4 text-gray-300"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}

      {/* Rating number */}
      <span className="ml-1 text-sm text-gray-600">{rating.toFixed(1)}</span>
    </div>
  );
};
export const ProductCard = ({
  product,
  isGrid,
  handleAddToCart,
  isNew,
  isOnSale,
  handleLike,
  handleUnlike,
  handleRemoveFromCart,
  isPadding,
}) => {
  const { wishlist, guestWishlist } = useSelector((state) => state.wishlist);
  const [showPreview, setShowPreview] = useState(false);
  const { cartItems, guestCartItems, cart } = useSelector(
    (state) => state.cart
  );
  const { isAuthenticated } = useSelector((state) => state.user);
  const alreadyAdded = isAuthenticated
    ? cartItems?.some((item) => item?.product?._id === product._id)
    : guestCartItems?.some((item) => item?._id === product._id);
  const isLiked =
    (Array.isArray(wishlist) &&
      wishlist.some((item) => item?.product?._id === product._id)) ||
    (Array.isArray(guestWishlist) &&
      guestWishlist.some((item) => item?.product?._id === product._id));

  const navigate = useNavigate();
  return (
    {loading }
  );
};

const TopProducts = ({
  topMostHeading,
  categoryTitle,
  isTimer,
  isGrid,
  isViewButton,
  bottomButtonText,
  products,
  isOnSale,
  // loading,
}) => {
  const [time, setTime] = useState(new Date());
  // { Product array dynamic hoga}

  const navigate = useNavigate();
  const rowCount = 2;
  const productsPerRow = Math.ceil(products?.length / rowCount); // Set how many products you want per row

  // Create array of row arrays
  const productRows = Array.from({ length: rowCount }, (_, i) =>
    products?.slice(i * productsPerRow, (i + 1) * productsPerRow)
  );
  // useEffect to update time every second
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(timeInterval);
  }, []);
  let seconds = new Date().getSeconds().toString().padStart(2, "0");
  let minutes = new Date().getMinutes().toString().padStart(2, "0");
  let hours = new Date().getHours().toString().padStart(2, "0");
  let days = new Date().getDate().toString().padStart(2, "0");

  const scrollContainerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStartLeft, setScrollStartLeft] = useState(0);

  // Scroll handling functions
  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = isGrid
        ? scrollContainerRef.current.offsetWidth * 0.8
        : scrollContainerRef.current.offsetWidth * 0.5;
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = isGrid
        ? scrollContainerRef.current.offsetWidth * 0.8
        : scrollContainerRef.current.offsetWidth * 0.5;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };
  const handleWheel = (e) => {
    if (scrollContainerRef.current) {

      const scrollAmount = isGrid
        ? scrollContainerRef.current.offsetWidth * 0.8
        : scrollContainerRef.current.offsetWidth * 0.5;

      scrollContainerRef.current.scrollBy({
        left: e.deltaY > 0 ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;

    if (!container) return;

    const onWheel = (e) => {
      // Prevent page vertical scrolling
      e.preventDefault();

      const scrollAmount = isGrid
        ? container.offsetWidth * 0.8
        : container.offsetWidth * 0.5;

      container.scrollBy({
        left: e.deltaY > 0 ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    };

    container.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", onWheel);
    };
  }, [isGrid]);
  // Handle touch start event
  const handleTouchStart = (e) => {
    const container = scrollContainerRef.current;
    if (!container) {
    }

    setIsScrolling(true);
    setStartX(e.touches[0].pageX);
    setScrollStartLeft(container.scrollLeft);
  };

  useEffect(() => {
    setTimeout(() => {
      const container = scrollContainerRef.current;
      if (!container) return;

      let isDown = false;
      let startX;
      let scrollLeft;

      const handleMouseDown = (e) => {
        isDown = true;
        container.classList.add("cursor-grabbing");
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
      };

      const handleMouseLeave = () => {
        isDown = false;
        container.classList.remove("cursor-grabbing");
      };

      const handleMouseUp = () => {
        isDown = false;
        container.classList.remove("cursor-grabbing");
      };

      const handleMouseMove = (e) => {
        if (!isDown) {
          return;
        }
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 1.5; // Sensitivity
        container.scrollLeft = scrollLeft - walk;
      };

      // Attach mouse events

      container.addEventListener("mousedown", handleMouseDown);
      container.addEventListener("mouseleave", handleMouseLeave);
      container.addEventListener("mouseup", handleMouseUp);
      container.addEventListener("mousemove", handleMouseMove);

      
      let scrollDirection = 1;

      const intervalId = setInterval(() => {
        if (!scrollContainerRef.current) return;
        const scrollAmount = isGrid
          ? scrollContainerRef.current.offsetWidth * 0.8
          : scrollContainerRef.current.offsetWidth * 0.5;

        const maxScrollLeft =
          scrollContainerRef.current.scrollWidth -
          scrollContainerRef.current.clientWidth;

        if (scrollDirection === 1) {
          // Scrolling to the right
          if (container.scrollLeft + scrollAmount >= maxScrollLeft) {
            scrollDirection = -1; // Reverse direction
          } else {
            container.scrollLeft += scrollAmount;
          }
        } else {
          // Scrolling to the left
          if (container.scrollLeft - scrollAmount <= 0) {
            scrollDirection = 1; // Reverse direction
          } else {
            container.scrollLeft -= scrollAmount;
          }
        }
      }, 2500); // adjust timing as needed

      // Clean up
      return () => {
        container.removeEventListener("mousedown", handleMouseDown);
        container.removeEventListener("mouseleave", handleMouseLeave);
        container.removeEventListener("mouseup", handleMouseUp);
        container.removeEventListener("mousemove", handleMouseMove);
        clearInterval(intervalId);
      };
    }, 1000);
  }, [isGrid]);

  // functionality

  const { isAuthenticated } = useSelector((state) => state.user);
  const { loading } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const handleAddToCart = async (productId) => {
    if (isAuthenticated) {
      await dispatch(addToCart({ productId: productId?._id })).unwrap();
      await dispatch(fetchCartItems()).unwrap();
    } else {
      dispatch(addToGuestCart(productId));
      dispatch(fetchWishlist()).unwrap();
    }
  };
  const handleRemoveFromCart = async (productId) => {
    if (isAuthenticated) {
      await dispatch(removeFromCart({ productId: productId?._id })).unwrap();
      await dispatch(fetchWishlist()).unwrap();
      await dispatch(fetchCartItems()).unwrap();
    } else {
      dispatch(removeFromGuestCart(productId));
      dispatch(fetchWishlist()).unwrap();
    }
  };
  const handleLike = async (product) => {
    if (isAuthenticated) {
      await dispatch(addToWishlist(product._id)).unwrap();
      await dispatch(fetchWishlist()).unwrap();
      await dispatch(fetchCartItems()).unwrap(); // fetchCartItems
    } else {
      dispatch(
        addToGuestWishlist({
          product: {
            _id: product._id,
            name: product.name,
            image: product.productImage,
            price: product.price,
            discount: product.discount,
            description: product.description,
            rating: product.rating,
            numReviews: product.numReviews,
            countInStock: product.countInStock,
            category: product.category,
            brand: product.brand,
            createdAt: product.createdAt,
            updatedAt: product.updatedAt,
            seller: product.seller,
            tags: product.tags,
            isFeatured: product.isFeatured,
            sku: product.sku,
            colours: product.colours,
            sizes: product.sizes,
            material: product.material,
            madeIn: product.madeIn,
            __v: product.__v,
          },
        })
      );
      dispatch(fetchGuestWishlist());
    }
  };

  const handleUnlike = async (product) => {
    if (isAuthenticated) {
      await dispatch(removeFromWishlist(product._id));
      await dispatch(fetchWishlist()).unwrap();
    } else {
      dispatch(removeFromGuestWishlist(product));
      dispatch(fetchGuestWishlist());
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div
      className={`mt-30 w-full ${
        isGrid ? "h-[1090px]" : isTimer ? "h-[800px]" : "h-[700px]"
      } flex justify-center items-center `}
    >
      <div className="w-[95%] lg:w-5/6 xl:w-5/6 2xl:w-5/6 h-full flex flex-col  justify-start items-center gap-2 lg:gap-0 xl:gap-0 2xl:gap-0 ">
        {/* {First Heading */}
        <div className="w-full h-[60px] lg-h-[60px] xl:h-[60px] 2xl:h-[60px] flex justify-start items-center relative ">
          <div className="absolute top-0 bg red w-[25px] h-[60px] rounded-md bg-red-700"></div>
          <div className="w-auto flex items-center justify-center h-full ml-[45px] font-semibold">
            <h3 className="text-[14px] text-red-700 pt-1">{topMostHeading}</h3>
          </div>
        </div>
        {/* {Second Heading} */}
        <div
          className={`w-full ${
            isTimer
              ? "h-[150px] justify-start"
              : " h-[120px] justify-between items-start gap-2 "
          } lg:h-[120px] xl:h-[120px] 2xl:h-[120px] flex flex-col  lg:flex-row xl:flex-row 2xl:flex-row  lg:justify-between xl:justify-start  lg:items-center xl:items-center 2xl:items-center items-start`}
        >
          {/* {title} */}
          <div
            className={`${
              isTimer
                ? " w-full lg:w-[60%] xl:w-[60%] 2xl:w-[60%] "
                : "w-[100%]"
            } h-1/3  py-2 lg:h-full xl:h-full 2xl:h-full flex justify-start items-center`}
          >
            <h1 className="lg:text-4xl xl:text-4xl 2xl:text-4xl text-3xl font-semibold ">
              {categoryTitle}
            </h1>
          </div>
          {/* {Timer} */}
          <div
            className={`w-[100%] lg:w-[60%] xl:[60%] 2xl:w-[60%] h-1/3 lg:h-full xl:h-full 2xl:h-full  flex lg:justify-start xl:justify-start 2xl:justify-start justify-center items-center lg:pl-[1.5rem] xl:pl-[1.5rem] 2xl:pl-[1.5rem]  gap-4 ${
              isTimer ? "block" : "hidden"
            }`}
          >
            {/* {Days} */}
            <div className=" h-full flex flex-col ">
              <span className="h-full flex flex-col justify-center items-center">
                <h3 className=" font-semibold text-[0.8rem]">Days</h3>
                <h3 className="font-bold text-[1.6rem] lg:text-[1.9rem] xl:text-[1.9rem] 2xl:text-[1.9rem]">
                  {days}
                </h3>
              </span>
            </div>
            {/* {Seperation} */}
            <span className="text-[1.5rem] flex items-center py-4 text-red-700">
              :
            </span>
            {/* {Hours} */}
            <div className=" h-full flex flex-col">
              <span className="h-full flex flex-col justify-center items-center">
                <h3 className=" font-semibold text-[0.8rem]">Hours</h3>
                <h3 className="font-bold text-[1.6rem] lg:text-[1.9rem] xl:text-[1.9rem] 2xl:text-[1.9rem]">
                  {hours}
                </h3>
              </span>
            </div>
            {/* {Seperation} */}
            <span className="text-[1.5rem] flex items-center py-4 text-red-700">
              :
            </span>
            {/* {Minutes} */}
            <div className=" h-full flex flex-col">
              <span className="h-full flex flex-col justify-center items-center">
                <h3 className=" font-semibold text-[0.8rem]">Minutes</h3>
                <h3 className="font-bold text-[1.6rem] lg:text-[1.9rem] xl:text-[1.9rem] 2xl:text-[1.9rem]">
                  {minutes}
                </h3>
              </span>
            </div>
            {/* {Seperation} */}
            <span className="text-[1.5rem] flex items-center py-4 text-red-700">
              :
            </span>
            {/* {Seconds} */}
            <div className=" h-full flex flex-col">
              <span className="h-full flex flex-col justify-center items-center">
                <h3 className=" font-semibold text-[0.8rem]">Seconds</h3>
                <h3 className="font-bold text-[1.6rem] lg:text-[1.9rem] xl:text-[1.9rem] 2xl:text-[1.9rem]">
                  {seconds}
                </h3>
              </span>
            </div>
          </div>
          <div
            className={`${
              isTimer
                ? "w-full lg:*:w-[15%] xl:w-[15%] 2xl:w-[15%]"
                : " w-full lg:w-[30%] xl:w-[30%] 2xl:w-[30%]"
            } h-1/3 flex justify-end items-center relative gap-4 lg:h-full xl:h-full 2xl:h-full`}
          >
            <div className="w-full h-full flex justify-between lg:justify-end xl:justify-end 2xl:justify-end items-center gap-2 ">
              <button
                onClick={handleScrollLeft}
                className="  z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md cursor-pointer"
              >
                <HiChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleScrollRight}
                className=" right-0 top-1/2  z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md cursor-pointer"
              >
                <HiChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
        {/* {Products grid} */}
        <div className="w-full overflow-x-auto overflow-y-hidden py-2">
          {/* Outer container with horizontal scroll */}
          {/* Inner container for cards */}
          <div
            ref={scrollContainerRef}
            onWheel={handleWheel}
            className={`overflow-x-auto overflow-y-hidden whitespace-nowrap scroll-smooth touch-pan-x select-none cursor-grab`}
            
            style={{
              WebkitOverflowScrolling: "touch", // For smooth scrolling on iOS
              touchAction: "pan-x", // Ensures only horizontal scrolling
              overscrollBehaviorX: "contain",
            }}
          >
            {isGrid ? (
              <div className="flex flex-col space-y-4 space-x-4">
                {/* First row */}

                {productRows.map((rowProducts, rowIndex) => (
                  <div
                    key={`row-${rowIndex}`}
                    className="inline-flex space-x-4"
                  >
                    {rowProducts?.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        isGrid={isGrid}
                        isNew={"new"}
                        isOnSale={isOnSale}
                        handleLike={handleLike}
                        handleUnlike={handleUnlike}
                        handleAddToCart={handleAddToCart}
                        handleRemoveFromCart={handleRemoveFromCart}
                      />
                    ))}
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex space-x-4 ">
                {products?.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isGrid={isGrid}
                    isOnSale={isOnSale}
                    handleLike={handleLike}
                    handleUnlike={handleUnlike}
                    handleAddToCart={handleAddToCart}
                    handleRemoveFromCart={handleRemoveFromCart}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        {isViewButton && (
          <div className="w-full h-[50px] flex justify-center items-center  mt-10">
            {/* {TODO:Update the navigation system} */}
            <button
              className="w-[180px] h-[60px] bg-red-700 text-white rounded-md hover:scale-105 hover:bg-red-600 trasition-all duration-300 mt-10"
              onClick={() => {
                navigate("/products");
              }}
            >
              {bottomButtonText}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopProducts;
