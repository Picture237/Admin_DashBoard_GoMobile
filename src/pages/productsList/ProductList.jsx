import "./productslist.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material/";
import { productrows } from "../../components/productsData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductList() {
  const [data, setData] = useState(productrows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "pictureproduct",
      headerName: "Products",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="productsnameproduct">
            <img
              className="productimage"
              src={params.row.pictureproduct}
              alt=""
            />
            {params.row.nameproduct}
          </div>
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      width: 90,
    },
    {
      field: "statuts",
      headerName: "Availibility",
      type: "number",
      width: 200,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      type: "number",
      width: 130,
    },

    {
      field: "weight",
      headerName: "Weight",
      type: "number",
      width: 100,
    },

    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div>
            <button className="productListEdit">Edit</button>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="productlist">
      <div className="productListTitleContainer">
        <h1 className="text-lg md:text-2xl">Products</h1>
        <Link to="/newproduct">
          <button className="productListAddButton">Add Products</button>
        </Link>
      </div>
      <br />
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
