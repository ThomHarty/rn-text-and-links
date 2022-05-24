import { ITextAndLinksToParse, ITextObject } from './TextAndLinks.interfaces'

export const getParsedTextObjects = ({ text, links }: ITextAndLinksToParse) => {
  let findLinks: string = text
  const replaceLinks = () => {
    links!.forEach((link, i) => {
      findLinks = findLinks.replace(
        link.text,
        `#link#${i}#!#${link.text}#link#`
      )
    })
    return findLinks
  }

  let objects: ITextObject[] = []
  replaceLinks()
    .split('#link#')
    .forEach((item: string) => {
      if (item.includes('#!#')) {
        const linkAndText = item.split('#!#')
        objects = [
          ...objects,
          {
            type: 'link',
            onPress: links![Number(linkAndText[0])].onPress,
            text: `${linkAndText[1]}`,
          },
        ]
      } else {
        objects = [
          ...objects,
          {
            type: 'text',
            text: item,
          },
        ]
      }
    })
  return objects
}
