import React, { Component } from 'react';
import './Home.css';
import NewsItem from '../../NewsItem/NewsItem';
import image1 from '../../Assets/News/1.jpg';
import image2 from '../../Assets/News/2.jpg';
import image3 from '../../Assets/News/3.jpg';
import image4 from '../../Assets/News/4.jpg';
import image5 from '../../Assets/News/5.jpg';
import image6 from '../../Assets/News/6.jpg';
import news from '../../Assets/News/news';

class Home extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (

      <div className="Home">
        <main role="main" class="container">
          <div class="row">
            <NewsItem image={image1} text={news.news1}></NewsItem>
            <NewsItem image={image2} text={news.news2}></NewsItem>
            <NewsItem image={image3} text={news.news3}></NewsItem>
            <NewsItem image={image4} text={news.news4}></NewsItem>
            <NewsItem image={image5} text={news.news5}></NewsItem>
            <NewsItem image={image6} text={news.news3}></NewsItem>
            <NewsItem image={image1} text={news.news4}></NewsItem>
            <NewsItem image={image4} text={news.news4}></NewsItem>
          </div>
        </main>

      </div>
    );
  }
}

export default Home;