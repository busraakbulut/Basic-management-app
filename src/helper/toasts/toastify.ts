import { ReactChild, ReactFragment, ReactPortal, ReactNode } from 'react';
import { ToastContentProps, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const toastWarnNotify = (
 msg:
  | boolean
  | ReactChild
  | ReactFragment
  | ReactPortal
  | ((props: ToastContentProps<unknown>) => ReactNode)
) => {
 toast.warn(msg, {
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
 });
};

export const toastSuccessNotify = (
 msg:
  | boolean
  | ReactChild
  | ReactFragment
  | ((props: ToastContentProps<unknown>) => ReactNode)
) => {
 toast.success(msg, {
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
 });
};

export const toastErrorNotify = (
 msg:
  | boolean
  | ReactChild
  | ReactFragment
  | ((props: ToastContentProps<unknown>) => ReactNode)
) => {
 toast.error(msg, {
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
 });
};
