import React from 'react'
import Layout from 'components/layout'
import { Link } from 'gatsby'

const HomePage = () => (
  <Layout>
    <main>
      <div className="container px-5 region-content">
        <h1 className="page-title">Studies</h1>
        <p>
          Results of evaluations of the Teachers Institute demonstrate that such
          collaborative programs can assist schools in specific ways. Studies
          have shown that Institute participation has increased teachers’
          preparation in their disciplines, raised their morale, heightened
          their expectations for their students, encouraged them to remain in
          teaching in New Haven, and has, in turn, enhanced student performance.
          Curriculum units Fellows have developed are used extensively in school
          courses.{' '}
        </p>
        <div className="row mt-4">
          <div className="col-sm-6 left-panel">
            <div className="br-cell py-2">
              <h2 className="br-title">
                Fellow Questionnaire Results, 1992-2019: Overview{' '}
                <i className="fas fa fa-arrow-circle-right" />
              </h2>
              <p>
                From 1992-2019, 544 different New Haven teachers participated at
                least once. All Fellows completed a questionnaire each time they
                participated. A longitudinal analysis of questionnaire data
                showed a notable consistency over time in the experiences of
                program participants and the outcomes they report. It concludes
                that teacher leaders ensure that the program meets teachers’
                needs; collegiality has consistently enriched teachers’
                experiences; and curriculum units written in Institute seminars
                ensure that teachers’ learning reaches their students.
              </p>
            </div>
            <div className="br-cell py-2">
              <Link to="brochures/D6/">
                <h2 className="br-title">
                  A Progress Report on Surveys Administered to New Haven
                  Teachers, 1982-1990{' '}
                  <i className="fas fa fa-arrow-circle-right" />
                </h2>
              </Link>
              <p>
                In the preface to “A Progress Report on Surveys Administered to
                New Haven Teachers, 1982-1990,” Gita Z. Wilder of the
                Educational Testing Service summarizes highlights of the
                decade-long study of results of the Institute’s program for
                teachers who had participated as Fellows, and for those who had
                not. She concludes, “What is most notable about the findings...
                is their consistency.... Such consistency of responses is
                manifest not only among each year’s Fellows, but among Fellows
                across years.”
              </p>
            </div>
          </div>
          <div className="col-sm-6 right-panel">
            <div className="br-cell py-2">
              <h2 className="br-title">
                Teachers Institute Enhances Student Engagement, 2018{' '}
                <i className="fas fa fa-arrow-circle-right" />
              </h2>
              <p>
                Drawing on data from several sources between 1992 and 2017, the
                report concludes that Institute Fellows “consistently report
                high levels of student engagement when they teach the curriculum
                unit they developed in their Institute seminar.”
              </p>
            </div>
            <div className="br-cell py-2">
              <h2 className="br-title">
                Study of Teachers Institute Curriculum Units, 2014-2015{' '}
                <i className="fas fa fa-arrow-circle-right" />
              </h2>
              <p>
                The study of curriculum units developed in 2014 and 2015 in
                Teachers Institute seminars in New Haven and elsewhere – and in
                the Yale National Initiative – found that most curriculum units
                are clearly written, accurate, and usable by another teacher.
                “In New Haven, nearly all teachers who responded to an online
                survey were satisfied with the units they had used…Most teachers
                reported that, compared with commercial curriculum units they
                have used, Institute units elicit the same or greater student
                attention, interest, and motivation and lead to the same or
                higher mastery.”
              </p>
            </div>
          </div>
          <div className="row" />
        </div>
      </div>
    </main>
  </Layout>
)
export default HomePage
