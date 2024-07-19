import React from "react";

import FlipRoundedIcon from "@mui/icons-material/FlipRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import DialpadIcon from "@mui/icons-material/Dialpad";

import Input from "@mui/joy/Input";
import IconButton from "@mui/joy/IconButton";
import Box from "@mui/joy/Box";
import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";
import Divider from "@mui/joy/Divider";

import * as S from "./styled";

function LeftSection() {
  const [code, setCode] = React.useState<string>("");

  function handleChangeCode(e: React.ChangeEvent<HTMLInputElement>) {
    setCode(e.target.value);
  }

  return (
    <S.LeftSection>
      <S.Header>
        <Input
          color="success"
          variant="soft"
          size="lg"
          placeholder="Klavyeden barkod girişi..."
          value={code}
          onChange={handleChangeCode}
          startDecorator={<FlipRoundedIcon />}
          endDecorator={
            <IconButton color="success" variant="solid">
              <CheckRoundedIcon />
            </IconButton>
          }
        />
        <IconButton color="neutral" variant="soft">
          <DialpadIcon />
        </IconButton>
      </S.Header>

      <S.Body>
        <Table
          borderAxis="none"
          color="neutral"
          size="md"
          stickyHeader
          hoverRow
          variant="plain"
        >
          <thead>
            <tr>
              <th>Barkod/Kod</th>
              <th>Ürün Adı</th>
              <th>KDV(%)</th>
              <th>Adet/Gram</th>
              <th>Fiyat(TL)</th>
              <th>Toplam(TL)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1012145478</td>
              <td>Ülker Çikolatalı Gofret</td>
              <td>8</td>
              <td>2 AD</td>
              <td>1250.00 TL</td>
              <td>2500.00 TL</td>
            </tr>
          </tbody>
        </Table>
      </S.Body>

      <S.Footer>
        <Box>
          <Typography>Ara Toplam:</Typography>
          <Typography>1250&nbsp;TL</Typography>
        </Box>

        <Divider />

        <Box>
          <Typography>Toplam Fiyat:</Typography>
          <Typography>1150&nbsp;TL</Typography>
        </Box>
      </S.Footer>
    </S.LeftSection>
  );
}

export { LeftSection };
