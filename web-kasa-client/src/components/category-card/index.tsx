import Typography from "@mui/joy/Typography";
import { CategoryModel } from "../../models/CategoryModel";
import * as S from "./styled";

interface CategoryCardProps {
	category: CategoryModel;
}

function CategoryCard(props: CategoryCardProps) {
	return (
		<S.CategoryCard>
			<S.CategoryImage src={props.category.image} alt="category-image" />
			<Typography fontWeight="lg" fontSize="sm">
				{props.category.title}
			</Typography>
		</S.CategoryCard>
	);
}

export { CategoryCard };
