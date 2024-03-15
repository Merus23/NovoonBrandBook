import { log } from "console";
import NavBar from "./components/NavBar/NavBar";
import logo from "/public/assets/logo.png";

export default function Home() {
  return (
    <>
      <NavBar
        logo={logo}
        items={[
          { title: "HOME", link: "/home" },
          { title: "CONTACT", link: "/contact" },
          { title: "ABOUT", link: "/about" },
        ]}
      />
    </>
  );
}
