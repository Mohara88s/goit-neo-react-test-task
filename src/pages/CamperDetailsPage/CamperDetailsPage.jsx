import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchCamper } from "../../redux/campers/operations";
import CamperDetails from "../../components/CamperDetails/CamperDetails";
import { selectCurrentCamper } from "../../redux/campers/selectors";
import { useSelector } from "react-redux";
import Container from "../../components/Container/Container";
import style from "./CamperDetailsPage.module.css";

export default function CamperDetailsPage() {
	const camper = useSelector(selectCurrentCamper);

	const dispatch = useDispatch();
	const { id } = useParams();

	useEffect(() => {
		dispatch(fetchCamper(id));
	}, [dispatch, id]);

	return (
		<section className={style.section}>
			<Container>{camper && <CamperDetails camper={camper} />}</Container>
		</section>
	);
}
