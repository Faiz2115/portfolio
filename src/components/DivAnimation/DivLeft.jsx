import React from "react";
import { motion } from "framer-motion";

const DivLeft = ({ children, ...props }) => {
    return (
        <motion.div
            initial={{ x: -250, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            // whileHover={{ scale: 1.1 }}
            // whileTap={{ scale: 0.8 }}
            viewport={{ once: false }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default DivLeft;
