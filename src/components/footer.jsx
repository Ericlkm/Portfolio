import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <div class="footer-container">
          <div class="footer-top">
            <div class="footer-logo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9i3AjWDb4noRd5J1mb9A2XW-tjedaDS-msA&s"
                alt="Logo"
                className="fa-spin"
              />
            </div>
            <div class="footer-social">
              <a href="#" className="fab fa-facebook"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-linkedin"></a>
            </div>
          </div>
          <div class="footer-middle">
            <div class="footer-column">
              <h3>About Us</h3>
              <ul>
                <li>
                  <a href="#">Our Story</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                </li>
                <li>
                  <a href="#">Our Mission</a>
                </li>
              </ul>
            </div>

            <div class="footer-column">
              <h3>Get in Touch</h3>
              <ul>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
            <p>
              created by Eric <i className="fas fa-code fa-bounce"></i>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
