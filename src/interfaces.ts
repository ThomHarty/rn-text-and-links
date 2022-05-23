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
  textStyles: TextStyle
  linkStyles: ViewStyle
  linkContainerStyles: ViewStyle
}

export interface ITextObject {
  type: 'link' | 'text'
  onPress?: () => void
  text: string
}
