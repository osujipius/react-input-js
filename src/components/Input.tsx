import React from 'react';

type InputProps = {
  label?: string;
  type: 'text' | 'number' | 'email';
  name: string;
  placeholder?: string;
  id?: string;
};

export default function Input({ label, type, name, id, placeholder }: InputProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '380px' }}>
      <label
        htmlFor="email"
        style={{
          fontWeight: 500,
          letterSpacing: '0.5px',
          flexGrow: 1,
          display: 'flex',
          alignItems: 'self-end'
        }}
      >
        {label}
      </label>
      <div
        style={{
          background: '#FFFFFF',
          border: '1px solid #E2E8F0',
          boxSizing: 'border-box',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          margin: '2px 0 12px 0',
          padding: '1rem',
          position: 'relative'
        }}
      >
        <input style={{ border: 'none', padding: 0, fontSize: '1rem', lineHeight: '100%', width: '100%', outline: 'none' }} type={type} name={name} id={id} placeholder={placeholder} />
      </div>
    </div>
  );
}
