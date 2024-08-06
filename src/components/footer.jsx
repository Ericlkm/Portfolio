import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer id="footer">
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
              <h4 className="social lilita-one-regular ">
                Socials <i className="fas fa-arrow-turn-down"></i>
              </h4>
              <a
                href="http://github.com/ericlkm"
                target="_blank"
                className="fab fa-github"
              ></a>
              <a
                href="https://www.linkedin.com/in/eric-lkm-72849331b/"
                target="_blank"
                className="fab fa-linkedin"
              ></a>
              <a href="#" className="fab fa-instagram"></a>
              <a
                href="mailto:gtprinceeric.el1@gmail.com"
                target="_blank"
                className="fas fa-mail-bulk"
              ></a>
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
