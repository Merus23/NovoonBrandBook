import { log } from "console";
import NavBar from "./components/NavBar/NavBar";

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
    </>
  );
}
