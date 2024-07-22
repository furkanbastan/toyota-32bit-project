import { Loading } from "../../../../components/loading";
import { CategoryCard } from "../../../../components/category-card";
import * as categoryService from "../../../../services/CategoryService";
import * as productService from "../../../../services/ProductService";
import {
	useSalesPageTab,
	useSalesPageTabActions,
} from "../../../../contexts/SalesPageTabContext";

import * as S from "./styled";
import React from "react";
import { ProductCard } from "../../../../components/product-card";

function CategoryTab() {
	const categoriesQuery = categoryService.getCategoriesQuery();
	const productMutation = productService.getProductsMutation();

	const tab = useSalesPageTab();
	const tabActions = useSalesPageTabActions();

	React.useEffect(() => {
		if (tab.selectedCategory !== null)
			productMutation.trigger(tab.selectedCategory.id.toString());
	}, [tab.selectedCategory]);

	return (
		<>
			{categoriesQuery.isLoading && <Loading />}

			{productMutation.isMutating && <Loading />}

			{categoriesQuery.data &&
				categoriesQuery.data.isSuccess &&
				tab.selectedCategory === null && (
					<S.CategoryList>
						{categoriesQuery.data.value!.map((v) => (
							<S.CategoryItem
								key={v.id}
								onClick={() => tabActions.setSelectedCategory(v)}
							>
								<CategoryCard category={v} />
							</S.CategoryItem>
						))}
					</S.CategoryList>
				)}

			{tab.selectedCategory !== null && !productMutation.isMutating && (
				<S.ProductList>
					{productMutation.data?.value?.map((v) => (
						<S.ProductItem key={v.id}>
							<ProductCard product={v} />
						</S.ProductItem>
					))}
				</S.ProductList>
			)}
		</>
	);
}

export { CategoryTab };
