import "./usersList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material/";
import { usersrows } from "../../components/productsData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {
  const [data, setData] = useState(usersrows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "pictureuser",
      headerName: "User Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.pictureuser} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email address", width: 200 },

    {
      field: "address",
      headerName: "Address",
      width: 200,
    },
    {
      field: "country",
      headerName: "Country",
      width: 100,
    },
    {
      field: "city",
      headerName: "City",
      width: 100,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/users/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <div className="productListTitleContainer">
        <h1 className="text-lg md:text-2xl">Users</h1>
        <Link to="/newUser">
          <button className="productListAddButton">Add User</button>
        </Link>
      </div>
      <br />
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
