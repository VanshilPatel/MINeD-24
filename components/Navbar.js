import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Navbar() {
  const ulRef = useRef();
  const menuRef = useRef();
  const [isOpened, setOpened] = useState(false);
  return (
    <nav className="primary-nav container">
      <div className="logo">
        <Link href={"/"}>
          <img className="logo-image" src="/logo.png" alt="Menu" />
        </Link>
      </div>

      <ul
        className="primary-navigation"
        id="primary-navigation"
        role="list"
        data-open="false"
        ref={ulRef}
      >
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/events">Events</Link>
        </li>
        <li>
          <Link href="/team">Team</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <button
        className="menu-icon"
        id="menu"
        ref={menuRef}
        data-open="false"
        onClick={() => {
          const value = ulRef.current.dataset.open;
          if (value == "true") {
            ulRef.current.dataset.open = "false";
            menuRef.current.dataset.open = "false";
            setOpened(false);
          } else {
            ulRef.current.dataset.open = "true";
            menuRef.current.dataset.open = "true";
            setOpened(true);
          }
        }}
      >
        {!isOpened && (
          <Image
            src={"/icon-menu.svg"}
            width={32}
            height={31}
            alt="Menu Icon for Opening the menu"
          ></Image>
        )}
        {isOpened && (
          <Image
            src={"/icon-menu-close.svg"}
            width={32}
            height={31}
            alt="Menu Icon for Closing the menu"
          ></Image>
        )}
      </button>
    </nav>
  );
}
