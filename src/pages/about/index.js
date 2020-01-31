import React from 'react'
import Layout from 'components/layout'
import { Link } from 'gatsby'

const aboutPage = () => (
  <Layout>
    <main>
      <div className="container px-5 region-content">
        <h1 className="page-title">About the Teachers Institute</h1>
        <div className="row mt-4">
          <div className="col-sm-6 left-panel">
            <div className="br-cell py-2">
              <h2 className="br-title">
                <Link to="/brochures/annual-brochure.html">
                  Annual Brochure <i className="fas fa fa-arrow-circle-right" />
                </Link>
              </h2>
              <p>
                The brochure describes the Institute’s local program and
                schedule; contains lists of school teachers and faculty members
                in the Institute’s leadership; and provides participating
                teachers, named Institute Fellows, Guidelines for development of
                curriculum units.{' '}
              </p>
            </div>
            <div className="br-cell py-2">
              <h2 className="br-title">
                <Link to="/participate">
                  Participate{' '}
                  <i className="fas fa fa-arrow-circle-right" />
                </Link>
              </h2>
              <p>
                The Institute accepts as Fellows teachers of English, history, languages, arts, science, and mathematics from New Haven's public elementary and secondary schools. Interested teachers discuss their potential eligibility with a School Representative or a Steering Committee member who works closely with those teachers who then submit an online application. To learn more about participating in the Institute, speak with your School Representative or Contact, or a member of the Steering Committee.
              </p>{' '}
            </div>
            <div className="br-cell py-2">
              <h2 className="br-title">
                <Link to="/about/policies-structure-procedures">
                  Policies, Structure, and Procedures{' '}
                  <i className="fas fa fa-arrow-circle-right" />
                </Link>
              </h2>
              <p>
                “The Policies, Structure, and Procedures” of the Institute,
                endorsed by the Yale Corporation in September 1994, describe the
                Institute as a permanent unit of the University.{' '}
              </p>
            </div>
          </div>
          <div className="col-sm-6 right-panel">
            <div className="br-cell py-2">
              <h2 className="br-title">
                <Link to="/brochures/A9.html">
                  Awards and Recognition{' '}
                  <i className="fas fa fa-arrow-circle-right" />
                </Link>
              </h2>
              <p>
                “Principal Recognition Accorded to the Institute” by individuals
                and organizations since 1978
              </p>{' '}
            </div>
            <div className="br-cell py-2">
              <h2 className="br-title">
                <Link to="/brochures/video-programs.html">
                  Video Programs <i className="fas fa fa-arrow-circle-right" />
                </Link>
              </h2>
              <p>Video programs depict the annual seminar process and results of the Yale-New Haven Teachers Institute.</p>
              <p />
            </div>
            <div className="br-cell py-2">
              <h2 className="br-title">
                <Link to="/articles/index.html">
                  Published Essays{' '}
                  <i className="fas fa fa-arrow-circle-right" />
                </Link>
              </h2>
              <p>
                Articles written by Founding Director James R. Vivian describe
                the Teachers Institute approach to teacher professional
                development, the history of the Institute’s program in New
                Haven, and its significance to Yale University.
              </p>
            </div>
            <div className="br-cell py-2">
              <h2 className="br-title">
                <Link to="/about/advisory">
                  University Advisory Council{' '}
                  <i className="fas fa fa-arrow-circle-right" />
                </Link>
              </h2>
              <p>
                The University Advisory Council is a presidentially-appointed body of Yale faculty members that guides the general direction of the program and acts as a course-of-study committee so that the Institute can certify Fellows' work to institutions where they may be pursuing advanced degrees.
              </p>
            </div>
          </div>
          <div className="row" />
        </div>
      </div>
    </main>
  </Layout>
)
export default aboutPage
