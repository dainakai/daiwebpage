// components/NewsItem.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Paper, Typography } from '@mui/material';
import { tipsData } from '../data/tipsData';
import './styles/NewsItem.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import directive from 'remark-directive';
import { visit } from 'unist-util-visit';
import Gist from "react-gist";
import Helmet from 'react-helmet';

function reactMarkdownRemarkDirective() {
  return (tree) => {
    visit(
      tree,
      ["textDirective", "leafDirective", "containerDirective"],
      (node) => {
        node.data = {
          hName: node.name,
          hProperties: node.attributes,
          ...node.data
        };
        return node;
      }
    );
  };
}

export const TipsItem = ({ tipsItem }) => {
  const { id } = useParams();
  const [content, setMarkdown] = useState('');
  const item = tipsItem || (id && tipsData.find(item => item.id === id));

  useEffect(() => {
    if (item) {
      fetch(`/tipsItems/${item.contentFile}`)
        .then(response => response.text())
        .then(markdown => setMarkdown(markdown))
        .catch(error => console.error('Error fetching markdown file:', error));
    }
  }, [item]);

  if (!item) {
    return <Typography variant="h4">Tips item not found</Typography>;
  }

  return (
    <div>
      <Helmet>
        <title>{item.title} | 中井 大 (Dai Nakai) 京都工芸繊維大学大学院</title>
      </Helmet>
      <Paper elevation={5} className="news-item-container">
        <Typography variant="h5" component="h3" gutterBottom fontWeight="bold">
          {item.title}
        </Typography>
        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
          {item.date}
        </Typography>
        <ReactMarkdown
          remarkPlugins={[remarkGfm, directive, reactMarkdownRemarkDirective]}
          rehypePlugins={[rehypeRaw]}
          components={{
            a: ({ node, ...props }) => (
              <a
                {...props}
                target="_blank"
                rel="noopener noreferrer"
              />
            ),
            gist: ({ node, ...props }) => (
              <div>
                <Gist id={props.id} your_name="dainakai" />
              </div>
              
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </Paper>
    </div>
  );
};