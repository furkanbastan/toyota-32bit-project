import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";

import { Loading } from "../../../components/loading";
import * as categoryService from "../../../services/CategoryService";
import * as S from "./styled";
import { CategoryCard } from "../../../components/category-card";

function TabSection() {
	const categoriesQuery = categoryService.getCategoriesQuery();

	return (
		<S.TabSection>
			<Tabs aria-label="Basic tabs" defaultValue={0}>
				<TabList>
					<Tab>Kategoriler</Tab>
					<Tab>Barkodsuz</Tab>
					<Tab>Favoriler</Tab>
				</TabList>
				<TabPanel value={0}>
					{categoriesQuery.isLoading && <Loading />}
					{categoriesQuery.data && categoriesQuery.data.isSuccess && (
						<S.CategoryList>
							{categoriesQuery.data.value!.map((v) => (
								<S.CategoryItem key={v.id}>
									<CategoryCard category={v} />
								</S.CategoryItem>
							))}
						</S.CategoryList>
					)}
				</TabPanel>
				<TabPanel value={1}>
					<b>Second</b> tab panel
				</TabPanel>
				<TabPanel value={2}>
					<b>Third</b> tab panel
				</TabPanel>
			</Tabs>
		</S.TabSection>
	);
}

export { TabSection };
