import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";
import { setAppliedFilters } from "../../redux/filters/slice";

import EquipmentFilter from "../EquipmentFilter/EquipmentFilter";
import LocationForm from "../LocationForm/LocationForm";
import TypeFilter from "../TypeFilter/TypeFilter";
import style from "./FiltersBox.module.css";

export default function FiltersBox() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchCampers());
	}, [dispatch]);

	const handleSearch = () => {
		dispatch(setAppliedFilters());
	};

	return (
		<div className={style.filters__box}>
			<LocationForm />
			<p className={style.filters__title}>Filters</p>
			<EquipmentFilter />
			<TypeFilter />
			<button
				type="button"
				onClick={handleSearch}
				className={style.filters__btn}
			>
				Search
			</button>
		</div>
	);
}
