import React, { Component } from "react";


class IPdata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: []
    };
  }

  componentDidMount(){

    var self = this

    const request = new XMLHttpRequest();

    var userKey = "866f14bacc59aac91d16699a0e1da7edd60f3f4939767f01faa5f4cc"    
    
    request.open('GET', `https://api.ipdata.co/?api-key=${userKey}`, true);
    request.setRequestHeader('Accept', 'application/json')
    
    request.onload = function (e) {     
      if (this.readyState === 4 && request.status == 200) {
        self.setState({response: JSON.parse(this.responseText)})
      }
    };


    request.send()

  } 






  
  render() {

   const dataResponse = this.state.response;
    
    const infoCard = 
      <div className="card shadow-sm">
      <div className="card-body">
        <div className="mb-4">
        <h5 className="card-title">User's Location:</h5>
        <span className="card-text" style={{color: 'green'}}>Latitude - {dataResponse.latitude} | Longitude - {dataResponse.longitude}</span>
        </div>
        <div className="">
        <h5 className="card-title">User's City & Country:</h5>
        <span className="card-text" style={{color: 'blue'}}>{dataResponse.city}, {dataResponse.country_name}</span>
        </div>
      </div>
    </div>


    const renderApi = 
    <div className="card shadow" id="iFrame">
    <div className="card-body mx-auto">
    <iframe
    className="iframeStyle"
    frameBorder="0"
    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCdQymwSuF0P6Ee-ffX0ZtWjpJdpaT5eLk&q=${dataResponse.city}+${dataResponse.country_name}&zoom=16`} allowFullScreen>
    </iframe>
    </div>
  </div>     
    

    return (
    <div>
      <div className="container mt-5 mb-5">
          <h1 className="text-center">IPdata Maps API</h1>
          <h4 className="text-center">by Jonathan Daniel</h4>
      </div>
        {renderApi}
        <div className="container col-lg-6 querySection">
              {infoCard}
        </div>
    </div>
    );
  }
}

export default IPdata;
