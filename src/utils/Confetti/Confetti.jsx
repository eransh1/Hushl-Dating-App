import React from 'react'
import Confetti from 'react-confetti'
import useWindowDimensions from './GetWindowDimensions';

const Confettii = () => {
    const { height, width } = useWindowDimensions();
  return (
    <Confetti
    width={width}
    height={height}
    style={{zIndex:"1000"}}
  />
  )
}

export default Confettii