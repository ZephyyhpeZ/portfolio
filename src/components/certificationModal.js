import { useInView, motion as m, useAnimation } from 'framer-motion';
import { ColorPaletteContext } from '../components/colorPalettesContext';
import { useRef, useEffect, useContext } from 'react';

const CertificationModal = ({ img, isOpen, onClose }) => {
   if (!isOpen) return null;
  return (
    <div
      className="z-[9999] fixed top-0 left-0 w-full h-full bg-[#00000080] flex items-center justify-center"
      onClick={onClose}
    >
      <m.img
        src={img}
        alt=""
        className="w-[70vw] h-[70vh] rounded-2xl "
        initial={{ rotate: 0, scale: 5 }}
        animate={{ rotate: -12, scale: 1 }}
        exit={{ rotate: -12, scale: 1 }}
     
        transition={{
          duration: 0.6,
          ease: 'easeInOut',
          rotate: { delay: 0.05, ease: 'easeInOut', duration: 0.7 },
        }}
      />
    </div>
  );
};

export default CertificationModal;
