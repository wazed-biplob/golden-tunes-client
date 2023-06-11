import { useContext } from "react";
import "./Footer.css";
import { VarContext } from "../../Providers/VarsProviders";
const Footer = () => {
  const { mode } = useContext(VarContext);
  return (
    <footer data-theme={mode ? "dark" : "light"}>
      <div className="footer p-10 bg-base-200 text-base-content">
        <div>
          <img
            style={{ width: "60px", height: "60px" }}
            src="https://i.ibb.co/CpcMS4d/logo-golden-tunes.jpg"
            alt="logo"
          />

          <p>
            123 Main Street
            <br /> Any town, USA
          </p>
          <p>Phone: 42-424-242</p>
          <p>Email: info@golden-tunes.edu</p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">
                Unlock a symphony of limitless music with our exclusive
                subscription, where every beat becomes an unforgettable journey.
              </span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Email"
                className="subscribe input input-bordered w-full pr-16"
              />
              <button className="btn btn-subscribe btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © 2023 - All right reserved by Golden Tunes</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
