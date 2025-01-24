// components/NewsItem.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Paper, Typography } from '@mui/material';
import { newsData } from '../data/newsData';
import './styles/NewsItem.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Helmet from 'react-helmet';

export const NewsItem = ({ newsItem }) => {
  const { id } = useParams();
  const [content, setMarkdown] = useState('');
  const item = newsItem || (id && newsData.find(item => item.id === id));

  useEffect(() => {
    if (item) {
      fetch(`/newsItems/${item.contentFile}`)
        .then(response => response.text())
        .then(markdown => setMarkdown(markdown))
        .catch(error => console.error('Error fetching markdown file:', error));
    }
  }, [item]);

  if (!item) {
    return <Typography variant="h4">News item not found</Typography>;
  }

  return (
    <div>
      <Helmet>
        <title>{item.title} | 中井 大 (Dai Nakai) 京都工芸繊維大学大学院</title>
      </Helmet>
      <Paper elevation={5} className="news-item-container">
        <Typography variant="h6" component="h3" gutterBottom>
          {item.title}
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          {item.date}
        </Typography>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          skipHtml={true}
          components={{
            a: ({ node, ...props }) => (
              <a
                {...props}
                target="_blank"
                rel="noopener noreferrer"
              />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </Paper>
    </div>
  );
};