import React from 'react'
import Layout from 'components/layout'
import { Link } from 'gatsby'

const conPage = () => (
  <Layout>
    <main>
      <div className="container px-5 region-content">
        <h1 className="page-title">Event Proceedings</h1>
        <div className="row mt-4">
          <div className="col-sm-6 left-panel">
            <div className="br-cell py-2">
              <h2 className="br-title">
                <Link to="event-proceedings/conferences">
                  Conferences <i className="fas fa fa-arrow-circle-right" />
                </Link>
              </h2>
              <p>
                Since 1983 Yale has held a series of meetings to disseminate the
                Teachers Institute approach and to collaborate with school and
                university colleagues from around the United States.
              </p>
            </div>
            <div className="br-cell py-2">
              <h2 className="br-title">
                <Link to="event-proceedings/news-conferences">
                  News Conferences{' '}
                  <i className="fas fa fa-arrow-circle-right" />
                </Link>
              </h2>
              <p>
                At news conferences in 1978, 1982, and 1986 the Yale-New Haven
                Teachers Institute announced the awarding of grants by the
                National Endowment for the Humanities.
              </p>
            </div>
            <div className="br-cell py-2">
              <h2 className="br-title">
                <Link to="congressional.html">
                  Congressional Hearings{' '}
                  <i className="fas fa fa-arrow-circle-right" />
                </Link>
              </h2>
              <p>
                In 1986, Institute Director James R. Vivian testified before the
                United States Senate Subcommittee on Education, Arts and
                Humanities at the invitation of Senator Dale Bumpers (R-AK) in
                support of “A Bill to Provide a National Program for Improving
                the Quality of Instruction in the Humanities in Public and
                Private Elementary Schools” that had been introduced by Senator Bumpers. Vivian
                offered testimony at hearings also in 1985, 1990, 1991, and
                1992.{' '}
              </p>
            </div>
          </div>
          <div className="col-sm-6 right-panel">
            <div className="br-cell py-2">
              <h2 className="br-title">
                <Link to="event-proceedings/endowment">
                  Endowment Celebrations<i className="fas fa fa-arrow-circle-right" />
                </Link>
              </h2>
              <p>
                At the completion of endowment challenge grants awarded in 1990
                by the DeWitt Wallace-Reader's Digest Fund and in 1991 by the
                National Endowment for the Humanities, the Yale-New Haven
                Teachers Institute became the first permanently endowed program
                of its type.{' '}
              </p>
            </div>
            <div className="br-cell py-2">
              <h2 className="br-title">
                <Link to="transcripts/25thTranscript.html">
                  25th Anniversary{' '}
                  <i className="fas fa fa-arrow-circle-right" />
                </Link>
              </h2>
              <p>
                A <Link to="brochures/25th.html">program</Link> for and{' '}
                <Link to="transcripts/25thTranscript.html">transcript</Link> of
                the Institute’s 25th Anniversary Gala on November 13, 2002,
                “Celebrating Teachers,” describe the Institute’s mission and
                history and lists its participants and supporters between 1978
                and 2002.{' '}
              </p>
            </div>
          </div>
          <div className="row" />
        </div>
      </div>
    </main>
  </Layout>
)
export default conPage
