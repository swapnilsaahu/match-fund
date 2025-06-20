import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const App = () => (
    <div>
        <h1>Hello world</h1>
    </div>
);

createRoot(document.getElementById("app")!).render(<App />);
