import React from 'react'
import { Link } from 'gatsby'

// UnitPath:
//  Preface:      /curriculum/units/2019/3/
//  Intro:        /curriculum/units/2019/3/19.03.intro.x.html
//  Guide:        /curriculum/guides/2019/3/19.03.01.x.html
//  Unit pg 1:    /curriculum/units/2019/3/19.03.01.x.html
//  Unit pg > 1:  /curriculum/units/2019/3/19.03.01/2

class Breadcrumb extends React.Component {
  render() {
//    const unitPaths = getUnitPaths(this.props.unitPath)

    return (
      <div className="tr_breadcrumb mt-2">
        <span>
          <Link to="/curriculum/">Curricular Resources</Link>
        </span>
        {' > '}
        <VolumeBreadcrumb unitPath={this.props.unitPath} />
        {' > '}
        <SectionBreadcrumb unitPath={this.props.unitPath} />
      </div>
    )
  }
}
export default Breadcrumb


function romanNumber(i) {
  
  var volumeRom= [" ", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];

  return volumeRom[i];
}


const VolumeBreadcrumb = ({ unitPath }) => {
  // need year (string),
  // volume (int or string 'cthistory'),
  // is it a Preface page?
  // path for a preface page is /curriculum/units/2019/3/  -or-   /curriculum/units/1980/cthistory/
  
  var pathSplit = unitPath.replace(/^\/|\/$/g, '').split('/')     // remove leading and trailing '/' and split the unit path
  var year = pathSplit[2]
  var volume = pathSplit[3]

  if (pathSplit.length < 5) {        // if pathSplit is < 5 then this is a preface page 
    return (
      <span>
        {year} Volume {`${isNaN(volume) ? volume : romanNumber(parseInt(volume))}`}
      </span>  
    )
  } else {
    return (
      <span>
        <Link to={`/curriculum/units/${String(year)}/${String(volume)}`} >
          {year} Volume {`${isNaN(volume) ? volume : romanNumber(parseInt(volume))}`}
        </Link>
      </span>
    )
  }
}


const SectionBreadcrumb = ({ unitPath }) => {
  // is it an intro or preface or guide or unit ?
  // if it is a unit:
  //    unit number
  //    page number
  //    unit name
  //    unit path
  
  var patternIntro = /intro/g
  var pathSplit = unitPath.replace(/^\/|\/$/g, '').split('/')
  var isGuide = pathSplit[1] === 'guides'
  var isPreface = pathSplit.length < 5

  if (isPreface) {
    return (
      <span>Preface</span>
    )
  } else if (patternIntro.test(pathSplit[4])) {     // check if it is an intro
    return (
      <span>Introduction</span>
    )
  } else {    // unit pages other than 1st page
    let unitSplit = pathSplit[4].split('.')
    let unitNum = parseInt(unitSplit[2])
    let unitName = pathSplit[4].split('.x.html')[0]
    if (isGuide || pathSplit.length > 5) {
      var pageNum = isGuide ? 'Unit Guide' : pathSplit[5]
      if (pathSplit.length > 5) {
        pathSplit.pop()
        pathSplit[4] += '.x.html'
      }
      pathSplit[1] = 'units'
      let unitPathPg1 = '/' + pathSplit.join('/') + '/'
      return (
        <span>
          <span><Link to={`${String(unitPathPg1)}`}>Unit {unitNum} ({unitName})</Link></span>
          {' > '}
          <span>Section {pageNum}</span>
        </span>
      )
    } else {      // unit page 1
      return (
        <span>
          <span>Unit {unitNum} ({unitName})</span>
          {' > '}
          <span>Section 1</span>
        </span>
      )
    }
  }
}
