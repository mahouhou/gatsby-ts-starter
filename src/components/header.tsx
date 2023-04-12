import * as React from "react"

export default function Header() {

    const navLinks: {name: string, link: string}[] = [
        {name: "Home", link: "/"},
        {name: "Services", link: "/services"},
        {name: "About", link: "/about"},
        {name: "Contact", link: "/contact"},
        {name: "Gallery", link: "/gallery"}
    ]

    return (
    <header>
        <img src="" alt="Logo" />
        <nav>
            {navLinks.map((link, index) => (
                <a href={link.link} key={index}>{link.name}</a>
            ))}
        </nav>
    </header>
    )
  }