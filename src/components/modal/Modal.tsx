import React from 'react';
import Modal, { ModalProps } from '@mui/material/Modal';
import { Box } from '@mui/material';

interface ModalComponentProps extends ModalProps {
 title?: string;
 content: any;
 open: boolean;
 setOpen: React.Dispatch<React.SetStateAction<boolean>>;
 style?: any;
}

const defaultStyle = {
 position: 'absolute' as 'absolute',
 top: '50%',
 left: '50%',
 transform: 'translate(-50%, -50%)',
 borderRadius: '20px',
 width: '40%',
 height: '80%',
 bgcolor: 'background.paper',
 boxShadow: 24,
 p: 4,
 overflow: 'auto',
};

const ModalComponent: React.FC<ModalComponentProps> = ({ ...props }) => {
 const { children, content, title, open, setOpen, style, ...rest } = props;

 const handleClose = () => {
  setOpen(false);
 };
 const handleOpen = () => {
  setOpen(true);
 };

 return (
  <>
   <span onClick={handleOpen}>{children}</span>
   <Modal
    aria-labelledby="modal-modal-title"
    {...rest}
    open={open}
    onClose={handleClose}>
    <Box sx={props.style ? props.style : defaultStyle}>
     {title && (
      <h1 className="text-2xl" id="modal-modal-title">
       {title}
      </h1>
     )}
     {content}
    </Box>
   </Modal>
  </>
 );
};

export default ModalComponent;
