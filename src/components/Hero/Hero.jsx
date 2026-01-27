import Container from "../../components/Container/Container";
import { useNavigate } from "react-router-dom";
import style from "./Hero.module.css";

export default function Hero() {
	const navigate = useNavigate();
	return (
		<section className={style.section__hero}>
			<Container>
				<h1 className={style.slogan}>Campers of your dreams</h1>
				<p className={style.info}>
					You can find everything you want in our catalog
				</p>

				<button
					type="button"
					className={style.hero__btn}
					onClick={() => navigate("/catalog")}
				>
					View Now
				</button>
			</Container>
		</section>
	);
}
