import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ClipLoader } from "react-spinners";

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
	return (
		<>
			<Suspense
				fallback={
					<ClipLoader
						color="#e44848"
						size={50}
						aria-label="Loading Spinner"
						data-testid="loader"
					/>
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
