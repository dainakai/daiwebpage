// components/home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { newsData_en } from '../data/newsData_en';
import './styles/NewsList.css';
import Helmet from 'react-helmet';

export const Home_en = () => {
  let recentNews = newsData_en.slice(0, 5);
  return (
    <div className="home">
      <Helmet>
        <title>Dai Nakai, Kyoto Institute of Technology</title>
      </Helmet>
      <Typography variant="h4" gutterBottom>Welcome!</Typography>
      <Typography variant="body1" paragraph>
        Hi! My name is Dai Nakai. I am a Ph.D. student at Kyoto Institute of Technology. 
      </Typography>
      <div className='news_feed'>
        <Typography variant="h5" gutterBottom>News!</Typography>
        {/* {recentNews.map((item, index) => (
          <NewsItemBox key={index} newsItem={item} />
        ))} */}
        <div className="news-list-contents">
          {recentNews.map(item => (
            <Link key={item.id} to={`/en/news/${item.id}`} className="news-list-item">
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="subtitle2" color="textSecondary">
                {item.date}
              </Typography>
            </Link>
          ))}
        </div>
        <div className="view_all" style={{ textAlign: 'center' }}>
          <Button component={Link} to="/en/news" variant="text">
            View all
          </Button>
        </div>
      </div>
    </div>

  );
}