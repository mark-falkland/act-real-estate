import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import ActMap from './components/ActMap'
import DataGrid from './components/DataGrid'


import AddForm from './components/AddForm'
import Dialog from '@material-ui/core/Dialog';
import CircularProgress from '@material-ui/core/CircularProgress';


import db from './firebase.js'

import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import geocoder from 'google-geocoder'

const geo = geocoder({
  key: 'AIzaSyAunsYCgvvzUNv06FtVQw8vkU0Zah1qD6s',
});

class App extends Component {

  state = {
    properties: '',
    isDialog: false,
    currentProperty: '',
    currLat: -35.2496493,
    currLng: 149.1324191,
    zoom: 14
  };

  setArea = (area) => {
    this.setState({
      properties: ''
    })
    let query = ''
    if (area) {
      query = db.collection('properties').where("area", "==", area)
    } else {
      query = db.collection('properties')
    }
    query.onSnapshot(docsList => {
      let allProperties = []

      docsList.forEach(doc => {
        allProperties.push({
          id: doc.id,
          street_number: doc.data().street_number,
          street: doc.data().street,
          suburb: doc.data().suburb,
          area: doc.data().area,
          price: doc.data().price,
          bedrooms: doc.data().bedrooms,
          bathrooms: doc.data().bathrooms,
          cars: doc.data().cars,
          description: doc.data().description,
          images: doc.data().images
        })
      })
      this.setState({
        currentProperty: allProperties[0],
        properties: allProperties
      })
    })
  }

  componentDidMount() {
    this.setArea("Inner North")
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.properties) {
      if (prevState.properties !== this.state.properties) {
        let street_number = this.state.properties[0].street_number
        let street = this.state.properties[0].street
        let suburb = this.state.properties[0].suburb
        let location = street_number + ' ' + street + ',' + suburb + ' Canberra, ACT'
        this.showProperty(0, location)
      }
    }
  }

  showDialog = () => {
    this.setState({ isDialog: true });
  }

  closeDialog = () => {
    this.setState({ isDialog: false });
  };

  showProperty = (index, location) => {
    geo.find(location, (err, res) => {
      if (err) {
      } else {
        let position = res[0].location
        this.setState({
          currentProperty: this.state.properties[index],
          currLat: position.lat,
          currLng: position.lng,
        })
      }
    })
  }

  render() {

    const MapComponent = withGoogleMap(props =>
      <GoogleMap
        defaultZoom={this.state.zoom}
        defaultCenter={{ lat: this.state.currLat, lng: this.state.currLng }}
      >
        {props.isMarkerShown && <Marker position={{ lat: this.state.currLat, lng: this.state.currLng }} />}
      </GoogleMap>
    );

    return (
      <Fragment>
        <Dialog
          open={this.state.isDialog}
          onClose={this.closeDialog}
          fullWidth
        ><AddForm closeDialog={this.closeDialog} /></Dialog>
        <Navbar showDialog={this.showDialog} />
        <div className="app-container">
          <div className="act-map"><ActMap setArea={this.setArea} /></div>
          <div className="data-grid">
            {
              this.state.properties ? (<DataGrid properties={this.state.properties} showProperty={this.showProperty} />) : (
                <div className="progress-indicator-container"><CircularProgress /></div>
              )
            }
          </div>
          <div className="property-preview">
            <div className="image-container">
              {
                this.state.currentProperty &&
                <img src={this.state.currentProperty.images[0]} alt="property" className="image" />
              }
            </div>
            <div className="map">
              <MapComponent isMarkerShown
                containerElement={<div style={{ height: `100%`, width: `100%` }} />}
                mapElement={<div style={{ height: `100%`, width: `100%` }} />}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
