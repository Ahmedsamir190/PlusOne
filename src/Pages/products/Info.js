import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowCircleRight, FaCartArrowDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchproduct, addtocart } from "../../RTK/Slice/cartSlice";

import { ToastContainer, toast } from "react-toastify";
import Spinner from "../../components/spinner/Spinner";

function Info() {
  const prams = useParams();
  const [productid, setproductid] = useState([]);
  const [spinner, setSpinner] = useState(true);

  const url = `https://api.escuelajs.co/api/v1/products/${prams.ProductID}`;

  setTimeout(() => {
    setSpinner(false);
  }, 2000);

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(url).then((data) => {
      setproductid(data.data);
    });
  }, []);

  const showToastMessage = () => {
    toast.success(`${productid.title} Added To Cart`, {
      position: toast.POSITION.TOP_LEFT,
    });
  };

  return (
    <div className="product-id">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center flex-column  flex-md-row pb-5">
          <h1 className="text-center">Prodcut-Number: {prams.ProductID}</h1>
          <Link to={"/products"} className="fs-3">
            {" "}
            <FaArrowCircleRight /> Back
          </Link>
        </div>
        <div>
          <div className="card-product-id position-relative">
            {spinner ? (
              <Spinner />
            ) : (
              <>
                <img
                  src={productid.images}
                  className="img-product-id"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{productid.title}</h5>
                  <p className="card-text">{productid.description}</p>
                </div>
                <div className="card-pay">
                  <p>
                    FREE Returns <br />
                    FREE delivery
                    <br />
                    Deliver to Egypt
                    <br />
                    Only 3 left in stock - order soon.
                  </p>

                  <div className="d-flex flex-column gap-4">
                    <span className="bg-black text-white text-center rounded">
                      {productid.price} $
                    </span>

                    <button
                      className="p-3 btn btn-primary"
                      onClick={() => {
                        dispatch(addtocart(productid));
                        showToastMessage();
                      }}
                    >
                      Add to Cart <FaCartArrowDown className="cart-icon" />
                      <ToastContainer />
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Info;
