import React from 'react';

class FilteringComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [],
            remaining: [],
            selected: [],
        }
        this.filterList = this.filterList.bind(this);
    }

    filterList() {
        const remaining = [];
        const selected = [];
        const options = this.state.options;

        for (const option of options) {
            let inputSearch = event.target.value.toLowerCase();
            let input = option.toLowerCase().search(inputSearch);
            if (input === -1) {
                remaining.push(option)
            } else {
                selected.push(option)
            } 
        }
        this.setState({ remaining, selected })
    }

    componentDidMount() {
        this.setState({
            options: this.props.content,
            remaining: this.props.content
        })
    }

    render() {
        return (
          <div>
            <div>Rem: {JSON.stringify(this.state.remaining)}</div>
            <div>Sel: {this.state.selected}</div>
            <div>Opt: {JSON.stringify(this.state.options)}</div>
            <form>
                  <input type="text" placeholder="Search" onChange={this.filterList}/>
            </form>
            <div>
              {
                  this.state.remaining.map(function(item) {
                      return <div key={item}>{item}</div>
                  })
              }
              </div>
          </div>
        );
      }
}

export default FilteringComponent