import React from 'react'

class Search extends React.Component{

  componentDidMount(){
    (function() {
      var cx = '014177378021644155909:u_pjrcixyzi';
      var gcse = document.createElement('script');
      gcse.type = 'text/javascript';
      gcse.async = true;
      gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
          '//cse.google.com/cse.js?cx=' + cx;
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(gcse, s);
    })();

    window.onload = function(){
      document.getElementById('gsc-i-id1').placeholder = 'SEARCH';
      };
  }

  render(){
    return (
  <div className="search-block col-md-4 my-auto">
    <span
      className="d-sm-inline-block"
      id="siteSearch"
      dangerouslySetInnerHTML={{
        __html: `<script async src="https://cse.google.com/cse.js?cx=014177378021644155909:u_pjrcixyzi"></script><div class="gcse-searchbox-only" data-resultsUrl="/search-results" data-newWindow="false" data-queryParameterName="q"></div>`,
      }}
    />
    {/* <script async src="https://cse.google.com/cse.js?cx=014177378021644155909:u_pjrcixyzi"></script> */}
    {/* <div class="gcse-searchbox-only" data-resultsUrl="/search-results" data-newWindow="false" data-queryParameterName="search" /> */}
  </div>
)}
    }

export default Search
