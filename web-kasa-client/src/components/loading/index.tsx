import CircularProgress from "@mui/joy/CircularProgress";
import * as S from "./styled";

function Loading() {
	return (
		<S.Loading>
			<CircularProgress color="neutral" variant="plain" />
		</S.Loading>
	);
}

export { Loading };
