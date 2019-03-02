import React, { Component, Fragment } from 'react';
import '../App.css';
import TextField from '@material-ui/core/TextField';
import db from '../firebase'

class AddForm extends Component {

  state = {
    street_number: '',
    street: '',
    suburb: '',
    area: '',
    price: '',
    bedrooms: '',
    bathrooms: '',
    cars: '',
    description: '',
    images: [],
    isUploading: false,
    file: null,
    image: '',
    imageURL: null
  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  onDrop(e) {
    e.stopPropagation();
    e.preventDefault();
    var files = e.dataTransfer.files;
    this.createFile(files[0]);
  }
  onChange(e) {
    var files = e.target.files;
    this.createFile(files[0]);
  }
  onPaste = (e) => {
    e.stopPropagation();
    if (e.clipboardData.files.length !== 0) {
      var file = e.clipboardData.items[0].getAsFile();
      //console.log(file)
      this.createFile(file);
    }
  }
  createFile = function (file) {
    //  console.log(file)
    if (!file.type.match("image.*")) {
      alert("Select an image file");
      return;
    }
    this.file = file;
    var reader = new FileReader();
    var vm = this;
    // var images = this.images
    reader.onload = (e) => {
      // console.log(e.target.result)
      let images = this.state.images
      images.push(e.target.result)
      this.setState({
        images: images
      })
    };
    reader.readAsDataURL(file);

    /* let read = new FileReader();
     read.readAsBinaryString(file);
     read.onload = () => {
       this.setState({ image: read.result });
     }*/

  }

  saveProperty = () => {
    db.collection("properties").add(
      {
        street_number: this.state.street_number,
        street: this.state.street,
        suburb: this.state.suburb,
        area: this.state.area,
        price: this.state.price,
        bedrooms: this.state.bedrooms,
        bathrooms: this.state.bathrooms,
        cars: this.state.cars,
        description: this.state.description,
        images: this.state.images
      }
    )
  }

  render() {
    console.log(this.state.images)
    return (
      <div className="add-form-container">
        <div className="add-form-content">
          <div className="add-form-details">
            <span className="add-property-title">Add a property: </span>
            <div className="input-row">
              <div className='text-input'>
                <TextField
                  id="street_number"
                  label="Street Number"
                  value={this.state.name}
                  className='option-textfield'
                  onChange={this.handleChange}
                />
              </div>
              <div className='text-input'>
                <TextField
                  id="street"
                  label="Street Name"
                  value={this.state.work}
                  className='option-textfield'
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="input-row">
              <div className='text-input'>
                <TextField
                  id="suburb"
                  label="Suburb Name"
                  value={this.state.break}
                  className='option-textfield'
                  onChange={this.handleChange}
                />
              </div>
              <div className='text-input'>
                <TextField
                  id="area"
                  label="Area Name"
                  value={this.state.sets}
                  className='option-textfield'
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <br />
            <br />
            <div className="input-row">
              <div className='text-input'>
                <TextField
                  id="bedrooms"
                  label="Bedrooms"
                  value={this.state.sets}
                  className='option-textfield'
                  onChange={this.handleChange}
                />
              </div>
              <div className='text-input'>
                <TextField
                  id="bathrooms"
                  label="Bathrooms"
                  value={this.state.sets}
                  className='option-textfield'
                  onChange={this.handleChange}
                />
              </div>
              <div className='text-input'>
                <TextField
                  id="cars"
                  label="Car Spots"
                  value={this.state.sets}
                  className='option-textfield'
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <br />
            <br />
            <div className='text-input'>
              <TextField
                id="price"
                label="Price"
                value={this.state.sets}
                className='option-textfield'
                onChange={this.handleChange}
              />
            </div>
            <br />
            <br />
            <div className='text-input'>
              <TextField
                id="description"
                label="Description"
                value={this.state.sets}
                className='option-textfield'
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="add-form-images">
            <div className="images-container" onPaste={this.onPaste}>
              <div>
                SELECT, PASTE OR DROP AN IMAGE
              </div>
              <div>
                <input type="file" name="image" className="file-input-button" />
              </div>
              <div>
                {
                  this.state.images.length > 0 &&
                  <img src={this.state.images[this.state.images.length - 1]} alt="uploaded" />
                }
              </div>
            </div>
          </div>
        </div>
        <div className="add-form-controls">
          <div onClick={this.props.closeDialog} className="add-form-cancel">CANCEL</div>
          <div onClick={this.saveProperty} className="add-form-save">SAVE</div>
        </div>
      </div>
    )
  }

}

export default AddForm
