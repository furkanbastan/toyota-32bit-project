import Typography from "@mui/joy/Typography";
import { ProductModel } from "../../models/ProductModel";
import * as S from "./styled";

interface ProductCardProps {
	product: ProductModel;
}

function ProductCard(props: ProductCardProps) {
	const { product } = props;

	return (
		<S.ProductCard>
			<S.ImageWrapper>
				<S.ProductImage src={product.image} />
				<Typography fontSize="sm">{product.alt}</Typography>
			</S.ImageWrapper>

			<S.TitleWrapper>
				<Typography color="warning" fontWeight="lg">
					{product.title}
				</Typography>
				<Typography fontWeight="lg">{product.price}&nbsp;TL</Typography>
			</S.TitleWrapper>
		</S.ProductCard>
	);
}

export { ProductCard };
