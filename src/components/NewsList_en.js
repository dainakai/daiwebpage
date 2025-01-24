// components/NewsList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { newsData_en } from '../data/newsData_en';
import './styles/NewsList.css';
import Helmet from 'react-helmet';

export const NewsList_en = () => {
  return (
    <div className="news-list-container">
      <Helmet>
        <title>News | Dai Nakai, Kyoto Institute of Technology</title>
      </Helmet>
      <Typography variant="h4" component="h2" gutterBottom>
        News List
      </Typography>
      <div className="news-list-contents">
        {newsData_en.map(item => (
          <Link key={item.id} to={`/en/news/${item.id}`} className="news-list-item">
            <Typography variant="h6">{item.title}</Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {item.date}
            </Typography>
          </Link>
        ))}
      </div>
    </div>
  );
};