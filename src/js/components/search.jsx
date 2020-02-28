import React from 'react';
import api from '../../keys/api.json';
import { colors, fonts, searchbar } from './style'
import Swal from 'sweetalert2'

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
            this.setState({ selected : data })
            return data;
        })
        .catch((error) => {
            console.log("error: "+ error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href>Why do I have this issue?</a>'
              })
        });
    }

    getInfo(inputSearch) {
        const key = JSON.stringify(api.KEY).split('\"').join("");
        const API_URL = "http://www.omdbapi.com/?t="+ inputSearch + "&apikey=" + key;
        console.log(API_URL)
        return this.fetch(API_URL);
    }

    async filterList() {
        let inputSearch = this.state.input;
        console.log('Searched: ' + inputSearch )
        await this.getInfo(inputSearch);
        console.log("3333333");
        console.log(this.state.selected);
    }

    render() {
        return (
          <div>
            <div>
                <input style={{...searchbar.body, ...fonts.italics}} type="text" placeholder="Label" onChange={(e) => {
                    console.log(e)
                    this.setState({input: e.target.value.toLowerCase()})
                }}></input>
                <input type="image" src="../../images/search.png" onClick={(e) => {
                    e.preventDefault();
                    this.filterList();
                    }}>
                </input>
            </div>
            <div></div>
            {/* <div>Title: {this.state.selected}</div> */}
          </div>
        );
      }
}

export default Search