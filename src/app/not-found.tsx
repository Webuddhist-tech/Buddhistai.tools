import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16">
      <p className="text-sm font-medium text-[var(--muted-foreground)] mb-2">404</p>
      <h1 id="page-title" className="text-2xl font-bold tracking-tight text-[var(--foreground)] mb-2">
        Page not found
      </h1>
      <p className="text-[var(--muted-foreground)] text-center max-w-sm mb-8">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center px-4 py-2.5 text-sm font-medium rounded-xl bg-brand-gradient text-white shadow-brand-glow hover:brightness-110 transition"
      >
        Back to home
      </Link>
    </div>
  );
};

export default NotFoundPage;
