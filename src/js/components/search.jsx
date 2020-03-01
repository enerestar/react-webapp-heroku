import React from 'react';
import api from '../../keys/api.json';
import { colors, fonts, searchbar, cards, slant } from './style'
import Swal from 'sweetalert2'
import { Star } from './star'

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
        const API_URL = "https://www.omdbapi.com/?t="+ inputSearch + "&apikey=" + key;
        return this.fetch(API_URL);
    }

    async filterList() {
        let inputSearch = this.state.input;
        this.getInfo(inputSearch);
    }

    getRatings() {
        let ratingArr = this.state.selected.Ratings;
        if (ratingArr != undefined ) {
            let innerArr = ratingArr[0];
            if (innerArr != undefined) {
                return innerArr.Value
            }
        }   
    }

    render() {
        return (
          <div>
            <div style={{display: "flex", alignItems: "center"}}>
                <input style={{...searchbar.body, fontStyle: "italic", color:colors.label}} type="text" placeholder="Label" onChange={(e) => {
                    this.setState({input: e.target.value.toLowerCase()})
                }}></input>
                <input style={{marginTop: 4, marginLeft: -40, transform: "scale(0.7)"}} type="image" src="../../images/search.png" onClick={(e) => {
                    e.preventDefault();
                    this.filterList();
                    }}>
                </input>
            </div>
            <div>{JSON.stringify(this.state.selected)}</div>
            <div style={{}}>
                <div style={{...cards.body}}>
                    <img src={this.state.selected.Poster} style={{height: 200}}></img>
                    <div style={{backgroundColor: "#FFFFFF", ...slant.body, height: 200, width:50, marginLeft: -15, WebkitTransformOrigin: "100%, 100%", msTransformOrigin: "100%,100%"}}>
                    </div>
                    <div style={{padding: 10, display: "flex", flexDirection: "column" }}>
                        <div style={{...fonts.header, color:colors.primary, flex: "0 0 auto"}}>{this.state.selected.Title}</div>
                        <div style={{...fonts.body, color:colors.lightGrey, marginTop:2, flex: "0 0 auto"}}>{this.state.selected.Year} </div>
                        <div style={{...fonts.body, color:colors.secondary, overflowY: "scroll", marginTop:30, flex: "1 0 0"}}>
                            <div>{this.getRatings()}</div>
                        </div>
                        </div>
                </div>
            </div>
          </div>
        );
      }
}


export default Search