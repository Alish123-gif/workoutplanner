import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-transparent bg-opacity-50 flex justify-center items-center">
            <div className="bg-white border-4  p-4 rounded-lg max-w-md w-full h-40 scrollable">
                <button onClick={onClose} className="text-lg font-bold">x</button>
                {children }
            </div>
        </div>
    );
};

export default Modal;
