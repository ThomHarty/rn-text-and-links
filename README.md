## React Native Text and Links

#### Install

```
yarn add rn-text-and-links
```

```
npm i rn-text-and-links
```

#### Example

```ts
import React, {ReactElement} from 'react';
import {SafeAreaView} from 'react-native';
import {TextAndLinks, ITextAndLinksProps} from 'rn-text-and-links';

export const App = (): ReactElement => {
  const props: ITextAndLinksProps = {
    linkStyles: {color: 'blue'},
    text: 'This is the text that includes links to things in the app and on the web',
    links: [
      {
        text: 'includes links',
        onPress: () => console.log('first link clicked'),
      },
      {
        text: 'in the app',
        onPress: () => console.log('second link clicked'),
      },
      {
        text: 'on the web',
        onPress: () => console.log('third link clicked'),
      },
    ],
  };

  return (
    <SafeAreaView>
      <TextAndLinks {...props} />
    </SafeAreaView>
  );
};
```

#### Props

```ts
text: string
links: {
        text: string
        onPress: () => void
    }[]
textStyles?: TextStyle
linkStyles?: TextStyle
linkContainerStyles?: ViewStyle
containerStyles?: ViewStyle
```