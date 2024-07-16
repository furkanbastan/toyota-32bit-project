import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import UndoIcon from "@mui/icons-material/Undo";
import CalculateIcon from "@mui/icons-material/Calculate";
import AssessmentIcon from "@mui/icons-material/Assessment";
import LayersIcon from "@mui/icons-material/Layers";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import CategoryIcon from "@mui/icons-material/Category";

export const MENU_ITEMS = [
  {
    href: "/",
    name: "Ürünler",
    icon: <CategoryIcon />,
  },
  {
    href: "/sales",
    name: "Satış",
    icon: <ShoppingCartIcon />,
  },
  {
    href: "/see-price",
    name: "Fiyat Gör",
    icon: <LocalOfferIcon />,
  },
  {
    href: "/iade",
    name: "İade İşlemi",
    icon: <UndoIcon />,
  },
  {
    href: "/tahsilatlar",
    name: "Tahsilatlar",
    icon: <CalculateIcon />,
  },
  {
    href: "/reports",
    name: "Raporlar",
    icon: <AssessmentIcon />,
  },
  {
    href: "/other",
    name: "Diğer İşlemler",
    icon: <LayersIcon />,
  },
  {
    href: "/ürün-gir",
    name: "Direkt Ürün Girişi",
    icon: <StoreMallDirectoryIcon />,
  },
  {
    href: "/www",
    name: "www",
    icon: <InsertLinkIcon />,
  },
];
