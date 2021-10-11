import React, { useState, useEffect } from 'react';

const URL_COPY_TIMEOUT = 2000;

const copyToClipboard = (text) => {
  const elem = document.createElement('textarea');
  elem.value = text;
  document.body.appendChild(elem);
  elem.select();
  document.execCommand('copy');
  document.body.removeChild(elem);
};

const ShareButton = ({
  buttonText = 'Compartilhar',
  title,
  description,
  url,
}) => {
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    if (clicked) {
      setTimeout(() => {
        setClicked(false)
      }, URL_COPY_TIMEOUT);
    }
  }, [clicked]);

  const handleClick = () => {
    if (!navigator.share) {
      copyToClipboard(url || document.location.href);
      setClicked(true);
      return;
    }
    navigator.share({
      title,
      text: description,
      url: url || document.location.href,
    });
  };

  return (
    <button
      className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 disabled:opacity-50"
      disabled={clicked}
      onClick={handleClick}
    >
      {!clicked ? buttonText : 'URL copiada!'}
    </button>
  );
};

export default ShareButton;
