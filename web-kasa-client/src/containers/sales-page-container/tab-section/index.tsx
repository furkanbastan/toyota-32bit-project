import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import Chip from "@mui/joy/Chip";
import ChipDelete from "@mui/joy/ChipDelete";

import { Avatar } from "@mui/joy";
import { CategoryTab } from "./category-tab";
import {
	useSalesPageTab,
	useSalesPageTabActions,
} from "../../../contexts/SalesPageTabContext";

import * as S from "./styled";

function TabSection() {
	const tab = useSalesPageTab();
	const tabActions = useSalesPageTabActions();

	return (
		<S.TabSection>
			<Tabs aria-label="Basic tabs" defaultValue={0}>
				<TabList>
					<Tab>
						{tab.selectedCategory === null && "Kategoriler"}
						{tab.selectedCategory !== null && (
							<Chip
								color="warning"
								variant="solid"
								startDecorator={<Avatar src={tab.selectedCategory.image} />}
								endDecorator={
									<ChipDelete
										component="div"
										onClick={tabActions.clearSelectedCategory}
									/>
								}
							>
								{tab.selectedCategory.title}
							</Chip>
						)}
					</Tab>
					<Tab>Barkodsuz</Tab>
					<Tab>Favoriler</Tab>
				</TabList>
				<TabPanel value={0}>
					<CategoryTab />
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
