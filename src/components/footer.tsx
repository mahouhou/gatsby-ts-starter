import * as React from "react"

export default function Footer() {
    return (
    <footer>
        <div className="copyright">{new Date().getFullYear()}</div>
        <div className="credit">
            <a href="https://cascading-styles.com">Cascading Styles</a>
        </div>
    </footer>
    )
  }