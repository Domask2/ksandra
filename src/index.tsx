import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './index.css';
import App from './App';

import "antd/dist/antd.css";
import "./styles/index.css";
import "./styles/App.css";
import "./styles/Print.css";
import "./styles/my_ant.css";
import "./styles/labels.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

