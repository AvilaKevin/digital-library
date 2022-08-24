import { Route, Routes, BrowserRouter } from "react-router-dom";
import Index from '../Pages/Index';
import Create from "../Pages/Create";
import View from "../Pages/View";
import Store from "../Store/store";

function App() {
  return (
    <Store>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="create" element={<Create />} />
          // :bookId Va a cambiar dependiendo del titulo del libro.
          <Route path="View/:bookId" element={<View />} />
        </Routes>
      </BrowserRouter>
    </Store>
  );
}

export default App;
