import {
	selectFilteredCampers,
	selectError,
	selectLoading,
} from "../../redux/campers/selectors";
import { useSelector } from "react-redux";

import CamperItem from "../CamperItem/CamperItem";
import style from "./CampersList.module.css";

export default function CampersList() {
	const campers = useSelector(selectFilteredCampers);
	const loading = useSelector(selectLoading);
	const errors = useSelector(selectError);

	return (
		<ul className={style.campers_list}>
			{campers.map((camper) => {
				return (
					<li className={style.campers_list_item} key={camper.id}>
						<CamperItem camper={camper} />
					</li>
				);
			})}
		</ul>
	);
}
