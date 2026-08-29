import React, { memo } from 'react';

interface BinaryTextProps {
  children: React.ReactNode;
  className?: string;
  binaryClassName?: string;
  leftBinary?: string;
  rightBinary?: string;
  tight?: boolean; // 🔥 پراپ جدید برای کنترل leading
}

const BinaryTextComponent: React.FC<BinaryTextProps> = ({
  children,
  className = '',
  binaryClassName = 'text-sky-500/40',
  leftBinary = '010110',
  rightBinary = '110011',
  tight = true, // 🔥 به‌صورت پیش‌فرض true (حالت قبلی)
}) => {
  return (
    <div className={`flex items-center justify-center gap-3 group/binary ${className}`}>
      <span
        className={`font-mono text-[10px] sm:text-xs ${binaryClassName} tracking-tighter opacity-0 group-hover/binary:opacity-100 transition-opacity duration-500 select-none`}
      >
        {leftBinary}
      </span>
      {/* 🔥 شرطی کردن leading-none با پراپ tight */}
      <div className={tight ? 'leading-none' : 'leading-snug'}>{children}</div>
      <span
        className={`font-mono text-[10px] sm:text-xs ${binaryClassName} tracking-tighter opacity-0 group-hover/binary:opacity-100 transition-opacity duration-500 select-none`}
      >
        {rightBinary}
      </span>
    </div>
  );
};

export const BinaryText = memo(BinaryTextComponent);