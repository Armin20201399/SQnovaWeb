import React from 'react';

interface SectionShellProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export const SectionShell: React.FC<SectionShellProps> = ({ id, className = '', children }) => (
  <section
    id={id}
    className={`relative overflow-hidden bg-cyber-grid text-center py-24 ${className}`}
  >
    {children}
  </section>
);