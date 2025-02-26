export function Footer() {
  return (
    <footer className="flex flex-col bg-base-300 text-base-content rounded p-5 items-center gap-2">
      <nav className="flex flex-row gap-3">
        <a className="link link-hover" href="/">
          Home
        </a>
        <a className="link link-hover" href="/about">
          About
        </a>
        <a className="link link-hover" href="/books">
          Discover Books
        </a>
      </nav>

      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All rights reserved by
          Bookstore Industries Ltd
        </p>
      </aside>
    </footer>
  );
}
