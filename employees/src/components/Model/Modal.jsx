import React from 'react';

const Modal = ({ isOpen, onClose, title, children, className = '' }) => {
    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={handleOverlayClick}
        >
            <div className={`bg-white rounded-lg max-w-[500px] w-[90%] max-h-[90vh] overflow-y-auto shadow-lg ${className}`}>
                <div className="flex justify-between items-center p-5 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900 m-0">
                        {title}
                    </h2>
                    <button
                        className="bg-transparent border-none text-xl text-gray-500 cursor-pointer p-0 w-8 h-8 flex items-center justify-center hover:text-gray-900 transition-colors"
                        onClick={onClose}
                    >
                        ×
                    </button>
                </div>
                <div className="p-5">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;