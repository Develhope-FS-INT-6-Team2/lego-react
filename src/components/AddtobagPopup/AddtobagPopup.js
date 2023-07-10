import React from "react";
import "./AddtobagPopup.css";
import { Link } from "react-router-dom";

export default function AddtobagPopup({ lastAddedItem, onClose, isVisible }) {
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  return (
    <aside className={`ModalOverlay ${isVisible ? "visible" : ""}`} onClick={handleOverlayClick}>
      <div className="ModalWindow">
        <div className="ModalWindow__CloseButtonWrapper">
          <button
            className="ModalWindow__CloseButtonWrapper__StyledButton"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              aria-hidden="true"
              class="Icon__StyledSVG-lm07h6-0 dHKzVM"
            >
              <path
                d="M10.377 8.142l5.953-5.954-2.234-2.234-5.954 5.954L2.188-.046-.046 2.188l5.954 5.954-5.954 5.954 2.234 2.234 5.954-5.953 5.954 5.953 2.234-2.234z"
                fill="currentColor"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="ModalWindow__Content">
          <div className="ModalWindow__Content__Header">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="13"
              viewBox="0 0 20 13"
              aria-hidden="true"
              className="ModalWindow__Content__Header__AddedIcon"
            >
              <path
                d="M0 5.703L7.177 13 20 0h-4.476L7.177 8.442 4.476 5.723H2.238z"
                fill="currentColor"
                fill-rule="evenodd"
              ></path>
            </svg>
            <h2 className="ModalWindow__Content__Header__Title">
              Added to My Bag
            </h2>
          </div>
          <div className="ModalWindow__Content__Body">
            <div className="ModalWindow__Content__Body__ItemRow">
              <div className="ModalWindow__Content__Body__ItemRow__ImageContainer">
                <img
                  src={lastAddedItem?.image}
                  className="ModalWindow__Content__Body__ItemRow__ImageContainer__ProductImage"
                ></img>
              </div>
              <div>
                <p className="ModalWindow__Content__Body__ItemRow__ProductTitle">
                  <span className="">{lastAddedItem?.title}</span>
                </p>
                <p className="ModalWindow__Content__Body__ItemRow__ProductPrice">
                  <span className="">£{lastAddedItem?.price}</span>
                </p>
                <p className="ModalWindow__Content__Body__ItemRow__ProductQuantity">
                  Qty: {lastAddedItem?.quantity}
                </p>
              </div>
            </div>
            <div className="ModalWindow__Content__Body__ActionsContainer">
              <button
                id="continueShopping"
                className="ModalWindow__Content__Body__ActionsContainer__StyledButton"
                onClick={onClose}
              >
                Continue Shopping
              </button>

              <Link
                to="/cart"
                onClick={onClose}
                className="ModalWindow__Content__Body__ActionsContainer__StyledLink"
              >
                <a>View My Bag</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
