import React from "react";
import { motion } from "framer-motion";

const DivRight = ({ children, ...props }) => {
    return (
        <motion.div
            initial={{ x: 350, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default DivRight;
