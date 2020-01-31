import React from 'react'
import { Link } from 'gatsby'
import banner from 'components/images/nhgreensm.jpg'
import Layout from 'components/layout'

const HomePage = () => (
  <Layout>
    <main>
      <div className="banner mb-3 container">
        <img src={banner} className="img-fluid" alt="New Haven Green" title="New Haven Green"/>
        <figcaption style={{fontSize: 'smaller'}}>View of the New Haven Green and Yale Campus</figcaption>
      </div>
      <div className="container region-content">
        <div className="row">
          <div className="col-sm-8 mt-3">
            <h2>About the Teachers Institute</h2>
            <p>
              The Yale-New Haven Teachers Institute® is an educational
              partnership between Yale University and the New Haven Public
              Schools designed to strengthen teaching and learning in local
              schools and, by example and direct assistance, in high-need schools across the country.
              Through the Institute, Yale faculty members and New Haven school
              teachers work together in a collegial relationship. The Institute
              is also an interschool and interdisciplinary forum for teachers to
              collaborate on new curricula.
            </p>
            <p>
              See our{' '}
              <a href="/brochures/A1/Brochure-2020.pdf">
                2020 Annual Brochure.
              </a>
            </p>
            <h2>Curriculum Units by Teachers</h2>
            <p>
              Each teacher participating as a Fellow in an Institute seminar
              with a Yale faculty member studies the seminar subject and
              prepares a curriculum unit to be taught during the following year. In
              this way teachers deepen their knowledge of the subjects they
              teach and develop new curricular material to engage and educate
              the students in their school courses.
            </p>
            <p>
              You can view the curriculum units by searching the{' '}
              <Link to="curriculum/indexes/">topical index</Link> or the <Link to="curriculum/units/">volumes of units</Link> published each year.
            </p>
          </div>
          <div className="col-sm-4">
            <aside className="mb-2">
              <div className="p-3 mt-4 block-block">
                <h2 className="block-title">
                  Topical Index of Curriculum Units
                </h2>
                <p>
                  Since 1978 teachers have prepared thousands of units for
                  teaching topics in English, history and social studies,
                  languages, the arts, mathematics, and science in elementary
                  and secondary schools.
                </p>
                <Link
                  className="s-btn"
                  to="/curriculum/indexes/"
                >
                  Browse by Topic
                </Link>
              </div>
              <div className="p-3 mt-4 block-block">
                <h2 className="block-title">National Program</h2>
                <p>
                  For more information about the Institute's work nationally,
                  visit the website of the{' '}
                  <a href="http://teachers.yale.edu/">
                    Yale National Initiative to strengthen teaching in public
                    schools&reg;
                  </a>
                  , a long-term effort to influence public policy on teacher
                  professional development.
                </p>
              </div>
            </aside>
          </div>
          <div className="row" />
        </div>
      </div>
    </main>
  </Layout>
)
export default HomePage
