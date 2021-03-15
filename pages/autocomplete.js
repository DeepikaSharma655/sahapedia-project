
import React from 'react';
import Autosuggest from 'react-autosuggest';
import HomeMuseum from '../lib/all_museums.json'
import citiesdata from '../lib/cities-api.json';
class BasicAutoSuggest extends React.Component {
    HomeMuseumData=[];
    constructor() {
        super();

        //Define state for value and suggestion collection
        this.state = {
            value: '',
            suggestions: []
        };
       this.createobjectforAutocomplete()
    }
    createobjectforAutocomplete = ()=>{
        

        HomeMuseum.map(item=>(
            this.HomeMuseumData.push({
                
                title : item.title + " - "+ this.FindCityById(citiesdata,item.field_city_1),
                id: item.nid,
                type:"museums"

            })  
        ));
        citiesdata.map(item=>(
            this.HomeMuseumData.push({
                
                title : item.name[0].value ,
                id: item.tid[0].value,
                type:"city"

            })  
        ));

    };

    // HomeMuseumData = HomeMuseum;
     
    // // Collection of data
    // cars = HomeMuseum;
    // Filter logic
    getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        return inputLength === 0 ? [] : this.HomeMuseumData.filter(lang =>
            lang.title.toLowerCase().slice(0, inputLength) === inputValue
        );
    };

    // Trigger suggestions
    getSuggestionValue = suggestion => suggestion.title;
    FindCityById =(data, email) => {
        const el = data.find(el => el.tid[0].value == email); // Possibly returns `undefined`
        return el && el.name[0].value; // so check result is truthy and extract `id`
      }
    // Render Each Option
    renderSuggestion = suggestion => (
        
        <div>
             
            {suggestion.title}
        </div>
    );

    // OnChange event handler
    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    // Suggestion rerender when user types
    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    };

    // Triggered on clear
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {
        const { value, suggestions } = this.state;

        // Option props
        const inputProps = {
            placeholder: 'Search..',
            value,
            onChange: this.onChange
        };

        // Adding AutoSuggest component
        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps}
            />
        );
    }
}

export default BasicAutoSuggest;