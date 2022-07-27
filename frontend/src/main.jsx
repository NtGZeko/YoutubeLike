import React from "react";
// ✅ now importing from react-dom/client
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Reset } from "styled-reset";
import { CtxProvider } from "@services/Ctx";
import GlobalStyle from "./GlobalStyle";
import App from "./App";

// 👇️ IMPORTANT: make sure to specify correct ID
// must be the ID of the div element in your index.html file
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <CtxProvider>
      <Reset />
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CtxProvider>
  </React.StrictMode>
);
