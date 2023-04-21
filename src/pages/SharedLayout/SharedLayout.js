import { Outlet } from "react-router-dom"; 
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { useRef } from "react";

const SharedLayout = () => {
  const footerRef = useRef(null);

  const handleContactUsLinkClick = () => {
    // direct to contact us page in footer
    footerRef.current.scrollIntoView({ behavior: "smooth" });
    // window.scrollTo(0, 1400);
  };

  return (
    <div>
      <NavBar onContactUsLinkClick={handleContactUsLinkClick} />

      <div className="shared-style">
        <Outlet />

        <div ref={footerRef}>
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default SharedLayout;
