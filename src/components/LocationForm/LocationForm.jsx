import { useId } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeLocation } from "../../redux/filters/slice";
import { selectLocation } from "../../redux/filters/selectors";
import icons from "../../assets/icons/sprite.svg";
import clsx from "clsx";
import styles from "./LocationForm.module.css";

export default function LocationForm() {
	const dispatch = useDispatch();
	const location = useSelector(selectLocation);
	const locationFieldId = useId();

	const handleLocationChange = (evt) => {
		dispatch(changeLocation(evt.target.value));
	};

	const isLocation = location && location.trim().length > 0;

	return (
		<form className={styles.location_form} autoComplete="off">
			<label htmlFor={locationFieldId} className={styles.location_label}>
				Location
			</label>
			<input
				type="text"
				name="location"
				placeholder="City"
				id={locationFieldId}
				onChange={handleLocationChange}
				value={location}
				className={styles.location_input}
			/>
			<svg
				className={clsx(styles.svg__icon, isLocation && styles.active_icon)}
				width="20"
				height="20"
			>
				<use href={`${icons}#map-black`} />
			</svg>
		</form>
	);
}
