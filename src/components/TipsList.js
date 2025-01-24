// components/NewsList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { tipsData } from '../data/tipsData';
import './styles/NewsList.css';
import Helmet from 'react-helmet';

export const TipsList = () => {
  return (
    <div className="news-list-container">
      <Helmet>
        <title>Tips | 中井 大 (Dai Nakai) 京都工芸繊維大学大学院</title>
      </Helmet>
      <Typography variant="h4" component="h2" gutterBottom>
        Tips
      </Typography>
      <div className="news-list-contents">
        {tipsData.map(item => (
          <Link key={item.id} to={`/tips/${item.id}`} className="news-list-item">
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