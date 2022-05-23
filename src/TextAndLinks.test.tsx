import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'

import { TextAndLinks } from './TextAndLinks'

describe('TextAndLinks', () => {
  it('renders the text and handles onPress', () => {
    const testOnPress = jest.fn()
    const testText =
      'This is the text that includes links to things in the app and on the web'
    const testLinks = [
      {
        text: 'includes links',
        onPress: testOnPress,
      },
    ]

    const { getByText } = render(
      <TextAndLinks text={testText} links={testLinks} />
    )

    expect(getByText('This is the text that')).toBeTruthy()
    expect(getByText('includes links')).toBeTruthy()
    expect(getByText('to things in the app and on the web')).toBeTruthy()
    fireEvent.press(getByText('includes links'))
    expect(testOnPress).toHaveBeenCalledTimes(1)
  })
})
