import React, { useState, useEffect } from "react";
import "./OrderContent.css";

export default function OrderContent({ userId }) {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [openOrderId, setOpenOrderId] = useState(null);

  useEffect(() => {
    fetchOrders();
    fetchProducts();
  }, [userId]);

  const fetchOrders = () => {
    fetch(`http://localhost:3010/api/order/orders/${userId}`)
      .then((response) => response.json())
      .then((data) => setOrders(data.orders));
  };

  const fetchProducts = () => {
    fetch("http://localhost:3010/api/product/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };

  const toggleOrder = (orderId) => {
    if (openOrderId === orderId) {
      setOpenOrderId(null);
    } else {
      setOpenOrderId(orderId);
    }
  };

  const cancelOrder = (orderId) => {
    fetch(`http://localhost:3010/api/order/orders/${orderId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        // Refetch the orders to reflect the cancellation
        fetchOrders();
      });
  };

  if (orders.length === 0) {
    return (
      <React.Fragment>
        <p>You currently have no open orders</p>
        <button className="order-start-shopping-button">Start Shopping</button>
      </React.Fragment>
    );
  }

  return (
    <div className="ContentWrapper">
      <div className="SidebarSummary">
        <h2>Order Details</h2>
        <div className="OrderItems">
          {orders.map((order) => (
            <div className="Product-Container" key={order._id}>
              <div
                className="OrderHeader"
                onClick={() => toggleOrder(order._id)}
              >
                <div className="OrderId">Order ID: {order._id}</div>
                <div className="OrderDate">
                  Order Date: {formatDate(order.date)}
                </div>
              </div>
              {openOrderId === order._id &&
                order.products.map((product) => {
                  const item = products.find(
                    (p) => p._id === product.productId
                  );
                  return (
                    item && (
                      <div className="Product-Wrapper" key={item._id}>
                        <div className="Product-Image">
                          <img
                            className="Product-Image-Style"
                            src={item.image}
                            alt="Product"
                          />
                        </div>
                        <div className="Product-Info">
                          <div className="Product-Name">
                            <h3 className="Product-Name-Style">{item.name}</h3>
                          </div>
                          <div className="Product-Price">
                            <div className="Product-Price-Style">
                              <span>£{item.price.toFixed(2)}</span>
                              <p>Qty: {product.quantity}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  );
                })}
              <button
                className="cancel-order-button"
                onClick={() => cancelOrder(order._id)}
              >
                Cancel Order
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
