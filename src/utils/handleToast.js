import { toast } from 'react-toastify';

export const handleInfo = text => {
  toast.info(text, {
    position: 'top-right',
    autoClose: 2700,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

export const handleError = text => {
  toast.info(text, {
    position: 'top-right',
    autoClose: 2700,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

export const handleSuccess = text => {
  toast.success(text, {
    position: 'top-right',
    autoClose: 2700,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

export const handleWarning = text => {
  toast.warning(text, {
    position: 'top-right',
    autoClose: 2700,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};
