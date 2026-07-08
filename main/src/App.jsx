import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Chat from "./Page/Chat";
import Input from "./Components/Input";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/chat" element={<Chat />} />
    //   </Routes>
    // </BrowserRouter>
    <Input/>
  );
}

export default App;
