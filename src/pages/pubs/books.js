import React from 'react'
import Layout from 'components/layout'
import { Link } from 'gatsby'

const periodicalPage = () => (
  <Layout>
    <main>
      <div className="container px-5 region-content">
        <h1 className="page-title">Books</h1>
        <div className="row">
          <div className="col-sm-11 left-panel">
            <p>A first book on the Institute was published in 1984 by the College Board. A second book, 
              published in 1991, contained a collection of exemplary curriculum units produced in the Institute.
            </p>
            <h2>Teaching in New Haven: The Common Challenge, 1991</h2>
            <p>
              <i>Teaching in New Haven: The Common Challenge </i>(1991) is a
              collection of exemplary curriculum units produced in the
              Institute. According to editor Thomas R. Whitaker, “They stand as
              examples of the distinctive process of individual curriculum
              development in which the Fellows of the Institute have been
              engaged.”
            </p>
            <ul>
            <li>
              <Link className="" to="pubs/A5/">
                Teaching in New Haven: The Common Challenge
              </Link>
            </li>
            </ul>
            <hr />
            <h2>Teaching in America: The Common Ground, 1984</h2>
            <p>
              The first book on the Institute,{' '}
              <i>Teaching In America: The Common Ground,</i> was prepared for
              distribution initially to the Chief State School Officers, college
              and university presidents and chancellors, and government and
              foundation officials who attended the unprecedented 1983
              Conference at Yale on the role higher education can and must play
              in strengthening teaching in American schools. An expanded edition
              published in 1984 by the College Board includes early evaluations
              of the Institute by Ernest L. Boyer, President of the Carnegie
              Foundation for the Advancement of Teaching, and Robert Kellogg,
              Dean of the College at the University of Virginia.{' '}
            </p>
            <ul>
            <li>
              <Link className="" to="pubs/A4/">
                Teaching in America: The Common Ground
              </Link>
            </li>
            </ul>
          </div>
          <div className="row" />
        </div>
      </div>
    </main>
  </Layout>
)
export default periodicalPage
