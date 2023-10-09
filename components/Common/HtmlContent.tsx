import React from 'react';
import DOMPurify from 'dompurify';

function HtmlContent({ html }) {
  const sanitizedHTML = DOMPurify.sanitize(html);

  return (
    <div
      className="html-content"
      dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
    />
  );
}

export default HtmlContent;
