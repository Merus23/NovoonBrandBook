import { log } from "console";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import logo_logo from "/public/assets/logo_logo.png";

export default function Home() {
  return (
    <>
      <NavBar
        items={[
          { title: "HOME", link: "/home" },
          { title: "CONTACT", link: "/contact" },
          { title: "ABOUT", link: "/about" },
        ]}
      />
      <Footer 
        src={logo_logo} 
        title="Essence"
        items={[
          {
            title: "Follow us",
            content: [
              { title: "Github", link: "#" },
              { title: "Discord", link: "#" }
            ]
          }
        ]}
      />
    </>
  );
}
