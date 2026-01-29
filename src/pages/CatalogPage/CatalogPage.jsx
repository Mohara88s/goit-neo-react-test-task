import Container from "../../components/Container/Container";
import FiltersBox from "../../components/FiltersBox/FiltersBox";
import CampersList from "../../components/CampersList/CampersList";

import style from "./CatalogPage.module.css";

export default function CatalogPage() {
	return (
		<section className={style.catalog__section}>
			<Container>
				<div className={style.catalog__box}>
					<FiltersBox />
					<CampersList />
				</div>
			</Container>
		</section>
	);
}
