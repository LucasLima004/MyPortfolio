import React, { useEffect, useState } from 'react';
import { BlinkingSVG, Overlay } from './style';
import Logo from '../logo';

export const Loader: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasLoadedEnoughTime, setHasLoadedEnoughTime] = useState(false);

    useEffect(() => {
        const handleWindowLoad = () => {
            setIsLoading(false);
        };

        window.addEventListener('load', handleWindowLoad);

        const timer = setTimeout(() => {
            setHasLoadedEnoughTime(true);
        }, 2500);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('load', handleWindowLoad);
        };
    }, []);

    if (isLoading || !hasLoadedEnoughTime) {
        return (
            <Overlay>
                <BlinkingSVG>
                    <Logo widthNumber={200} />
                </BlinkingSVG>
            </Overlay>
        );
    }

    return null;
};
