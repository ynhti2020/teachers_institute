import React from 'react'
import Layout from 'components/layout'

const timePage = () => (
  <Layout>
    <div class="container px-5 region-content">
      {/* <div className="container px-5 region-content"> */}
      <h1 className="page-title">
        Timeline of the Yale-New Haven Teachers Institute® and Yale National
        Initiative®
      </h1>
      <p>
        This timeline traces the history of the Teachers Institute from its
        beginnings in New Haven to the recognition it received as an early
        leader in the movement for university-school collaboration, and its
        success in building on that recognition to disseminate knowledge of the
        Teachers Institute approach as a model of both professional development
        for teachers and of school-college collaboration to improve teaching in
        public schools. The timeline includes documents, photographs, and video
        programs from throughout the Teachers Institute’s history.
      </p>
      <strong>VIEWING AND NAVIGATING THE TIMELINE</strong>
      <p>
        <i>NB: This timeline is best viewed by maximizing the window of your browser. 
        Also, due to the large number of entries, not all individual entries can be
        seen in the timeline navigator window below. Therefore, navigating this timeline
        is best done by using the mouse to click on the navigator window and drag the entries,
        which move chronologically left to right throughout all of the categories below. 
        You may also use the left-right arrow keys on your keyboard or those on either side 
        of the main window to move left or right.</i>
      </p>
      {/* <div className="row mt-4">
          <div className="col-sm-11 left-panel"> */}
      <iframe
        // src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1by…"
        src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1byPAYyVSoTPXP4QzSn36IkH2H0IkCsvMJ8ImXCULjh4&font=Default&lang=en&initial_zoom=2&height=900"
        width="100%"
        height="900"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
        frameBorder="0"
        title="Timeline of the Yale-New Haven Teachers Institute® and Yale National Initiative"
        alt="Timeline of the Yale-New Haven Teachers Institute® and Yale National Initiative"
      />
      {/* </div> */}
      {/* <div className="row" /> */}
      {/* </div> */}
      {/* </div> */}
    </div>
  </Layout>
)
export default timePage
