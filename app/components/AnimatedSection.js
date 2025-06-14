'use client';

import { motion } from "framer-motion";

export default function AnimatedSection({ children, delay = 0, className = "" }) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay }}
            viewport={{ once: true }}
            className={className}
        >
            {children}
        </motion.div>
    );
} 