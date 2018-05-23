import React from 'react';
import { Button } from 'react-bootstrap';

const Wines = (props) => {
  return(
    <div className="wine-block">
      <Button className="fnd-wine-button"><span>Find a Wine</span></Button>
    </div>
  )
}

export default Wines;