import React, { Component } from 'react';
import './NewsItem.css';

class NewsItem extends Component {

  constructor(props){
    super(props);
    this.state = {};
    this.image = props.image;
    this.text = props.text;
  }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div class="col-md-4">
        <div class="card m-4 box-shadow">
          <img class="card-img-top news-image" src={this.image} alt="Card image cap"></img>
          <div class="card-body">
            <p class="card-text">{this.text}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">Leer</button>
              </div>
              <small class="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;