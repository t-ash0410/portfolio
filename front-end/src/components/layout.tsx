import React from "react"
import "muicss/lib/sass/mui.scss"
import "../styles/body.scss"

import Header from "./header"
import Footer from "./footer"
import Container from "muicss/lib/react/container"
import Style from "../styles/content.module.scss"

const Layout = ({ children }) => (
 <>
   <Header />
   <Container className={Style.contentWrapper}>
   {children}
   </Container>
   <Footer />
 </>
)

export default Layout