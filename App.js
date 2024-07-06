import { BrowserRouter,Route,Routes} from "react-router-dom";

import Layout from "./Layout";

import Home from "./Home";

import Blogs from "./Blogs";

import Contact from "./Contact";

import NoPage from "./NoPage";
import MyForm from "./MyForm";
import Counter from "./Counter";
import Component from "./Component";

function App() {

 return (

   <BrowserRouter>

    <Routes>

    <Route path="/" element={<Layout />} >

     <Route index element={<Home />} />

     <Route path="blogs" element={<Blogs />} />

     <Route path="contact" element={<Contact />} />
     <Route path="MyForm" element={<MyForm />} />

     <Route path="Counter" element={<Counter />} />
     <Route path="Component" element={<Component />} />

     <Route path="*" element={<NoPage />} />

     </Route>

   </Routes>

  </BrowserRouter>

 );

}

export default App;