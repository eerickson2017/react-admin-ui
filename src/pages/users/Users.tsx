import "./user.scss";
import DataTable from "../dataTable/DataTable.tsx";
import { GridColDef } from "@mui/x-data-grid";
import { userRows } from "../../data.ts";
import AddNewUser from "../../componets/addNewUser/AddNewUser.tsx";
import { useState } from "react";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
  },

  {
    field: "img",
    headerName: "Avatar",
    width: 90,
    renderCell: (params) => {
      return <img src={params.row.img || "./noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 120,
    editable: true,
    type: "string",
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 120,
    editable: true,
    type: "string",
  },
  {
    field: "email",
    headerName: "Email",
    type: "string",
    width: 170,
    editable: true,
  },
  {
    field: "phone",
    headerName: "Phone",
    type: "number",
    width: 100,
    editable: true,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    type: "string",
    width: 120,
    editable: true,
  },
  {
    field: "verified",
    headerName: "Verified",
    type: "boolean",
    width: 100,
    editable: true,
    renderCell: (params) => {
      return params.row.verified ? (
        <img id="verified" src="./check.png" alt="" />
      ) : (
        <img id="notVerified" src="./close.png" alt="" />
      );
    },
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      <DataTable slug="users" columns={columns} row={userRows} />
      {open && <AddNewUser slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Users;
