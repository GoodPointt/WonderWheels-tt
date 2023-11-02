import { toast } from 'react-toastify';

export const handleInfo = text => {
  toast.info(text, {
    position: 'top-right',
    autoClose: 2700,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
};

export const handleError = text => {
  toast.info(text, {
    position: 'top-right',
    autoClose: 2700,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
};

export const handleSuccess = text => {
  toast.success(text, {
    position: 'top-right',
    autoClose: 2700,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
};

export const handleWarning = text => {
  toast.warning(text, {
    position: 'top-right',
    autoClose: 2700,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
};
