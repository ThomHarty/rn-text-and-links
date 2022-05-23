import * as React from 'react'
import { memo, ReactElement, useCallback } from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'

import { getParsedTextObjects } from './getParsedTextObjects'
import { ITextAndLinksProps, ITextObject } from './TextAndLinks.interfaces'

export const TextAndLinks = memo(
  ({
    text,
    links,
    textStyles,
    linkStyles,
    linkContainerStyles,
    containerStyles,
  }: ITextAndLinksProps): ReactElement => {
    const parsedTextObjects = useCallback(() => {
      return getParsedTextObjects({ text, links })
    }, [text, links])
    return (
      <View
        style={[{ flexDirection: 'row', flexWrap: 'wrap' }, containerStyles]}
      >
        {parsedTextObjects().map((item: ITextObject, key: number) => {
          return (
            <View key={key}>
              {item.type === 'text' && (
                <Text style={textStyles}>{item.text}</Text>
              )}
              {item.type === 'link' && (
                <TouchableWithoutFeedback
                  onPress={item.onPress}
                  style={linkContainerStyles}
                >
                  <Text style={linkStyles}>{item.text}</Text>
                </TouchableWithoutFeedback>
              )}
            </View>
          )
        })}
      </View>
    )
  }
)
