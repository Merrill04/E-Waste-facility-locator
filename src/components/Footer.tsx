// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-media">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook fa-2x"></i>
            <span>Facebook</span>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram fa-2x"></i>
            <span>Instagram</span>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter fa-2x"></i>
            <span>Twitter</span>
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube fa-2x"></i>
            <span>YouTube</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
