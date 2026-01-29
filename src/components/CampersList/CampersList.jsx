import { useState } from "react";
import {
	selectFilteredCampers,
	selectError,
	selectLoading,
} from "../../redux/campers/selectors";
import { useSelector } from "react-redux";

import CamperCard from "../CamperCard/CamperCard";
import style from "./CampersList.module.css";

export default function CampersList() {
	const [visibleCount, setVisibleCount] = useState(4);

	const campers = useSelector(selectFilteredCampers);
	const loading = useSelector(selectLoading);
	const errors = useSelector(selectError);
	console.log(campers);
	const handleLoadMore = () => {
		setVisibleCount((prevCount) => prevCount + 4);
	};

	const visibleCampers = campers.slice(0, visibleCount);
	const moreAvailable = visibleCount < campers.length;

	return (
		<div className={style.campers__box}>
			<ul className={style.campers__list}>
				{visibleCampers.map((camper) => {
					return (
						<li className={style.campers__item} key={camper.id}>
							<CamperCard camper={camper} />
						</li>
					);
				})}
			</ul>
			{moreAvailable && (
				<button
					type="button"
					className={style.loadMoreBtn}
					onClick={handleLoadMore}
				>
					Load more
				</button>
			)}
		</div>
	);
}
