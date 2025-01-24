// components/NewsList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { tipsData_en } from '../data/tipsData_en';
import './styles/NewsList.css';
import Helmet from 'react-helmet';

export const TipsList_en = () => {
  return (
    <div className="news-list-container">
      <Helmet>
        <title>Tips | Dai Nakai, Kyoto Institute of Technology</title>
      </Helmet>
      <Typography variant="h4" component="h2" gutterBottom>
        Tips
      </Typography>
      <div className="news-list-contents">
        {tipsData_en.map(item => (
          <Link key={item.id} to={`/en/tips/${item.id}`} className="news-list-item">
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