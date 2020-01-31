import React from 'react'

class Survey_feedback extends React.Component {
  render() {
    return (
      <div className="p-3 feedback">
        <div className="fbwrap">
          <p className="fdback">Your feedback is very important to us!</p>
          <p>
            When you are finished viewing curriculum units on this website,
            please take a few minutes to provide feedback and help us understand
            how these units, which were created by public school teachers, are
            useful to others.
          </p>
        </div>
        <a
          className="givefeedback"
          href="https://yalesurvey.ca1.qualtrics.com/jfe/form/SV_ctCQjtaTDWxNCHr"
          target="_blank"
        >
          Give Feedback
        </a>
      </div>
    )
  }
}

export default Survey_feedback
