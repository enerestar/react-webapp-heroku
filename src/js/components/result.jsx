import React from 'react';
import { colors, fonts, cards } from './style';
                                                                                                  
class Result extends React.Component {
    constructor(props) {
      super(props);
      this.state= {
        results: []
      }
    }
    render() {
        return (
          <div style={{...cards.body, display: "none"}}>
              <div style={{...fonts.header, color:colors.primary}} value={this.props.Title}> HEADING</div>
              <div style={{...fonts.body, color:colors.lightGrey, marginTop:"2px"}}> Subtitle</div>
              <div style={{...fonts.body, color:colors.secondary, marginTop:"50px"}}> Callout</div>
          </div>
        );
      }
}

export default Result;