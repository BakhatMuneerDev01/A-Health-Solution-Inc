import React from 'react';

const InputField = ({
    label,
    type = 'text',
    placeholder,
    value,
    onChange,
    error,
    required = false,
    className = '',
    ...props
}) => {
    return (
        <div className={`mb-5 ${className}`}>
            {label && (
                <label className="block mb-1 font-medium text-sm text-black">
                    {label}
                    {required && <span className="ml-0.5 text-red-500">*</span>}
                </label>
            )}
            <input
                type={type}
                className={`w-full px-3 py-2 border rounded text-sm transition-colors
          border-gray-300 focus:outline-none focus:border-blue-500
          ${error ? 'border-red-500 focus:border-red-500' : ''}`}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                {...props}
            />
            {error && (
                <span className="block mt-1 text-xs text-red-500">
                    {error}
                </span>
            )}
        </div>
    );
};

export default InputField;