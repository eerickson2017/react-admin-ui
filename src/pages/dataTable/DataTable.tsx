import "./dataTable.scss";
import { DataGrid, GridToolbar, GridColDef } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

type Props = {
  columns: GridColDef[];
  row: object[];
  slug: string;
};

const DataTable = (props: Props) => {
  const handleDelete = (id: number) => {
    //delete the item
    //axios.delete(`/api/$slug/id`)
    // app.delete("/api/user/:id", (req, res) => {
    //   users = users.filter((user) => user.id !== parseInt(req.params.id));
    //   res.json("User deleted!");
    // });
    console.log(id + "has been deleted");
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    type: "string",
    width: 60,
    editable: true,
    renderCell: (params) => {
      return (
        <div className="actionButtons">
          <div className="view">
            <Link to={`/${props.slug}/${params.row.id}`}>
              <img src="./view.svg" alt="" />
            </Link>
          </div>
          <div
            className="delete"
            onClick={() => {
              handleDelete(params.row.id);
            }}
          >
            <Link to="">
              <img src="./delete.svg" alt="" />
            </Link>
          </div>
        </div>
      );
    },
  };
  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={props.row}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[15]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        disableColumnMenu
      />
    </div>
  );
};

export default DataTable;
