import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from '../src/pages/Main.js';
import Main_Copy from '../src/pages/Main_Copy.js';
import PrintablePage from '../src/pages/PrintablePage.js';
function App() {
  return (
    <Router>
        <Routes>
        {/* <Route path="/signin" element={<SignIn />} />
        <Route path="/createCourse" element={<CourseCreate />} /> */}
        {/* <Route path="/" element={<Main />} /> */}
        <Route path="/" element={<Main_Copy />} />
        <Route path="/print" element={<PrintablePage />} />
        </Routes>
  </Router>
  );
}

export default App;
