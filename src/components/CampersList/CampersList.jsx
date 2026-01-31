import { useEffect } from "react";
import {
	selectFilteredCampers,
	selectLoading,
} from "../../redux/campers/selectors";
import { selectAppliedFilters } from "../../redux/filters/selectors";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";
import { addVisibleCount } from "../../redux/filters/slice";
import CamperCard from "../CamperCard/CamperCard";
import { ClipLoader } from "react-spinners";
import style from "./CampersList.module.css";

export default function CampersList() {
	const dispatch = useDispatch();
	const campers = useSelector(selectFilteredCampers);
	const loading = useSelector(selectLoading);
	const { visibleCount } = useSelector(selectAppliedFilters);

	useEffect(() => {
		dispatch(fetchCampers());
	}, [dispatch]);

	const visibleCampers = campers.slice(0, visibleCount);
	const moreCampersAvailable = visibleCount < campers.length;

	return (
		<div className={style.campers__box}>
			{loading ? (
				<ClipLoader
					color="#e44848"
					size={50}
					aria-label="Loading Spinner"
					data-testid="loader"
				/>
			) : (
				<>
					<ul className={style.campers__list}>
						{visibleCampers.map((camper) => {
							return (
								<li className={style.campers__item} key={camper.id}>
									<CamperCard camper={camper} />
								</li>
							);
						})}
					</ul>
					{moreCampersAvailable && (
						<button
							type="button"
							className={style.loadMoreBtn}
							onClick={() => dispatch(addVisibleCount())}
						>
							Load more
						</button>
					)}
				</>
			)}
		</div>
	);
}
