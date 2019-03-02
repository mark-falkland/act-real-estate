import React, { Component } from 'react';
import '../App.css'


class HoverMap extends Component {

  state = {
    currentArea: 'Inner North',
    areas: ["Belconnen", "Gungahlin", "Inner North", "Inner South", "Woden", "Tuggeranong", "Weston Creek", "Molonglo"]
  }


  handleClick = (e) => {

    this.props.setArea(this.state.areas[e.target.id])
    this.setState({
      currentArea: this.state.areas[e.target.id]
    })
  }

  render() {
    return (
      <div>
        {
          this.state.currentArea === "Belconnen" &&
          <div className="hover-label belconnen-label">Belconnen</div>
        }
        {
          this.state.currentArea === "Gungahlin" &&
          <div className="hover-label gunghalin-label">Gunghalin</div>
        }
        {
          this.state.currentArea === "Inner North" &&
          <div className="hover-label inner-north-label">Inner North</div>
        }
        {
          this.state.currentArea === "Inner South" &&
          <div className="hover-label inner-south-label">Inner South</div>
        }
        {
          this.state.currentArea === "Molonglo" &&
          <div className="hover-label molonglo-label">Molonglo</div>
        }
        {
          this.state.currentArea === "Woden" &&
          <div className="hover-label woden-label">Woden</div>
        }
        {
          this.state.currentArea === "Weston Creek" &&
          <div className="hover-label weston-creek-label">Weston Creek</div>
        }
        {
          this.state.currentArea === "Tuggeranong" &&
          <div className="hover-label tuggeranong-label">Tuggeranong</div>
        }
        <div className="act-map-instructions">Choose an area:</div>
        <img src='https://firebasestorage.googleapis.com/v0/b/portfolio-aa291.appspot.com/o/act_map_black_outline.png?alt=media&token=9b2c489d-050f-4197-b1e9-4aceabdd996c' alt='act-map' useMap="#Map"></img>
        <map name="Map" id="Map">

          <area onMouseEnter={this.mouseOver} onClick={this.handleClick} id="0" alt="area" coords="159,178,187,138,197,131,156,89,143,103,123,81,92,66,63,64,42,77,28,97,33,126,67,148,88,169,112,180,133,185" shape="poly" ></area>

          <area onMouseEnter={this.mouseOver} onClick={this.handleClick} id="1" alt="area" coords="196,132,180,101,161,88,134,62,142,48,158,12,184,34,195,23,204,28,212,7,235,4,225,30,224,56,243,74,244,95,229,99,221,123" shape="poly"></area>

          <area onMouseEnter={this.mouseOver} onClick={this.handleClick} id="2" alt="area" coords="221,126,186,145,164,178,179,184,177,210,161,217,161,238,183,235,196,233,201,220,211,221,230,248,239,245,251,249,263,242,235,211,247,178,254,152,250,134,242,129" shape="poly"></area>

          <area onMouseEnter={this.mouseOver} onClick={this.handleClick} id="7" alt="area" coords="136,210,102,205,81,197,71,194,70,212,56,218,52,236,46,246,73,267,72,281,109,278,103,254,111,234,111,220" shape="poly"></area>

          <area onMouseEnter={this.mouseOver} onClick={this.handleClick} id="6" alt="area" coords="113,275,95,285,67,283,61,299,66,323,79,339,96,342,112,347,121,334,123,319" shape="poly"></area>

          <area onMouseOver={this.mouseOver} onClick={this.handleClick} id="4" alt="area" coords="113,275,123,318,122,335,140,355,140,363,154,364,166,369,173,373,195,367,187,335,198,324,183,302,184,285,153,284,144,266" shape="poly"></area>

          <area onMouseOver={this.mouseOver} onClick={this.handleClick} id="5" alt="area" coords="191,392,176,387,164,380,150,376,136,372,113,351,85,358,90,370,73,384,83,395,111,401,105,417,101,432,113,445,128,463,137,479,129,493,138,512,166,526,178,513,191,500,192,486,200,482,203,469,194,457,216,436,220,408" shape="poly"></area>

          <area onMouseOver={this.mouseOver} onClick={this.handleClick} id="3" alt="area" coords="150,282,152,265,141,262,126,248,129,238,139,240,149,226,158,221,160,235,176,235,187,238,199,231,201,221,216,226,231,247,229,258,230,276,244,290,245,305,194,315,185,299,180,280,166,286" shape="poly"></area>

        </map>

      </div>
    )
  }
}

export default HoverMap
