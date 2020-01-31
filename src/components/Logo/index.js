import React from 'react'
import { Link } from 'gatsby'
import logo from 'components/images/NHTI-logo.png'

const Logo = () => (
  <div className="site-branding col-md-8">
  <div className="mb-3">
    <Link className="logolink" to="/">
      <h1 className="offscreen">The Yale-New Haven Teachers Institute</h1>
      <img src={logo} title="Yale New Haven Teacher Institute" alt="Yale New Haven Teacher Institute" />
    </Link>
  </div>
  </div>
)

export default Logo
