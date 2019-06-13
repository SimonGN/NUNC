import React from 'react'
import Lottie from 'react-lottie';
import NuncAnimation from '../../content/animationNunc.json'

export default class LottieControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isStopped: false, isPaused: false};
  }

  render() {
    const buttonStyle = {
      display: 'block',
      margin: '10px auto'
    };

    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: NuncAnimation,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return (
    <div>
      <Lottie options={defaultOptions}
              height={400}
              width={400}/>
    </div>)
  }
}