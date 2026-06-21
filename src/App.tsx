import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomeScreen } from "./screens/Home/HomeScreen";
import { AnnualReportScreen } from "./screens/AnnualReport/AnnualReportScreen";
import { UdyamCertificateScreen } from "./screens/UdyamCertificate/UdyamCertificateScreen";
import { ReportImagesScreen } from "./screens/ReportImages/ReportImagesScreen";

const ScrollToTop: React.FC = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		// If navigating to home with a scroll instruction in state, let Header's scroll handler do the work.
		// Otherwise, scroll to the top of the page.
		const state = window.history.state;
		if (pathname === "/" && state && state.usr && state.usr.scrollTo) {
			return;
		}
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
};

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<div className="flex flex-col min-h-screen bg-cream font-sans">
				<Header />
				<main className="flex-grow">
					<Routes>
						<Route path="/" element={<HomeScreen />} />
						<Route path="/annual-report" element={<AnnualReportScreen />} />
						<Route path="/report-images" element={<ReportImagesScreen />} />
						<Route path="/udyam-certificate" element={<UdyamCertificateScreen />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default App;