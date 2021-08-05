/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export default function SideBar() {
  return (
    <aside className="sidebar">
      <div className="header d-flex justify-between items-center">
        <a href="/" className="logo">
          <img src="/logo.svg" alt="logo" />
          Term<span>Monitor</span>
        </a>
      </div>
      <div className="main">
        <nav>
          <Link href="/">
            <a className="nav-link active">
              <i className="fas fa-home" aria-hidden="true"></i>
              Add Keywords
            </a>
          </Link>
          <Link href="/page">
            <a className="nav-link">
              <i className="fa fa-users" aria-hidden="true"></i>
              Manage sources
            </a>
          </Link>
          <Link href="/page">
            <a className="nav-link">
              <i className="fa fa-credit-card" aria-hidden="true"></i>
              Integration
            </a>
          </Link>
          <Link href="/page">
            <a className="nav-link">
              <i className="fa fa-credit-card" aria-hidden="true"></i>
              Alerts
            </a>
          </Link>
          <div className="dropdown">
            <a className="dropdown-btn">
              <i className="fa fa-star" aria-hidden="true"></i> Settings
            </a>
            <ul className="links-list">
              <li className="nav-item">
                <Link href="/page">
                  <a className="nav-link">Billings</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
}
