import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";

import { Home } from "./pages/Home";

function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export { Router };
