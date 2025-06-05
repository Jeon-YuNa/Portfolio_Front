import React from "react";
import ReactDOM from "react-dom/client";
import { AnimatePresence } from "framer-motion";
import MainPage from "./pages/main/Main";
import SkillPage from "./pages/skill/SkillPage";

const App = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <MainPage key={router.pathname} />
      <SkillPage key={router.pathname} />
      <ProjectPage key={router.pathname} />
      <VisitorsPage key={router.pathname} />
    </AnimatePresence>
    // <AnimatePresence>
    //   <BrowserRouter>
    //     <HashRouter>
    //       <Routes>
    //         <Route path="/" element={<MainPage />} />
    //         <Route path="/skill" element={<SkillPage />} />
    //       </Routes>
    //     </HashRouter>
    //   </BrowserRouter>
    // </AnimatePresence>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
