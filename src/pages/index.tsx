import * as React from "react"
import Layout from "../components/layout"
import IndexMD from "../content/index.mdx"
import "../css/styles.scss"

export default function Home() {

    return (   
        <Layout>
            <IndexMD />
        </Layout>
    )
  }