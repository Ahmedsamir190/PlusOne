import { useEffect, useState } from "react";
import Aside from "../../components/Aside/Aside";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { productfetch } from "../../RTK/Slice/Product-Slice";
import Paginationn from "../../components/pagination/Pagination";
import ProductComponent from "../../components/productComponent/ProductComponent";
import { FaArrowUp } from "react-icons/fa";
import emptygray from "../../components/images/emptygray.jpg";

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [placeholder, setPlaceholer] = useState(true);
  const [currentpage, setCurrentpage] = useState(1);
  const [productsperpage, setProductsperpage] = useState(35);
  const [showbutton, setShowbutton] = useState(false);

  const indexoflastproduct = currentpage * productsperpage;
  const indexoffirstproduct = indexoflastproduct - productsperpage;

  const currentproduct = products.slice(
    indexoffirstproduct,
    indexoflastproduct
  );

  setTimeout(() => {
    setPlaceholer(false);
  }, 3000);

  const api = "https://api.escuelajs.co/api/v1";

  const Get_all_products = () => {
    fetch(`${api}/products`)
      .then((data) => data.json())
      .then((data) => {
        setProducts(data);
      });
  };

  const Get_categories = () => {
    axios.get(`${api}/categories`).then((data) => {
      setCategories(data.data);
    });
  };

  const Get_specific_Category = (catagoryId) => {
    fetch(`${api}/products/?categoryId=${catagoryId}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
    // axios.get(`${api}/products/?categoryId=${catagoryId}`).then((data) => {
    //   setProducts(data.data);
    // });
  };

  useEffect(() => {
    Get_all_products();
    Get_categories();
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 1000) {
        setShowbutton(true);
      } else {
        setShowbutton(false);
      }
    });
  }, []);

  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section>
      <div className="filter-with-products">
        <div className="container">
          <div className="aside-col">
            <aside>
              <Aside
                categories={categories}
                category={Get_specific_Category}
                allproducts={Get_all_products}
                setProducts={setProducts}
              />
            </aside>
            <div className="card-products position-relative ">
              {currentproduct.map((product) => {
                return (
                  <div key={product.id}>
                    {currentproduct.length === 0 || placeholder ? (
                      <div
                        className="card"
                        aria-hidden="true"
                        style={{ width: "18rem" }}
                      >
                        <img
                          src={emptygray}
                          className="card-img-top img-fluid"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title placeholder-glow">
                            <span className="placeholder col-6"></span>
                          </h5>
                          <p className="card-text placeholder-glow">
                            <span className="placeholder col-7"></span>
                            <span className="placeholder col-4"></span>
                            <span className="placeholder col-4"></span>
                            <span className="placeholder col-6"></span>
                            <span className="placeholder col-8"></span>
                          </p>
                        </div>
                      </div>
                    ) : (
                      <ProductComponent product={product} />
                    )}
                  </div>
                );
              })}

              <Paginationn
                productsperpage={productsperpage}
                totalproduct={products.length}
                setCurrentpage={setCurrentpage}
              />
              {showbutton && (
                <button
                  className="up-button"
                  onClick={() => {
                    scroll();
                  }}
                >
                  up <FaArrowUp />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
