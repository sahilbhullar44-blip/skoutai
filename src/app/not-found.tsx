import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6 py-12 text-center">
      <div>
        <h1 className="text-7xl font-bold">404</h1>
        <p className="mt-4 text-xl font-semibold text-foreground">Page not found</p>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
