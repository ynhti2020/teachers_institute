import React from "react";
import {TinyButton as ScrollUpButton} from "react-scroll-up-button"; //Add this line Here

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <ScrollUpButton 
       StopPosition={0}
       ShowAtPosition={150}
       EasingType='easeOutCubic'
       AnimationDuration={500}
       ContainerClassName='ScrollUpButton__Container'
       TransitionClassName='ScrollUpButton__Toggled'
       style={{}}
       alt="Back to Top"
       ToggledStyle={{}}/>
      </div>
    );
  }
}