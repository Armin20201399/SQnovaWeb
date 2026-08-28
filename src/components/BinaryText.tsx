import React, { memo } from 'react';

interface BinaryTextProps {
  children: React.ReactNode;
  className?: string;
  binaryClassName?: string;
  leftBinary?: string;
  rightBinary?: string;
}

const BinaryTextComponent: React.FC<BinaryTextProps> = ({
  children,
  className = "",
  binaryClassName = "text-sky-500/40",
  leftBinary = "010110",
  rightBinary = "110011"
}) => {
  return (
    <div className={`flex items-center justify-center gap-3 group/binary ${className}`}>
      <span className={`font-mono text-[10px] sm:text-xs ${binaryClassName} tracking-tighter opacity-0 group-hover/binary:opacity-100 transition-opacity duration-500 select-none`}>
        {leftBinary}
      </span>
      <div className="leading-none">{children}</div>
      <span className={`font-mono text-[10px] sm:text-xs ${binaryClassName} tracking-tighter opacity-0 group-hover/binary:opacity-100 transition-opacity duration-500 select-none`}>
        {rightBinary}
      </span>
    </div>
  );
};

export const BinaryText = memo(BinaryTextComponent);