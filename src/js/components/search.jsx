import React from 'react';
import api from '../../keys/api.json';

// search by title ?t=nameofmovie
// search by ?i=idofmovie?type
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: [],
            input: ""
        }
        this.filterList = this.filterList.bind(this);
    }

    fetch(API_URL) {
        return fetch(API_URL)
        .then((response) => {
            if(!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            this.setState({ selected : data })
            return data;
        })
        .catch((error) => {
            console.log("error: "+ error);
        });
    }

    getInfo(inputSearch) {
        const key = JSON.stringify(api.KEY).split('\"').join("");
        const API_URL = "http://www.omdbapi.com/?t="+ inputSearch + "&apikey=" + key;
        console.log(API_URL)
        return this.fetch(API_URL);
    }

    async filterList() {
        const remaining = [];
        const selected = [];
        let inputSearch = this.state.input;
        console.log('search ' + inputSearch )
        console.log("hellllooooo")
        let data = await this.getInfo(inputSearch);
        console.log(data);
        // selected.push(data);
        console.log(this.state.selected);
    }

    // componentDidMount() {
    //     this.setState({
    //         options: this.props.content,
    //         remaining: this.props.content
    //     })
    // }

    render() {
        return (
          <div>
            <div>Sel: {this.state.selected}</div>
            <form>
                <input type="text" placeholder="movie title" onChange={(e) => {
                    console.log(e)
                    this.setState({input: e.target.value.toLowerCase()})
                }}/>
                <button onClick={(e) => {
                    e.preventDefault();
                    this.filterList();
                    }}>Search</button>
            </form>
            {/* <div>
            {
                this.state.remaining.map(function(item) {
                    return <div key={item}>{item}</div>
                })
            }
            </div> */}
          </div>
        );
      }
}

export default Search