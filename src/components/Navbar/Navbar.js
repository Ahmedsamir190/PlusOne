import { FiAlignJustify } from "react-icons/fi";
import { FaWindowClose } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";

function Navbar() {
  const [toggle, settoggle] = useState(false);

  const cartnumber = useSelector((state) => state.cart.cartProduct);

  return (
    <header>
      <nav className="nav">
        <div className="container">
          <div className="navbar p-0">
            <FiAlignJustify
              className="fs-1"
              onClick={() => {
                settoggle(!toggle);
              }}
              style={{ cursor: "pointer" }}
            />

            <Link to="/" className="text-black">
              <h1>PluS One</h1>
            </Link>
            {cartnumber.length >= 1 ? (
              <Link to={"/cart"}>
                <div className="fs-3 cart text-danger   ">
                  <FaCartPlus />
                  <span>{cartnumber.length}</span>
                </div>
              </Link>
            ) : (
              <Link to={"/cart"}>
                <div className="fs-3 cart text-dark ">
                  <FaCartPlus />
                  <span>{cartnumber.length}</span>
                </div>
              </Link>
            )}
          </div>
          <div>
            {toggle && (
              <ul className={`offcanva`}>
                <li>
                  {" "}
                  <Link
                    to={"/"}
                    className="text-dark "
                    onClick={() => {
                      settoggle(!toggle);
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={"About"}
                    className="text-dark "
                    onClick={() => {
                      settoggle(!toggle);
                    }}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to={"products"}
                    className="text-dark "
                    onClick={() => {
                      settoggle(!toggle);
                    }}
                  >
                    Products
                  </Link>
                </li>
                <FaWindowClose
                  onClick={() => {
                    settoggle(!toggle);
                  }}
                  className="close-icon"
                />
              </ul>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
