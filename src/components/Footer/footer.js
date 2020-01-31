import React from 'react'
import { Link } from 'gatsby'

const Footer = () => (
  <footer className="mt-3">
    <div className="container footer-inner">
      <div className="footer-region container p-4 mt-2">
        <div className="row">
          <div className="col-sm-5 .footer-menu-block mb-3">
            <label>Resources</label>
            <div className="footer-menu resources-menu">
              <div className="ft-menu-list">
                <Link to="/curriculum">Curricular Resources</Link>
              </div>
              <div className="ft-menu-list">
                <Link to="/timeline">Timeline</Link>
              </div>
              <div className="ft-menu-list">
                <Link to="/brochures">Reports and Evaluation</Link>
              </div>
              <div className="ft-menu-list">
                <Link to="/about">
                  About the Institute
                </Link>
              </div>
              <div className="ft-menu-list">
                <Link to="/pubs">Publications</Link>
              </div>
              <div className="ft-menu-list">
                <Link to="/map.x.html">Site Map</Link>
              </div>
              <div className="ft-menu-list">
                <Link to="/event-proceedings">Event Proceedings</Link>
              </div>
            </div>
          </div>
          <div className="col-sm-5 .footer-menu-block">
            <label>Feedback</label>
            <div className="footer-menu">
              <div className="ft-menu-list">
                <a href="https://yalesurvey.ca1.qualtrics.com/jfe/form/SV_2lYNllUbWwcheuh">Guestbook</a>
              </div>
              <div className="ft-menu-list">
                <Link to="/comments.html">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
        <p className="copyright">
          <a
            target="_blank"
            href="https://usability.yale.edu/web-accessibility/accessibility-yale"
          >
            Accessibility at Yale
          </a>{' '}
          &middot; <Link to="terms.html">Terms of Use</Link> &copy;{' '}
          {new Date().getFullYear()}, Yale-New Haven Teachers Institute, Yale
          University, All Rights Reserved
          <br />
          Yale-New Haven Teachers Institute&reg;, Yale National Initiative&reg;,
          On Common Ground&reg;, and League of Teachers Institutes&reg; are
          registered trademarks of Yale University.
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
