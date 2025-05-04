"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function FloatingPaths({ position, isMobile }: { position: number, isMobile: boolean }) {
    // Reduce the number of paths on mobile for better performance
    const pathCount = isMobile ? 20 : 36;
    
    const paths = Array.from({ length: pathCount }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(15,23,42,${0.1 + i * 0.03})`,
        width: 0.5 + i * 0.03,
    }));

    // Adjust animation durations for mobile
    const getAnimationDuration = () => {
        return isMobile ? 15 + Math.random() * 5 : 20 + Math.random() * 10;
    };

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-slate-950/50 dark:text-white/30"
                viewBox="0 0 696 316"
                fill="none"
                aria-hidden="true"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.05 + path.id * 0.02}
                        initial={{ pathLength: 0.3, opacity: 0.4 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.2, 0.4, 0.2],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: getAnimationDuration(),
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Detect if device is mobile for performance optimizations
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    // Don't render on very small screens for performance
    const isVerySmallScreen = typeof window !== 'undefined' && window.innerWidth < 360;
    
    if (isVerySmallScreen) {
        return null;
    }

    return (
        <div className="fixed inset-0 w-full h-full overflow-hidden bg-transparent pointer-events-none z-0">
            <div className={`absolute inset-0 ${isMobile ? 'opacity-20' : 'opacity-30'}`}>
                <FloatingPaths position={1} isMobile={isMobile} />
                <FloatingPaths position={-1} isMobile={isMobile} />
            </div>
        </div>
    );
} 