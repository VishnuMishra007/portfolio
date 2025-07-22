import App from "./App";
import { createRoot } from "react-dom/client";


const rootElement = createRoot(document.getElementById('root') as Element);
rootElement.render(<App/>);