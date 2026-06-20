import { pinkinator } from 'pinkinator';
import { useEffect, useState } from 'react';

export const usePinkinator = (deps = []) => {
    const [color, setColor] = useState('#FFB0C0');

    useEffect(() => {
        setColor(pinkinator());
    }, deps);

    return color;
};
