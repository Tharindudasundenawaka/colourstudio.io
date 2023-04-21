import pic from "../../pics/outside.jpg";
import pic2 from "../../pics/inside.jpg";
import "./about.css";

const About = () => {
  console.log(process.env);
  return (
    <div>
      <h1 className="about-header">About Page</h1>
      <img src={pic} alt="badge" className="about_imgs" />

      <article>
        Welcome to Colour Studio, the premier paint shop for all your decorating
        needs. We offer a vast selection of high-quality paints in a variety of
        colors, finishes, and sheens to help you bring your vision to life.
        Whether you're painting a single room or your entire home, our
        knowledgeable staff will help you find the perfect paint for your
        project. From classic whites and neutrals to bold, statement-making
        hues, you're sure to find the color that speaks to you at Color Studio.
        With our commitment to quality and customer satisfaction, you can trust
        that every can of paint you purchase from us will be of the highest
        standard. Browse our online selection or visit us in-store today to see
        what Color Studio can do for you!
      </article>

      <img src={pic2} alt="badge" className="about_imgs" />
    </div>
  );
};
export default About;
