import React from 'react'
import Layout from 'components/layout'
import { Link } from 'gatsby'

const conPage = () => (
  <Layout>
    <main>
      <div className="container px-5 region-content">
        <h1 className="page-title">News Conferences</h1>
        <p>
          At news conferences in 1978, 1982, and 1986 the Yale-New Haven
          Teachers Institute announced the awarding of grants by the National
          Endowment for the Humanities.{' '}
        </p>
        <div className="row mt-4">
          <div className="col-sm-11 left-panel">
            <ul>
              <li>
                <strong>
                  <Link to="transcripts/F7.html">
                    News Conferences on September 23, 1986
                  </Link>
                </strong>
                <p>
                  An announcement of a grant by the National Endowment for the
                  Humanities for the Teachers Institute to offer five seminars
                  in the Humanities in each of three years responding to NEH
                  initiatives commemorating its 25th anniversary. Yale President
                  Benno C. Schmidt, Jr. referred to the Institute as “one of our
                  great successes” and “the outstanding Institute of its kind in
                  the country.”{' '}
                </p>
              </li>
              <li>
                <strong>
                  <Link to="transcripts/F3.html">
                    News Conference on November 8, 1982{' '}
                  </Link>
                </strong>
                <p>
                  At this announcement of a grant from the National Endowment
                  for the Humanities, its Director of the Division of Education
                  Programs Richard Ekman said, “…the grant will enable the
                  Yale-New Haven Teachers Institute to be transformed from a
                  developing model of school-university cooperation into
                  something with a bright future, something that we at the
                  Endowment very much hope will become permanent.” A{' '}
                  <Link to="transcripts/F3.html">transcript</Link> and{' '}
                  <a href="https://www.youtube.com/watch?v=91r2zBfXY9M">
                    video
                  </a>{' '}
                  are available.
                </p>
                <p><iframe width="560" height="315" src="https://www.youtube.com/embed/91r2zBfXY9M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
              </li>
              <li>
                <strong>
                  <Link to="transcripts/F1.html">
                    Press Conference on National Endowment for the Humanities
                    Award, October 18, 1978{' '}
                  </Link>
                </strong>
                <p>
                  This news conference announcing the first grant of the
                  National Endowment for the Humanities to help establish the
                  Yale-New Haven Teachers Institute was the first occasion in
                  anyone’s memory when the President of Yale, the Mayor of the
                  City of New Haven, and the Superintendent of the New Haven
                  Public Schools made a joint announcement. At that time, Yale
                  President A. Bartlett Giamatti said, “Yale’s educational and
                  human resources are the most essential contributions the
                  University can make to the whole community in which we live.”
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
export default conPage
