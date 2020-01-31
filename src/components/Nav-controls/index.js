import React from 'react'
import { Link } from 'gatsby'
import {
  FaArrowRight,
  FaArrowLeft,
  FaArrowUp,
} from 'react-icons/fa'


class NavControls extends React.Component {
  render() {
    const { pageIndex, navData } = this.props
    const prevPath = pageIndex > 0 ? navData[pageIndex - 1].path : null
    const nextPath = pageIndex + 1 < navData.length ? navData[pageIndex + 1].path : null

    return ( 
      <div className="content-nav-button">  
      <Link
          to={`${prevPath ? prevPath : '/'}`}
          className={`btn prv-btn mr-2 px-4 btn-sm ${
            prevPath ? '' : 'disabled'
          }`}
          role="button"
          aria-disabled="true"
        >
          <FaArrowLeft /> Previous{' '}
        </Link>
        <Link
          to={`${nextPath ? nextPath : '/'}`}
                    className={`btn px-4 next-btn btn-sm ml-2  ${
            nextPath ? '' : 'disabled'
          }`}
          role="button"
          aria-pressed="true"
        >
          Next <FaArrowRight />
        </Link>
        <a
          href="#"
          id="backtotop"
          className="px-4 backtotop btn-sm ml-2"
          role="button"
          aria-pressed="true"
        >
          Back to Top <FaArrowUp />
        </a>
      </div>
    )
  }
}

export default NavControls
