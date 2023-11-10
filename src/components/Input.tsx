import React from 'react';
import '../input.css';

type InputProps = {
  label?: string;
  type: 'text' | 'number' | 'email';
  name: string;
  placeholder?: string;
  id?: string;
};

export default function Input({ label, type, name, id, placeholder }: InputProps) {
  return (
    <div>
      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <input
          type={type}
          name={name}
          id={id}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
