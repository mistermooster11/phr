import Image from "next/image";
import Link from "next/link";
import { quickLinks, servicesLinks } from "@/data/nav";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Top section */}
      <div className="footer__top">
        <div className="footer__brand">
          <Link href="/">
            <Image
              src="/images/phr-logo.png"
              alt="Professional Home Remodeling Inc."
              width={143}
              height={35}
              className="footer__logo"
              style={{ height: "auto" }}
            />
          </Link>
          <p className="footer__desc">
            <strong>Professional Home Remodeling Inc.</strong> — 40+ years of kitchen remodeling,
            bathroom renovations, roofing, siding, windows, and masonry across Queens, Brooklyn,
            Nassau, Suffolk, the Bronx, and Westchester. GAF Certified. A+ BBB. Free estimates.
          </p>
          <div className="footer__socials">
            <a href="https://www.facebook.com/phr.ny" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer__social-link">
              <svg viewBox="0 0 512 512" width="20" height="20" fill="currentColor"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer__col">
          <h4 className="footer__col-title">Quick Links</h4>
          <div className="footer__divider" />
          <ul className="footer__links">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="footer__link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div className="footer__col">
          <h4 className="footer__col-title">Our Services</h4>
          <div className="footer__divider" />
          <ul className="footer__links">
            {servicesLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="footer__link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <p className="footer__copyright">Copyright 2026 Professional Home Remodeling Inc. All rights reserved.</p>
        <div className="footer__legal">
          <Link href="/privacy-policy" className="footer__legal-link">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
