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
            path: "/MyPortfolio",  // Caminho base
            element: <App />,
            children: [
                {
                    path: "",  // Rota base, renderiza Home
                    element: (
                        <ErrorBoundary>
                            <Home />
                        </ErrorBoundary>
                    ),
                },
                {
                    path: "skills",  // Caminho relativo para Skills
                    element: (
                        <ErrorBoundary>
                            <Skills />
                        </ErrorBoundary>
                    ),
                },
                {
                    path: "about",  // Caminho relativo para About
                    element: (
                        <ErrorBoundary>
                            <About />
                        </ErrorBoundary>
                    ),
                },
                {
                    path: "contact",  // Caminho relativo para Contact
                    element: (
                        <ErrorBoundary>
                            <Contact />
                        </ErrorBoundary>
                    ),
                },
                {
                    path: "portfolio",  // Caminho relativo para Portfolio
                    element: (
                        <ErrorBoundary>
                            <Portfolio />
                        </ErrorBoundary>
                    ),
                },
                {
                    path: "*",  // Redireciona para "/MyPortfolio" caso não tenha rota
                    element: <Navigate to="/MyPortfolio" />,
                },
            ],
        },
    ]);
}
