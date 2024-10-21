import { ReactNode } from 'react';
import { Text, StyleProp, TextStyle, StyleSheet } from 'react-native';

interface TxtProps {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
}

export function Txt({ children, style, ...restProps }: TxtProps) {
  return (
    <Text style={[s.defaultStyle, style]} {...restProps}>
      {children}
    </Text>
  );
}

const s = StyleSheet.create({
  defaultStyle: {
    fontFamily: 'Alata', // Assuming you have this font available
    fontSize: 30, // Default font size
    color: 'white',
  },
});
