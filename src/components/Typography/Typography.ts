import { Text } from './Text';
import { Title } from './Title';
import { Link } from './Link';
import { Paragraph } from './Paragraph';

type Typography = {
    Link: typeof Link;
    Paragraph: typeof Paragraph;
    Text: typeof Text;
    Title: typeof Title;
};

export const Typography: Typography = {
    Link,
    Paragraph,
    Text,
    Title,
};
