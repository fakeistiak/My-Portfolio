import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Main from "./Layout/Main";
import Contact from "./Pages/Home/Contact/Contact";
import './index.css'

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const BackgroundAnimation = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.div
      style={{ backgroundImage }}
      className="fixed inset-0 -z-10 w-full h-full"
    >
      <Canvas>
        <Stars radius={50} count={2500} factor={4} fade speed={2} />
      </Canvas>
      <motion.div
        style={{ border, boxShadow }}
        className="absolute inset-0 pointer-events-none"
      />
    </motion.div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BackgroundAnimation />
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </>
);