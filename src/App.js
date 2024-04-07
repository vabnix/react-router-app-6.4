import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/faq";
import Contact, { ContactAction } from "./pages/help/contact";
import PageNotFound from "./pages/PageNotFound";
import CareerPage, { careerDetailLoader } from "./pages/career/CareerPage";
import CareerNotFound from "./pages/career/CareerNotFound";
//data loader
import Careers, { careersLoader } from "./pages/career/Careers";
//Layout
import RootLayout from "./layout/RootLayout";
import HelpLayout from "./layout/HelpLayout";
import CareerLayout from "./layout/CareerLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />}/>
        <Route path="contact" action={ContactAction} element={<Contact/>} />
      </Route>

      <Route path="careers" element={<CareerLayout />}>
          <Route 
              index 
              element={<Careers />}
              loader={careersLoader}  
              />
          <Route 
            path=":id" 
            loader={careerDetailLoader}
            element={<CareerPage />}
            errorElement={<CareerNotFound/>}  
            />
      </Route>

      <Route path="*" element={<PageNotFound />}/>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
