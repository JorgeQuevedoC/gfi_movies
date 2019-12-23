import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

export const notificationHandler = (errorMessage, isOpen) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      key={`bottom,center`}
      open={isOpen}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      message={<span id="message-id">{errorMessage}</span>}
    />
  );
};
