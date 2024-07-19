import React from "react";

import Button from "@mui/joy/Button";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";

import PaymentsIcon from "@mui/icons-material/Payments";
import PaymentIcon from "@mui/icons-material/Payment";
import CurrencyLiraIcon from "@mui/icons-material/CurrencyLira";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import UndoIcon from "@mui/icons-material/Undo";
import DoneAllIcon from "@mui/icons-material/DoneAll";

import * as S from "./styled";

function PaymentSection() {
  const [basket, setBasket] = React.useState<boolean>(true);

  return (
    <S.PaymentSection>
      <S.PaymentOptions>
        <Button
          color="primary"
          variant="soft"
          startDecorator={<CurrencyLiraIcon fontSize="small" />}
        >
          Nakit
        </Button>

        <Button
          color="primary"
          variant="soft"
          startDecorator={<PaymentIcon fontSize="small" />}
        >
          Kart
        </Button>

        <Button
          color="neutral"
          variant="soft"
          startDecorator={<PaymentsIcon fontSize="small" />}
        >
          Diğer
        </Button>
      </S.PaymentOptions>

      <S.PaymentInfo>
        <Box>
          <Typography>Nakit Ödenen:</Typography>
          <Typography>1500&nbsp;TL</Typography>
        </Box>
        <Box>
          <Typography>Kart Ödenen:</Typography>
          <Typography>1300&nbsp;TL</Typography>
        </Box>
        <Box>
          <Typography>Toplam Ödenen:</Typography>
          <Typography>1800&nbsp;TL</Typography>
        </Box>
        <Box>
          <Typography color="danger">Kalan Ödeme:</Typography>
          <Typography color="danger">0&nbsp;TL</Typography>
        </Box>
        <Box>
          <Typography color="success">Para Üstü:</Typography>
          <Typography color="success">200&nbsp;TL</Typography>
        </Box>
      </S.PaymentInfo>

      {!basket && (
        <S.PaymentActions>
          <Button
            variant="plain"
            size="lg"
            startDecorator={<UndoIcon fontSize="small" />}
            onClick={() => setBasket(true)}
          >
            Sepete Dön
          </Button>

          <Button
            color="success"
            size="lg"
            startDecorator={<DoneAllIcon fontSize="small" />}
          >
            Satışı Bitir
          </Button>
        </S.PaymentActions>
      )}

      {basket && (
        <Button
          color="warning"
          size="lg"
          startDecorator={<ShoppingBasketIcon />}
          onClick={() => setBasket(false)}
        >
          Sepeti
          <br />
          Kapat
        </Button>
      )}
    </S.PaymentSection>
  );
}

export { PaymentSection };
