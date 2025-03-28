'use client';

import { motion } from "framer-motion";

export default function AnimatedSection({ children, delay = 0 }) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    );
} 