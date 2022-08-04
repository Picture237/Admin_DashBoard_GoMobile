import "./categories.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material/";
import { categorierows } from "../../components/productsData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Categories() {
  const [data, setData] = useState(categorierows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "picturecategorie",
      headerName: "Picture",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="categoriesnamecategorie">
            <img
              className="categorieimage"
              src={params.row.picturecategorie}
              alt=""
            />
            {params.row.namecategorie}
          </div>
        );
      },
    },
    {
      field: "name",
      headerName: "Name",
      type: "number",
      width: 150,
    },
    {
      field: "description",
      headerName: "Description",
      type: "number",
      width: 250,
    },

    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div>
            <DeleteOutline
              className="categorieListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="categorielist">
      <div className="categorieListTitleContainer">
        <h1 className="text-lg md:text-2xl">categories</h1>
        <Link to="/newcategorie">
          <button className="categorieListAddButton">Add category</button>
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
