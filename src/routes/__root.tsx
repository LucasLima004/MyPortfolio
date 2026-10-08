import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

import appCss from "../styles.css?url";
import wolfLogo from "../assets/Logo_AS.svg";
import { Toaster } from "sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lucas Lima — Developer" },
      { name: "description", content: "Portfólio de desenvolvimento back-end e full stack." },
      { name: "author", content: "Lucas Lima" },
      { property: "og:title", content: "Lucas Lima — Developer" },
      { property: "og:description", content: "Portfólio de desenvolvimento back-end e full stack." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/MyPortfolio/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <header className="sticky inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-10">
          <Link to="/" className="flex items-center gap-3" aria-label="Lucas Lima — início">
            <img
              src={wolfLogo}
              alt="Logo de lobo de Lucas Lima"
              width={1024}
              height={1024}
              className="h-10 w-10 object-contain brightness-0 invert"
            />
            <span className="font-display text-sm font-bold uppercase tracking-[0.18em]">Lucas Lima</span>
          </Link>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
            <Link to="/sobre" className="nav-link" activeProps={{ className: "nav-link text-accent" }}>Sobre</Link>
            <Link to="/portfolio" className="nav-link" activeProps={{ className: "nav-link text-accent" }}>Portfólio</Link>
            <Link to="/skills" className="nav-link" activeProps={{ className: "nav-link text-accent" }}>Skills</Link>
            <Link to="/servicos" className="nav-link" activeProps={{ className: "nav-link text-accent" }}>Serviços</Link>
          </nav>
          <Link to="/contato" className="contact-trigger">Vamos conversar <ArrowUpRight size={15} /></Link>
        </div>
        <nav className="flex h-11 items-center justify-center gap-6 border-t border-border/60 px-4 md:hidden" aria-label="Navegação móvel">
          <Link to="/sobre" className="mobile-nav-link">Sobre</Link>
          <Link to="/portfolio" className="mobile-nav-link">Portfólio</Link>
          <Link to="/skills" className="mobile-nav-link">Skills</Link>
          <Link to="/servicos" className="mobile-nav-link">Serviços</Link>
          <Link to="/contato" className="mobile-nav-link">Contato</Link>
        </nav>
      </header>
      <Outlet />
      <footer className="border-t border-border px-5 py-8 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 font-mono text-xs text-muted-foreground md:flex-row md:justify-between"><p>© 2026 Lucas Lima</p><p>DESIGNED & ENGINEERED WITH INTENTION</p></div>
      </footer>
      <Toaster />
    </QueryClientProvider>
  );
}
