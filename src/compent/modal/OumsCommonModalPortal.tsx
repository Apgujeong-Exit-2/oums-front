import ReactDOM from 'react-dom';
import React from 'react';

/**
 * Common Modal Portal Layout
 */
const OumsCommonModalPortal = (props: { children: React.ReactElement }) => {
  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null;
  return ReactDOM.createPortal(props.children, modalRoot);
};

export default OumsCommonModalPortal;
