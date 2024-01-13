import Swal from 'sweetalert2';

interface SwalProps {
 title: string;
 text: string;
 icon: any;
 timer?: number;
}

const swalHelper = () => {
 const defaultSwal = ({ title, text, icon, timer }: SwalProps) => {
  return Swal.fire({
   title: title,
   text: text,
   icon: icon,
   timer: timer,
  });
 };

 const yesNoSwal = ({ title, text, icon }: SwalProps) => {
  return Swal.fire({
   title: title,
   text: text,
   icon: icon,
   showCancelButton: true,
   confirmButtonColor: '#3085d6',
   cancelButtonColor: '#d33',
   confirmButtonText: 'Evet',
   cancelButtonText: 'Hayır',
  });
 };

 return {
  defaultSwal,
  yesNoSwal,
 };
};

export default swalHelper;
