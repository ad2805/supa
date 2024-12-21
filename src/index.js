import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import "@mantine/dates/styles.css";
import "@mantine/tiptap/styles.css";
import '@mantine/notifications/styles.css';
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from '@mantine/notifications';
import '@mantine/carousel/styles.css';


const theme = createTheme({
  fontFamily: "Poppins, sans-serif",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <ModalsProvider>
      <Notifications />
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </ModalsProvider>
    </MantineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
