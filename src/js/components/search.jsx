import React from 'react';
import api from '../../keys/api.json';
import { colors, fonts, searchbar, cards } from './style'
import Swal from 'sweetalert2'
import Result from './result.jsx';

// search by title ?t=nameofmovie
// search by ?i=idofmovie?type
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: [],
            input: "",
            success: Boolean
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
            if(data.Response != "False") {
                if (data.Poster != "N/A") {
                    this.setState({ selected : data,
                    success: true })
                } else {
                    data.Poster = "../images/default.png"
                    this.setState({ selected : data,
                        success: true })
                }
                return data;
            } 
            this.setState({ success: false }) 
            throw new Error(data.Error)
        })
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: error
              })
        });
    }

    getInfo(inputSearch) {
        const key = JSON.stringify(api.KEY).split('\"').join("");
        const API_URL = "http://www.omdbapi.com/?t="+ inputSearch + "&apikey=" + key;
        return this.fetch(API_URL);
    }

    async filterList() {
        let inputSearch = this.state.input;
        this.getInfo(inputSearch);
    }

    getResults() {
        console.log(this.state.selected);
        return this.state.selected;
    }

    render() {
        return (
          <div>
            <div style={{display: "flex", alignItems: "center"}}>
                <input style={{...searchbar.body, fontStyle: "italic"}} type="text" placeholder="Label" onChange={(e) => {
                    console.log(e)
                    this.setState({input: e.target.value.toLowerCase()})
                }}></input>
                <input style={{marginTop: 4, marginLeft: -40, transform: "scale(0.7)"}} type="image" src="../../images/search.png" onClick={(e) => {
                    e.preventDefault();
                    this.filterList();
                    this.state.success ? <Result/> : null
                    }}>
                </input>
            </div>
                <div>{JSON.stringify(this.state.selected)}</div>
            <div style={{}}>
                <div style={{...cards.body}}>
                <img src={this.state.selected.Poster} style={{height: "200px"}}></img>
                <div style={{padding: 10, display: "flex", flexDirection: "column" }}>
                    {/* <div style={{height: "200px", backgroundColor: "#F0F0F0", transform: "rotate(20deg)"}}></div> */}
                    <div style={{...fonts.header, color:colors.primary, marginLeft: 30, flex: "0 0 auto"}}>{this.state.selected.Title}</div>
                    <div style={{...fonts.body, color:colors.lightGrey, marginTop:2, marginLeft: 30, flex: "0 0 auto"}}>{this.state.selected.Year} </div>
                    <div style={{...fonts.body, color:colors.secondary, overflowY: "scroll", marginTop:30, marginLeft: 30, flex: "1 0 0"}}>
                        <div>{this.state.selected.Genre}</div>
                        <div> &nbsp;</div>
                        <div>{this.state.selected.Actors}</div>
                        <div> &nbsp;</div>
                        <div>{this.state.selected.Plot}</div>
                        <div>{this.state.selected.Language}</div>
                    </div>
                </div>
            </div>
            </div>
          </div>
        );
      }
}


export default Search