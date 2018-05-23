import React from 'react';
import { Grid } from 'react-bootstrap';


const SidebarWines = (props) => {
  {
    console.log("props in SidebarWines", props.wines)
  }
  return(
    <Grid>
      <div className="sidebar-wines">
      {props.wines.map((wine) => (
        <div>{wine.secondary_category}</div>
        )
      )}
      </div>
      </Grid>
    )
}

export default SidebarWines;