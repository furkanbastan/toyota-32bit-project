import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

import * as S from "./styled";

function PaginationSection() {
  return (
    <S.PaginationSection>
      <Button
        size="sm"
        variant="outlined"
        color="neutral"
        startDecorator={<KeyboardArrowLeftIcon />}
      >
        Önceki
      </Button>

      <Box sx={{ flex: 1 }} />
      {["1", "2", "3", "…", "8", "9", "10"].map((page) => (
        <IconButton
          key={page}
          size="sm"
          variant={Number(page) ? "outlined" : "plain"}
          color="neutral"
        >
          {page}
        </IconButton>
      ))}
      <Box sx={{ flex: 1 }} />

      <Button
        size="sm"
        variant="outlined"
        color="neutral"
        endDecorator={<KeyboardArrowRightIcon />}
      >
        Sonraki
      </Button>
    </S.PaginationSection>
  );
}
export { PaginationSection };
