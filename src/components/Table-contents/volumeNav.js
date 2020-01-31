import React from 'react'
import { Link } from 'gatsby'
const path = require('path')

class Table_content extends React.Component {
  render() {
    const { navData, pageIndex } = this.props

    return (
      <div>
        {/* <h1>{navData[0].}</h1> */}
        <div className="volumes-links">
          <Link
            to="/curriculum/units/"
            className="btn-sm"
            role="button"
            aria-pressed="true"
          >
            Navigate Volumes
          </Link>
          <Link
            to="/curriculum/indexes/"
            className="btn-sm"
            role="button"
            aria-pressed="true"
          >
            Browse Index
          </Link>
        </div>
        <h2 className="tc">CONTENTS OF VOLUME</h2>
        <div className="inner-table-content">
          <NavLinks navData={navData} activeIndex={pageIndex} />
        </div>
      </div>
    )
  }
}

export default Table_content

const NavLinks = ({ navData, activeIndex }) => {
  const listItems = navData.map(function(item, i) {
    if (i < 2) {
      return (
        <h3
          key={i.toString()}
          className={`tc_lists_guide ${activeIndex == i ? 'tc_active' : ''}`}
        >
          <Link to={item.path}>{item.title}</Link>
        </h3>
      )
    } else {
      return (
        <li
          key={i.toString()}
          value={parseInt(item.path.split(".")[2], 10)}
          className={`tc_lists_guide ${activeIndex == i ? 'tc_active' : ''}`}
        >
          <Link to={item.path}>{item.title}</Link>
        </li>
      )
    }
  })
  return <ol className="table_units">{listItems}</ol>
}
