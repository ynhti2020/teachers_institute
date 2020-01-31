import React from 'react'

class Table_content extends React.Component {
  render() {
    return (
      <div>
        <div className="volumes-links">
          <a
            target="_blank"
            href="#"
            className="btn btn-primary btn-sm"
            role="button"
            aria-pressed="true"
          >
            View This Volume
          </a>
          <a
            target="_blank"
            href="#"
            className="btn btn-primary btn-sm"
            role="button"
            aria-pressed="true"
          >
            Browse Index
          </a>
        </div>
        <h2 className="tc">Contents Of Volume Curriculum unit 18.01.01:</h2>
        <div className="inner-table-content">
          <ol className="table_units">
            <h3 className="tc_list">
              <a
                target="_blank"
                href="/curriculum/guides/2018/1/18.01.01.x.html"
              >
                Unit Guide
              </a>
            </h3>
            <li className="tc_lists_guide tc_active">
              <a
                target="_blank"
                href="/curriculum/units/2018/1/18.01.01.x.html"
              >
                Introduction and Rationale
              </a>
            </li>
            <li className="tc_lists_guide">
              <a target="_blank" href>
                Background
              </a>
            </li>
            <li className="tc_lists_guide">
              <a target="_blank" href>
                Teaching Strategies Overview
              </a>
            </li>
            <li className="tc_lists_guide">
              <a target="_blank" href>
                Teaching Strategies Content and Research
              </a>
            </li>
            <li className="tc_lists_guide">
              <a target="_blank" href>
                Days One and Two Classroom Activities: Introduction to the Unit
                and the Unit Themes
              </a>
            </li>
            <li className="tc_lists_guide">
              <a target="_blank" href>
                Days Three to Four Classroom Activities: Measuring Inequality
              </a>
            </li>
            <li className="tc_lists_guide">
              <a target="_blank" href>
                Days Five to Six Classroom Activities: Inequality of Opportunity
              </a>
            </li>
            <li className="tc_lists_guide">
              <a target="_blank" href>
                Days Seven to Eight Classroom Activities: Social Mobility
              </a>
            </li>
            <li className="tc_lists_guide">
              <a target="_blank" href>
                Reading List/Annotated Bibliography
              </a>
            </li>
            <li className="tc_lists_guide">
              <a
                target="_blank"
                href="/curriculum/units/2018/1/18.01.01.x.app.html"
              >
                Appendix
              </a>
            </li>
          </ol>
        </div>
      </div>
    )
  }
}

export default Table_content
