import React from 'react'
import Layout from 'components/layout'

class PageTemplate extends React.Component {
  render() {
    const { html } = this.props.pageContext.node
    const { title } = this.props.pageContext.node.frontmatter

    return (
      <Layout>
        <main><div className="container region-content" dangerouslySetInnerHTML={{ __html: html }} />
</main>
      </Layout>
    )
  }
}

export default PageTemplate
