require('file-loader?name=[name].[ext]!./index.html');
import React from "react";
import App from "./App";
import { createRoot }  from "react-dom/client";

const appElementRef = document.getElementById('app');
const root = createRoot(appElementRef);
root.render(<App />);

