import { GridColDef } from "@mui/x-data-grid";
import Add from "../../components/add/Add";
import DataTable from "../../components/dataTable/DataTable";
import "./products.scss";
import { products } from "../../data";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },

  {
    field: "image",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img} alt="" />;
    },
  },

  {
    field: "title",
    headerName: "Title",
    type: "string",
    width: 250,
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
    type: "string",
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
    width: 200,
  },

  {
    field: "inStock",
    headerName: "In Stock",
    width: 150,
    type: "boolean",
  },
];

const Products = () => {
  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={() => setOpen(true)}>Add New Products</button>
      </div>
      <DataTable slug="products" columns={columns} rows={products} />
      {open && <Add slug="product" columns={columns} rows={products} />}
    </div>
  );
};

export default Products;
