import React from 'react'
import Layout from 'components/layout'
import { Link } from 'gatsby'

const NationalDePage = () => (
  <Layout>
    <main>
      <div className="container px-5 region-content">
        <h1 className="page-title">National Demonstration Project</h1>
        <p>
          After exploring during 1997 the feasibility and desirability of
          establishing new Teachers Institutes at other locations, the Teachers
          Institute undertook a National Demonstration Project to demonstrate
          the potential for adapting at other sites the approach to teacher
          professional development that had been followed for more than two
          decades by the Yale-New Haven Teachers Institute.
        </p>
        <div className="row mt-4">
          <div className="col-sm-8 left-panel">
            <ul>
              <li>
                <strong>
                  <Link to="/ndp/NDP.html">
                    A National Demonstration Project: Aims and Current Accomplishments, 2000{' '}
                  </Link>
                </strong>
                <br />
                <a target='_blank' href="/pdfs/ndp/NDP.pdf">
                  (pdf version with photos)
                </a>
                <p>
                  The report describes the establishment of four new Teachers
                  Institutes serving urban school systems that enroll students
                  who are mainly from low-income and minority communities. It
                  sets forth the basic principles that had been developed by the
                  Yale-New Haven Teachers Institute that became the guiding
                  principle for each of the new Teachers Institutes.{' '}
                </p>
              </li>              
              <li>
                <strong>
                  <Link to="/ndp/ndp1999.html">
                    A National Demonstration Project, 1999
                  </Link>
                </strong>
                <br />
                <a target='_blank' href="/pdfs/ndp/ndp1999.pdf">
                  (pdf version with photos)
                </a>
                <p>
                  The report describes the establishment and purposes of a
                  National Demonstration Project including the site visits that
                  resulted in a proposal for a 4-year project that would
                  constitute a major step toward the nationwide establishment of
                  Teachers Institutes following the approach developed
                  originally in New Haven.{' '}
                </p>
              </li>
            </ul>
          </div>
          <div className="row" />
        </div>
      </div>
    </main>
  </Layout>
)
export default NationalDePage
