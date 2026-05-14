import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PortfolioTemplates from './pages/PortfolioTemplates';
import Template1Portfolio from './portfolios/template-1-yashasvi/PortfolioPage';
import Template2Portfolio from './portfolios/template-2-anushka/PortfolioPage';
import Template3Portfolio from './portfolios/template-3-snehashish/PortfolioPage';
import Template4Portfolio from './portfolios/template-4-chandini/PortfolioPage';
import Template5Portfolio from './portfolios/template-5-prasad/PortfolioPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioTemplates />} />
        <Route path="/portfolio-templates" element={<PortfolioTemplates />} />
        <Route path="/portfolio/template-1" element={<Template1Portfolio />} />
        <Route path="/portfolio/template-2" element={<Template2Portfolio />} />
        <Route path="/portfolio/template-3" element={<Template3Portfolio />} />
        <Route path="/portfolio/template-4" element={<Template4Portfolio />} />
        <Route path="/portfolio/template-5" element={<Template5Portfolio />} />
        <Route path="*" element={<PortfolioTemplates />} />
      </Routes>
    </Router>
  );
}

export default App;
