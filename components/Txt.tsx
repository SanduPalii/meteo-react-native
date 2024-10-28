import { ReactNode, TextareaHTMLAttributes } from 'react';
import { Text, StyleProp, TextStyle, StyleSheet } from 'react-native';
import { twMerge } from 'tailwind-merge';
interface TxtProps {
  children: ReactNode;
  className?: string;
}

export function Txt({ children, className, ...restProps }: TxtProps) {
  return (
    <Text className={twMerge('font-alata text-3xl color-white', className)} {...restProps}>
      {children}
    </Text>
  );
}
