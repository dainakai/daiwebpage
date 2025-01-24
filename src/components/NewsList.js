// components/NewsList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { newsData } from '../data/newsData';
import './styles/NewsList.css';
import Helmet from 'react-helmet';

export const NewsList = () => {
  return (
    <div className="news-list-container">
      <Helmet>
        <title>News | 中井 大 (Dai Nakai) 京都工芸繊維大学大学院</title>
      </Helmet>
      <Typography variant="h4" component="h2" gutterBottom>
        News List
      </Typography>
      <div className="news-list-contents">
        {newsData.map(item => (
          <Link key={item.id} to={`/news/${item.id}`} className="news-list-item">
            <Typography variant="h6">{item.title}</Typography>
            <Typography variant="subtitle2">
              {item.date}
            </Typography>
          </Link>
        ))}
      </div>
    </div>
  );
};