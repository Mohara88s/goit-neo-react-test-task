import { lazy, Suspense, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { selectError } from "../../redux/campers/selectors";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import style from "./App.module.css";

const Layout = lazy(() => import("../../layouts/Layout/Layout"));
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage"));
const CamperDetailsPage = lazy(
	() => import("../../pages/CamperDetailsPage/CamperDetailsPage"),
);
const Features = lazy(() => import("../Features/Features"));
const Reviews = lazy(() => import("../Reviews/Reviews"));

const NotFoundPage = lazy(
	() => import("../../pages/NotFoundPage/NotFoundPage"),
);

export default function App() {
	const error = useSelector(selectError);
	useEffect(() => {
		if (error) {
			toast.error(`Error: ${error}`);
		}
	}, [error]);
	return (
		<>
			<Suspense
				fallback={
					<div className={style.loader_box}>
						<ClipLoader
							color="#e44848"
							size={100}
							aria-label="Loading Spinner"
							data-testid="loader"
						/>
					</div>
				}
			>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<HomePage />}></Route>

						<Route path="/catalog" element={<CatalogPage />}></Route>

						<Route path="/catalog/:id" element={<CamperDetailsPage />}>
							<Route index element={<Navigate to="features" replace />} />
							<Route path="features" element={<Features />} />
							<Route path="reviews" element={<Reviews />} />
						</Route>

						<Route path="*" element={<NotFoundPage />}></Route>
					</Route>
				</Routes>
			</Suspense>
		</>
	);
}
