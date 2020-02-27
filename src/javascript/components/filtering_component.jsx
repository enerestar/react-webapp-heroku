import React from 'react';

class FilteringComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialItems: [],
            items: []
        }
        this.filterList = this.filterList.bind(this);
    }

    filterList(e) {
        console.log("What is this? " + this)
        let items = this.state.initialItems;
        items = items.filter((item) => {
            console.log("What is item? " + item)
            return item.toLowerCase().search(event.target.value.toLowerCase())
        });
        this.setState({items: items});
    }

    componentDidMount() {
        this.setState({
            initialItems: this.props.content,
            items: this.props.content
        })
    }

    render() {
        return (
          <div>
            <form>
                  <input type="text" placeholder="Search" onChange={this.filterList}/>
            </form>
            <div>
              {
                  this.state.items.map(function(item) {
                      return <div key={item}>{item}</div>
                  })
              }
              </div>
          </div>
        );
      }
}

export default FilteringComponent