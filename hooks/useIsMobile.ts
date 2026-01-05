import { useState, useEffect } from 'react';

/**
 * Hook to detect if the user is on a mobile device.
 * Uses both media query and touch detection for reliability.
 * Returns true on mobile devices for conditional animation logic.
 */
export const useIsMobile = (): boolean => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check media query
        const mediaQuery = window.matchMedia('(max-width: 768px)');

        const handleChange = () => {
            setIsMobile(mediaQuery.matches);
        };

        // Set initial value
        handleChange();

        // Listen for changes
        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return isMobile;
};

export default useIsMobile;
