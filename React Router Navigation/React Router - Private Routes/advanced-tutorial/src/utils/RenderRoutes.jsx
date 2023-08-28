import { Route, Routes } from "react-router-dom";
import { routes } from "./Navigation";
import NotFound from "../pages/NotFound";

export default function RenderRoutes() {

  return (
    <Routes>
      {routes.map((route, index) => {
        // display all the routes
        return (
          <Route
            key={index}
            path={route.path}
            element={route.element}
          ></Route>
        );

      })}
      {/* to catch invalid routes */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
