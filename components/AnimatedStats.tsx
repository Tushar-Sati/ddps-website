"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const Counter = ({ num, title, suffix }: { num: number; title: string, suffix?: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const duration = 2000;
            const stepTime = 20;
            const steps = duration / stepTime;
            const inc = num / steps;

            const timer = setInterval(() => {
                start += inc;
                if (start >= num) {
                    clearInterval(timer);
                    setCount(num);
                } else {
                    setCount(Math.ceil(start));
                }
            }, stepTime);
            return () => clearInterval(timer);
        }
    }, [isInView, num]);

    return (
        <div ref={ref} className="text-center p-4">
            <h4 className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {count}{suffix !== undefined ? suffix : (num > 50 ? "+" : "k")}
            </h4>
            <p className="text-gray-600 font-medium">{title}</p>
        </div>
    );
};

export default function AnimatedStats() {
    return (
        <section className="py-12 bg-white border-b border-gray-100 relative z-30 shadow-sm">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-gray-100">
                    <Counter num={15} title="Years Experience" suffix="" />
                    <Counter num={1500} title="Repairs Completed" suffix="+" />
                    <Counter num={98} title="Customer Satisfaction %" />
                    <Counter num={50} title="Certified Technicians" />
                </div>
            </div>
        </section>
    );
}
