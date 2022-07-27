import * as React from "react"
import { Link } from "gatsby"
import Template from "../components/Template";

const NotFoundPage = () => {
  return (
    <Template>
      <title>Not found</title>
      <Link to="/">Go home</Link>
    </Template>
  )
}

export default NotFoundPage
