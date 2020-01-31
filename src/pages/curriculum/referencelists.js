import React from 'react'
import Layout from 'components/layout'
import { Link } from 'gatsby'

const HomePage = () => (
  <Layout>
    <main>
      <div className="container region-content">
        <div className="row">
            <div className="cr_row pr-3">
              <h1 className="page-title">Reference lists of curriculum units, 2001 and 2004</h1>
              <p>
                These annotated lists were compiled by New Haven teachers, for
                New Haven teachers. They correlate Institute-developed
                curriculum units with subjects and curriculum standards for
                various grade levels in New Haven’s public schools.{' '}
              </p>
              <ul>
              <li>
                  <strong>
                    <Link to="curriculum/referencelists/diversity/">
                      Teaching about Diversity and Community, 2004
                    </Link>
                  </strong>
                  <p>
                    This list identifies 578
                    curriculum units developed in the Institute from 1978
                    through 2004 that correlate with academic standards
                    concerning diversity in disciplines including English,
                    history, foreign languages, and arts.
                  </p>
                </li>
                <li>
                  <strong>
                    <Link to="curriculum/referencelists/elementary/">
                      Teaching in the Elementary School Classroom, 2001
                    </Link>
                  </strong>
                  <p>
                    This list identifies 600 curriculum units developed in the Institute from
                    1978 through 1999 that teachers believe are suitable for use
                    in an elementary classroom and for adaptation to
                    middle-school classrooms.
                  </p>{' '}
                </li>
                <li>
                  <strong>
                    <Link to="curriculum/referencelists/high/">
                      Teaching Connecticut Academic Performance Test (CAPT) Skills in
                      High School, 2001
                    </Link>
                  </strong>
                  <p>
                    This list identifies 407 curriculum units in
                    seven subjects developed in the Institute from 1978 through
                    1999 that can assist in teaching literacy skills and in
                    preparing students for the CAPT.{' '}
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4">
            <aside className="mb-2" />
          </div>
      </div>
    </main>
  </Layout>
)
export default HomePage
