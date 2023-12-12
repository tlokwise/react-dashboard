import { useState } from "react";

import { Button } from "react-bootstrap";
import { ArrowBarUp } from "react-bootstrap-icons";

import "../css/scroll-to-top-button.css";

export default function ScrollToTopButton() {
  const [isVisible, setVisible] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 100) setVisible(true);
    else setVisible(false);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", handleScroll);
  return (
    <Button
      className={`scroll-to-top-btn ${isVisible ? "visible" : "hidden"}`}
      onClick={scrollToTop}
    >
      <ArrowBarUp className="scroll-to-top-icon" size={30} fontSize={20}/>
    </Button>
  );
}
