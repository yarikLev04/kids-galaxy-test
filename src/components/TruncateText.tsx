'use client';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';

interface TruncateTextProps {
  text: string;
  maxLength?: number;
}

const TruncateText = ({ text, maxLength = 600 }: TruncateTextProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const truncatedText = isExpanded ? text : text.slice(0, maxLength);

  return (
    <Typography variant="body1">
      {truncatedText}
      {!isExpanded && text.length > maxLength && (
        <span style={{ cursor: 'pointer', color: 'blue' }} onClick={toggleExpand}>
          ...Read more
        </span>
      )}
    </Typography>
  );
};

export default TruncateText;
