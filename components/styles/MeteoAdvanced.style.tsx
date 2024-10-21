import { View } from 'react-native';
import { Txt } from '../Txt';

export function StyledContainer({ children }: { children: JSX.Element | JSX.Element[] }) {
  return <View style={{ alignItems: 'center' }}>{children}</View>;
}

export function StyledLabel({ children }: { children: string }) {
  return <Txt style={{ fontSize: 15 }}>{children}</Txt>;
}

export function StyledValue({ children }: { children: string }) {
  return <Txt style={{ fontSize: 20 }}>{children}</Txt>;
}
