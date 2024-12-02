import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/home";
import App from "../components/app/App";
import ErrorBoundary from "../utils/ErrorBoundary";
import Skills from "../pages/skills";
import About from "../pages/about";
import Contact from "../pages/contact";
import Portfolio from "../pages/portfolio";

export default function routering() {
    return createBrowserRouter([
        {
            path: "/MyPortfolio",
            element: <App />,
            children: [
                {
                    path: "",
                    element: (
                        <ErrorBoundary>
                            <Home />
                        </ErrorBoundary>
                    ),
                },
                {
                    path: "skills",
                    element: (
                        <ErrorBoundary>
                            <Skills />
                        </ErrorBoundary>
                    ),
                },
                {
                    path: "about",
                    element: (
                        <ErrorBoundary>
                            <About />
                        </ErrorBoundary>
                    ),
                },
                {
                    path: "contact",
                    element: (
                        <ErrorBoundary>
                            <Contact />
                        </ErrorBoundary>
                    ),
                },
                {
                    path: "portfolio",
                    element: (
                        <ErrorBoundary>
                            <Portfolio />
                        </ErrorBoundary>
                    ),
                },
                {
                    path: "*",
                    element: <Navigate to="/MyPortfolio" />,
                },
            ],
        },
    ]);
}
