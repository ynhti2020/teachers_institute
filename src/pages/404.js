import React from 'react'
import Layout from 'components/layout'
const path = require('path')

class error404Page extends React.Component {

render() {

    return (
    <Layout>
      <main>
      <div className="main_content m-4">
        <h1 className="page-not-found">Page not found</h1>
        <p>The requested page could not be found</p>    
      </div>
      </main>
      </Layout>
    )
  }
}

export default error404Page