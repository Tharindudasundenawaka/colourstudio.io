import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import Error from "./pages/Error/Error";
import SharedLayout from "./pages/SharedLayout/SharedLayout";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import SharedProductLayout from "./pages/SharedProductLayout/SharedProductLayout";
import Scroll from "./components/ScrollToTopButton/ScrollToTopButton";
import SharedCategoryLayout from "./pages/SharedCategoryLayout/SharedCategoryLayout";
import WoodPaint from "./pages/WoodPaint/WoodPaint";
import AutoPaint from "./pages/AutoPaint/AutoPaint";
import Wax from "./pages/Wax/Wax";
import AutoPaintProductsCatergory from "./pages/AutoPaintProductsCatergory/AutoPaintProductsCatergory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />

          <Route path="about" element={<About />} />

          <Route path="products" element={<SharedProductLayout />}>
            <Route index element={<Products />} />
            <Route path=":productId" element={<SingleProduct />} />
          </Route>

          {/*  */}
          <Route path="categoryAutoPaint" element={<SharedCategoryLayout />}>
            <Route path=":category" element={<AutoPaint />} />
          </Route>

          <Route
            path="autoPaintProductsCatergory"
            element={<SharedCategoryLayout />}
          >
            <Route path=":category" element={<AutoPaintProductsCatergory />} />
          </Route>

          <Route path="categoryWoodPaint" element={<SharedCategoryLayout />}>
            <Route path=":category" element={<WoodPaint />} />
          </Route>

          <Route path="categoryWax" element={<SharedCategoryLayout />}>
            <Route path=":category" element={<Wax />} />
          </Route>
          {/*  */}

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      <Scroll />
    </BrowserRouter>
  );
}

export default App;
