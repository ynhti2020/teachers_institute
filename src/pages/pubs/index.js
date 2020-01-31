import React from 'react'
import Layout from 'components/layout'
import { Link } from 'gatsby'

const pubsPage = () => (
  <Layout>
    <main>
      <div className="container px-5 region-content">
        <h1 className="page-title">Publications</h1>
        <div className="row mt-4">
          <div className="col-sm-6 left-panel">
            <div className="br-cell py-2">
              <h2 className="br-title">
                <Link to="pubs/periodical">
                  Periodical <i className="fas fa fa-arrow-circle-right" />
                </Link>
              </h2>
              <p>
                <i>On Common Ground&reg;</i> is published in print and online. It is
                concerned with the development of teachers and of their
                curricula through school-university partnerships. Its title,
                which derives from that of the first book on the Institute's
                work, <i>Teaching in America: The Common Ground</i>, is intended
                to suggest that university faculty and school teachers have a
                strong mutual interest in the improvement of teaching and
                learning in schools. Since 2005 the periodical has focused on
                the work of the Yale National Initiative to strengthen teaching
                in public schools&reg;.
              </p>
            </div>
            <div className="br-cell py-2">
              <h2 className="br-title">
                <Link to="brochures/CenterManual">
                  Manual for Teachers Institute Centers for Curriculum and Professional Development, 2004{' '}
                  <i className="fas fa fa-arrow-circle-right" />
                </Link>
              </h2>
              <p>
                In 1996 the Yale-New Haven Teachers Institute and the New Haven
                Public Schools undertook an initiative designed to broaden and
                deepen their longstanding efforts to strengthen teaching and
                learning in the schools. The Institute offered several
                elementary, middle, and high schools the opportunity to
                establish an Institute Center for Curriculum and Professional
                Development to create in schools a place that would be conducive
                to the kinds of conversations teachers have with each other and
                with their university colleagues and Institute seminars on the
                Yale campus. They are intended to increase the visibility and
                use of Institute resources within the schools and to include
                teachers who had not before been Institute Fellows.
              </p>
            </div>
          </div>
          <div className="col-sm-6 right-panel">
            <div className="br-cell py-2">
              <h2 className="br-title">
                <Link to="pubs/books">
                  Books <i className="fas fa fa-arrow-circle-right" />
                </Link>
              </h2>
              <p>
                A first book on the Institute was published in 1984 by the College Board. A second book, published in 1991, contained a 
                collection of exemplary curriculum units produced in the Institute.
              </p>
            </div>
          </div>
          <div className="row" />
        </div>
      </div>
    </main>
  </Layout>
)
export default pubsPage
