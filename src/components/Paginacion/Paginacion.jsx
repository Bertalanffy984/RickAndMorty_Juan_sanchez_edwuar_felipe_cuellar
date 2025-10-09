import Pagination from "@mui/material/Pagination";
import { createTheme } from "@mui/material/styles";
import "./Paginacion.css";

const Paginacion = (props) => {
  const { count, page, onChange } = props;
  return (
    <div className="w-dvw mb-4">
      <Pagination
        count={count}
        page={page}
        onChange={onChange}
        id="component_paginacion"
      />
    </div>
  );
};
export default Paginacion;
