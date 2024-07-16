import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";

import { ROWS } from "./constants";
import { ProductTableRowMenu } from "../product-table-row-menu";
import * as S from "./styled";

function ProductTable() {
  return (
    <S.ProductTable variant="outlined">
      <Table stickyHeader hoverRow>
        <thead>
          <tr>
            <th>Id</th>
            <th>Date</th>
            <th>Status</th>
            <th>Customer</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((v, i) => (
            <tr key={i}>
              <td>
                <Typography level="body-xs">{v.id}</Typography>
              </td>
              <td>
                <Typography level="body-xs">{v.date}</Typography>
              </td>
              <td>
                <Typography level="body-xs">{v.status}</Typography>
              </td>
              <td>
                <Typography level="body-xs">{v.customer.name}</Typography>
              </td>
              <td>
                <ProductTableRowMenu />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </S.ProductTable>
  );
}

export { ProductTable };
