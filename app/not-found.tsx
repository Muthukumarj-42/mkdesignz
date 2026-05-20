import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-padding">
      <div className="container-premium text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink md:text-6xl">
          Page not found
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-muted">
          The page you are looking for may have moved. Head back to the main portfolio experience.
        </p>
        <Link href="/" className="btn-primary mt-8">
          Back home
        </Link>
      </div>
    </section>
  );
}
