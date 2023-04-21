import React from "react";
import {
  FacebookFilled,
  HomeFilled,
  PhoneFilled,
  MailFilled,
} from "@ant-design/icons";
import badge from "../../pics/logo-no-background.png";
import "./footer.css";

function phonecall() {
  window.location.href = "tel:077 243 4484";
}

const Footer = () => {
  return (
    <footer className="footer">
      <h4 className="contact-header">Contact Us</h4>

      <div className="footer_c">
        <div className="footer-contact">
          <p className="contactdetails">
            <HomeFilled className="footer-icons" /> No: 4/2, Avissawella Road,
            <p className="p_address">Hewagama, Kaduwela</p>
          </p>

          <p className="contactdetails">
            <div className="contact_one">
              <PhoneFilled className="footer-icons" />
              <p className="p_hot" onClick={phonecall}>
                077 131 0079
              </p>
            </div>
            <p className="p_hotline" onClick={phonecall}>
              077 243 4484
            </p>
          </p>
          <p className="contactdetails">
            <a
              href="https://www.facebook.com/thecolourstudio.plus/"
              target="_blank"
              rel="noopener noreferrer"
              className="fb"
            >
              <FacebookFilled className="footer-icons" /> Thecolourstudio Plus
            </a>
          </p>
          <p className="contactdetails">
            <MailFilled className="footer-icons" /> thecolourstudio11@gmail.com
          </p>
        </div>
        <div className="footer-contact">
          <div className="img-footer">
            <img src={badge} alt="badge" className="footer_img" />
          </div>
        </div>
      </div>
      <h5 className="open_hr">
        (Business Hours: 9:00 am - 6:00 pm - all 7 days)
      </h5>
      <div className="auth">
        <h6>
          DESIGN AND DEVELOPED BY:{" "}
          <span className="authmail">tharindudasun1997@gmail.com</span>
        </h6>
      </div>
    </footer>
  );
};

export default Footer;

//
