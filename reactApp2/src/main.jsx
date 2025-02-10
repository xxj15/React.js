import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);
// strictmode 삭제
// 루트 컴포넌트가 App컴포넌트임!! (물론 변경 가능하지만, 개발자들은 거의 App 컴포넌트를 루트로 사용)
