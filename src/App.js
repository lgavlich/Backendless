import { Routes, Route } from "react-router-dom";
import DummyList from "./tabs/dummyList";
import DummyTable from "./tabs/dummyTable";
import DummyChart from "./tabs/dummyChart";
import NavigationList from "./navigation/navigation";
function App() {
  return (
    <div className="main">
      <NavigationList />
      <Routes>
        <Route path="/dummyList" element={<DummyList />} />
        <Route path="/dummyTable" element={<DummyTable />} />
        <Route path="/dummyChart" element={<DummyChart />} />
      </Routes>
    </div>
  );
}

export default App;
