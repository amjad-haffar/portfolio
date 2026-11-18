import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SiteLayout } from './components/SiteLayout';
import Home from './pages/Home';
import LifeLately from './pages/LifeLately';
import { useVisitNotification } from './hooks/useVisitNotification';

export default function App() {
  useVisitNotification();
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/lately" element={<LifeLately />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

