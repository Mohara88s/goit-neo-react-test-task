import style from "./CamperItem.module.css";

export default function CamperItem({ camper }) {
	return (
		<>
			<p>{camper.id}</p>
			<p>{camper.location}</p>
		</>
	);
}
