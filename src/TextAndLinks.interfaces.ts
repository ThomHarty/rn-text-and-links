import { TextStyle, ViewStyle } from 'react-native'

interface Link {
  text: string
  onPress: () => void
}

export interface ITextAndLinksToParse {
  text: string
  links: Link[]
}

export interface ITextAndLinksProps extends ITextAndLinksToParse {
  containerStyles?: ViewStyle
  textStyles?: TextStyle
  linkStyles?: TextStyle
  linkContainerStyles?: ViewStyle
}

export interface ITextObject {
  type: 'link' | 'text'
  onPress?: () => void
  text: string
}
