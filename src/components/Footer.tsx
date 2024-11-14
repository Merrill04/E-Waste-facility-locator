import Link from "next/link";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
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
          <form>
            <div className="subscribe-container">
              <input type="email" placeholder="Your email" required />
              <button type="submit" aria-label="Subscribe">Subscribe</button>
            </div>
            <p className="subscribe-success">Thanks for subscribing!</p>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <ul className="social-links">
          <li><Link href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></Link></li>
          <li><Link href="#" aria-label="Github"><i className="fab fa-github"></i></Link></li>
          <li><Link href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></Link></li>
        </ul>
        <p> All rights reserved.</p>
        <div className="footer-terms">
          <Link href="#">Terms</Link> · <Link href="#">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
