import React from "react";
import { FiPackage, FiCheckCircle, FiTruck, FiClock } from "react-icons/fi";
import { FcCancel } from "react-icons/fc";
import { PiKeyReturnDuotone } from "react-icons/pi";
import { Link } from "react-router";
const Orders = () => {
  // Sample orders data
  const orders = [
    {
      id: "#ORD-2023-001",
      date: "2023-05-15",
      status: "Delivered",
      items: [
        {
          id: 1,
          name: "Wireless Headphones",
          price: 99.99,
          quantity: 1,
          image:
            "https://m.media-amazon.com/images/I/61vihvwHdBL._AC_SY200_.jpg",
        },
        {
          id: 2,
          name: "Phone Case",
          price: 19.99,
          quantity: 2,
          image:
            "https://m.media-amazon.com/images/I/61vihvwHdBL._AC_SY200_.jpg",
        },
      ],
      total: 139.97,
      tracking: "UPS-123456789",
      deliveryDate: "2023-05-20",
    },
    {
      id: "#ORD-2023-002",
      date: "2023-06-10",
      status: "Shipped",
      items: [
        {
          id: 3,
          name: "Smart Watch",
          price: 199.99,
          quantity: 1,
          image:
            "https://m.media-amazon.com/images/I/61vihvwHdBL._AC_SY200_.jpg",
        },
      ],
      total: 199.99,
      tracking: "FEDEX-987654321",
      deliveryDate: "2023-06-18",
    },
    {
      id: "#ORD-2023-003",
      date: "2023-07-05",
      status: "Processing",
      items: [
        {
          id: 4,
          name: "Running Shoes",
          price: 89.99,
          quantity: 1,
          image:
            "https://m.media-amazon.com/images/I/61vihvwHdBL._AC_SY200_.jpg",
        },
        {
          id: 5,
          name: "Sports Socks",
          price: 12.99,
          quantity: 3,
          image:
            "https://m.media-amazon.com/images/I/61vihvwHdBL._AC_SY200_.jpg",
        },
      ],
      total: 128.96,
      tracking: null,
      deliveryDate: null,
    },
    {
      id: "#ORD-2023-003",
      date: "2023-07-05",
      status: "Cancelled",
      items: [
        {
          id: 4,
          name: "Running Shoes",
          price: 89.99,
          quantity: 1,
          image:
            "https://m.media-amazon.com/images/I/61vihvwHdBL._AC_SY200_.jpg",
        },
        {
          id: 5,
          name: "Sports Socks",
          price: 12.99,
          quantity: 3,
          image:
            "https://m.media-amazon.com/images/I/61vihvwHdBL._AC_SY200_.jpg",
        },
      ],
      total: 128.96,
      tracking: null,
      deliveryDate: null,
    },

    {
      id: "#ORD-2023-003",
      date: "2023-07-05",
      status: "Returned",
      items: [
        {
          id: 4,
          name: "Running Shoes",
          price: 89.99,
          quantity: 1,
          image:
            "https://m.media-amazon.com/images/I/61vihvwHdBL._AC_SY200_.jpg",
        },
        {
          id: 5,
          name: "Sports Socks",
          price: 12.99,
          quantity: 3,
          image:
            "https://m.media-amazon.com/images/I/61vihvwHdBL._AC_SY200_.jpg",
        },
      ],
      total: 128.96,
      tracking: null,
      deliveryDate: null,
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "Delivered":
        return <FiCheckCircle className="text-green-500" />;
      case "Shipped":
        return <FiTruck className="text-blue-500" />;
      case "Processing":
        return <FiClock className="text-yellow-500" />;
      case "Cancelled":
        return <FcCancel className="text-red-500" />;
      case "Returned":
        return <PiKeyReturnDuotone className="text-gray-500" />;
      default:
        return <FiPackage className="text-gray-500" />;
    }
  };

  return (
    <div className="w-full h-full overflow-auto flex justify-center items-start pt-8 pb-20">
      <div className="w-full max-w-6xl px-4">
        <h1 className="text-2xl font-bold mb-6">My Orders</h1>

        {orders.length === 0 ? (
          <div className="text-center py-12">
            <FiPackage className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-lg font-medium text-gray-700">
              No orders found
            </h3>
            <p className="mt-1 text-gray-500">
              You haven't placed any orders yet.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div key={order.id} className="border rounded-lg overflow-hidden">
                {/* Order header */}
                <div className="bg-gray-50 px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between border-b">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      {getStatusIcon(order.status)}
                      <span className="ml-2 font-medium">{order.status}</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      Order #{order.id}
                    </div>
                    <div className="text-sm text-gray-500">
                      Placed on {order.date}
                    </div>
                  </div>
                  <div className="mt-2 sm:mt-0 text-sm font-medium">
                    Total: ₹{order.total.toFixed(2)}
                  </div>
                </div>

                {/* Order items */}
                <div className="divide-y">
                  {order.items.map((item) => (
                    <div key={item.id} className="p-4 flex">
                      <div className="flex-shrink-0 h-20 w-20 bg-gray-200 rounded-md overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="ml-4 flex-1">
                        <h3 className="text-base font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-500">
                          Qty: {item.quantity}
                        </p>
                        <p className="text-sm font-medium">
                          ₹{item.price.toFixed(2)}
                        </p>
                      </div>
                      <div className="ml-4">
                        <Link to={`/product/${item.id}`}>
                          <button className="text-sm font-medium text-red-600 hover:text-red-500">
                            Buy Again
                          </button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order footer */}
                <div className="bg-gray-50 px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    {order.tracking && (
                      <p className="text-sm">
                        <span className="text-gray-500">Tracking number:</span>{" "}
                        <span className="font-medium">{order.tracking}</span>
                      </p>
                    )}
                    {order.deliveryDate && (
                      <p className="text-sm mt-1 sm:mt-0">
                        <span className="text-gray-500">
                          Estimated delivery:
                        </span>{" "}
                        <span className="font-medium">
                          {order.deliveryDate}
                        </span>
                      </p>
                    )}
                  </div>
                  <div className="mt-2 sm:mt-0 space-x-4">
                    <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50">
                      View Details
                    </button>
                    <button className="px-3 py-1 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700">
                      Track Package
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
