import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./componentes/Home";
import { ItemDetail } from "./componentes/Item/ItemDetail";
import { ItemList } from "./componentes/Item/ItemList";
import theme from "./Theme/Theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Home>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="items" element={<ItemList />} />
            <Route path="items/:itemId" element={<ItemDetail />} />
          </Routes>
        </Home>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
