import React from 'react'
import Layout from 'components/layout'
import { Link } from 'gatsby'

const HomePage = () => (
  <Layout>
    <main>
      <div className="container region-content">
        <div className="row">
          <div className="col-sm-8">
            <div className="cr_row my-3 pr-3">
              <h1 className="page-title">Curricular Resources</h1>
              <p>
                Curriculum units, the product of the Fellows' seminar experience, 
                are designed to teach their own students about the
                seminar subject. Each curriculum unit contains: content objectives – a clear
                statement of the subject matter the unit seeks to cover;
                teaching strategies – a unified, coherent teaching plan for
                those objectives; classroom activities; resources for teachers
                and students; and an appendix on how the unit implements
                academic standards of the school district.{' '}
              </p>
            </div>
            <div className="cr_row my-3 pr-3">
              <h2>View topical index of curriculum units</h2>
              <p>
                Thousands of curriculum units written since 1978 are a treasure
                trove of ideas and procedures for teaching subjects in the
                humanities and in STEM fields in grades K-12. Each unit is 
                designated by three two-digit numbers (e.g. 99.01.01), 
                which represent the year, seminar volume, and unit. The Index does not
                indicate whether the units are primarily for elementary or
                secondary school grades because a great many of the units,
                whatever their original audience, are readily adaptable for use
                across a wide range of grades.
              </p>
              <Link to="curriculum/indexes/" className="btn-def">
                Browse Index
              </Link>
            </div>
            <div className="cr_row my-3 pr-3">
              <h2>View list of volumes by year</h2>
              <p>
                The curriculum units Fellows write are their own. They are
                compiled in a volume for each seminar. The volume contains a
                preface that describes the organization of the seminar and an
                introduction by the Yale faculty member who led the seminar that
                describes what the Fellows studied in general and sometimes
                comments on the units they wrote in particular.
              </p>{' '}
              <Link to="curriculum/units" className="btn-def">
                View Volumes
              </Link>
            </div>
            <div className="cr_row my-3 pr-3">
              <h2>Reference Lists</h2>
              <p>
                Three annotated lists, compiled by New Haven teachers in 2001 and 2004, correlate Institute-developed curriculum 
                units with subjects and curriculum standards for various grade in New Haven's public schools.
              </p>{' '}
              <Link to="curriculum/referencelists" className="btn-def">
                Reference Lists
              </Link>
            </div>
          </div>
          <div className="col-sm-4">
          </div>
          <div className="row" />
        </div>
      </div>
    </main>
  </Layout>
)
export default HomePage
