import React, { Fragment } from 'react'
import { Link } from 'gatsby'
const path = require('path')
const he = require('he');

class Table_content extends React.Component {
  render() {
    const { navData, pageIndex } = this.props
    const unitName = path.basename(navData[1].path, '.x.html')
    const volumeLink = path.dirname(navData[1].path)

    return (
      <div>
        <div className="volumes-links">
          <Link
            to={volumeLink}
            className="btn-sm"
            role="button"
            aria-pressed="true"
          >
            View This Volume
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
        <h2 className="tc">CONTENTS OF CURRICULUM UNIT {unitName}</h2>
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
    he.decode.options.isAttributeValue = true;
    var sTitle = he.decode(item.title)
    if (i == 0) {
      return (
        <h3
          key={i.toString()}
          className={`tc_lists_guide ${activeIndex == i ? 'tc_active' : ''}`}
        >
          <Link to={item.path}>{`${String(sTitle)}`}</Link>
        </h3>
      )
    } else {
      return (
        <li 
          key={i.toString()}
          className={`tc_lists_guide ${activeIndex == i ? 'tc_active' : ''}`}
        >
          <Link to={item.path}>{`${String(sTitle)}`}</Link>
        </li>
      )
    }
  })
  return <ol className="table_units">{listItems}</ol>
}
