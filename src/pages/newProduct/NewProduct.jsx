import "./newproduct.css";
import { Link } from "react-router-dom";

export default function newProduct() {
  return (
    <div className="newProduct">
      <h1 className="newProductTitle">New Product</h1>
      <form className="newProductForm">
        <div className="newProductItem">
          <label>Name</label>
          <input type="text" placeholder="product name" />
        </div>
        <div className="newProductItem">
          <label>Price</label>
          <input type="text" placeholder="price" />
        </div>

        <div className="newProductItem">
          <label>Quantity</label>
          <input type="text" placeholder="quantity" />
        </div>
        <div className="newProductItem">
          <label>Weight</label>
          <input type="text" placeholder=".kg" />
        </div>
        <div className="newProductItem">
          <label>Disponibility</label>
          <div className="newProductGender">
            <input type="radio" name="gender" id="yes" value="yes" />
            <label for="yes">Yes</label>
            <input type="radio" name="gender" id="no" value="no" />
            <label for="no">No</label>
          </div>
        </div>
        <div className="newProductItem">
          <label>Categories</label>
          <select className="newProductSelect" name="active" id="active">
            <option value="fruit">fruit</option>
            <option value="legume">legume</option>
            <option value="tubercule">tubercule</option>
          </select>
        </div>
        <div className="space-x-[20px]">
          <button className="newProductButton">Create</button>
          <Link to="/products">
            <button className="newProductButtonCancel">Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
