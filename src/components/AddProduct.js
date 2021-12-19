import { useState } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const history = useHistory();

  const saveProduct = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/products", {
      title: title,
      price: price,
    });
    history.push("/");
    alert("Success Add Product");
  };

  return (
    <div>
      <form onSubmit={saveProduct}>
        <div className="fields">
          <label className="label">Title</label>
          <input
            type="text"
            class="input"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="fields">
          <label className="label">Price</label>
          <input
            type="text"
            class="input"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="fields">
          <button className="button is-primary mt-4">Simpan</button>
          <Link to={"/"} className="button is-danger mt-4 ml-3">
            Back
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
