import React from 'react';
import { colors, fonts, cards } from './style';

class Result extends React.Component {
    
    render() {
        return (
          <div style={{...cards.body}}>
              <div style={{...fonts.header, color:colors.primary}}> HEADING</div>
              <div style={{...fonts.body, color:colors.lightGrey, marginTop:"2px"}}> Subtitle</div>
              <div style={{...fonts.body, color:colors.secondary, marginTop:"50px"}}> Callout</div>
            <div >
                
            </div>
            {/* <div>Title: {this.state.selected}</div> */}
          </div>
        );
      }
}

export default Result;