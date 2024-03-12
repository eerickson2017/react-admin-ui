import "./products.scss";
import { useState } from "react";
import DataTable from "../dataTable/DataTable";
import AddNewUser from "../../componets/addNewUser/AddNewUser";
import { products } from "../../data";
import { GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 90,
  },

  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "./noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    headerName: " Title",
    width: 100,
    type: "string",
  },
  {
    field: "color",
    headerName: "Color",
    type: "string",
    width: 150,
  },
  {
    field: "price",
    headerName: "Price",
    type: "number",
    width: 200,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    type: "string",
    width: 200,
  },
  {
    field: "inStock",
    headerName: "In Stock",
    type: "boolean",
    width: 150,
  },
];

const Products = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={() => setOpen(true)}>Add New Product</button>
      </div>
      <DataTable slug="Products" columns={columns} row={products} />
      {open && (
        <AddNewUser slug="Products" columns={columns} setOpen={setOpen} />
      )}
    </div>
  );
};

export default Products;
