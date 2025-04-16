'use client';

import { motion } from "framer-motion";
import Link from "next/link";

export default function AnimatedButton({ children, className, href, ...props }) {
    if (href) {
        return (
            <Link 
                href={href} 
                className={className}
                {...props}
            >
                <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ display: 'inline-block', width: '100%' }}
                >
                    {children}
                </motion.span>
            </Link>
        );
    }
    
    return (
        <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={className}
            {...props}
        >
            {children}
        </motion.button>
    );
} 