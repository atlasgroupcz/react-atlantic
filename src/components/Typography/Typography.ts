import { Text } from './Text';
import { Title } from './Title';
import { Link } from './Link';

type Typography = {
    Link: typeof Link;
    Text: typeof Text;
    Title: typeof Title;
};

export const Typography: Typography = {
    Link,
    Text,
    Title,
};
