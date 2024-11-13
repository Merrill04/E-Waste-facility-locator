import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-logo">
            <Link href="/" aria-label="E-waste-locator" className="footer-home">Home</Link>
          </div>

          <div className="footer-section">
            <h6 className="footer-heading">Resources</h6>
            <ul>
              <li><Link href="#">Documentation</Link></li>
              <li><Link href="#">Tutorials & Guides</Link></li>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Support Center</Link></li>
              <li><Link href="#">Partners</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h6 className="footer-heading">Company</h6>
            <ul>
              <li><Link href="#">Home</Link></li>
              <li><Link href="#">About us</Link></li>
              <li><Link href="#">Company values</Link></li>
              <li><Link href="#">Pricing</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="footer-subscribe">
            <h6 className="footer-heading">Subscribe</h6>
            <p>Get the latest news and articles to your inbox every month.</p>
            <form>
              <div className="subscribe-container">
                <input type="email" placeholder="Your email" required />
                <button type="submit" aria-label="Subscribe">→</button>
              </div>
              <p className="subscribe-success">Thanks for subscribing!</p>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <ul className="social-links">
            <li>
              <Link href="#" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
            </li>
            <li>
              <Link href="#" aria-label="Github">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </li>
            <li>
              <Link href="#" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
            </li>
          </ul>
          <p>All rights reserved.</p>
          <div className="footer-terms">
            <Link href="#">Terms</Link> · <Link href="#">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
