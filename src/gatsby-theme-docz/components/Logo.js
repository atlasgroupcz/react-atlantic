import React, { useEffect, useState } from 'react';

const URL =
    'https://agrp.dev/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGYWdycC5kZXYlMkZ3cC1jb250ZW50JTJGdXBsb2FkcyUyRjIwMjAlMkYwNyUyRmF0bGFzX2dyb3VwX2xvZ28ucG5nJmNhY2hlTWFya2VyPTE2MTU0Nzc5MzgtNzA2NCZ0b2tlbj1mNGZjMWFmZjcwZTI2MDg0.q.png';

const getTheme = () => localStorage.getItem('theme-ui-color-mode');
export const Logo = () => {
    const [initialTheme, setTheme] = useState();

    useEffect(() => {
        setTheme(getTheme);
    });

    const filter = initialTheme === 'dark' ? '' : 'invert(1) hue-rotate(-90deg)';
    return <img src={URL} alt="agrp.dev logo" style={{ width: 200, filter }} />;
};
