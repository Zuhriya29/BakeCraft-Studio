import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import Home from './pages/Home.jsx'
import BasicBakingTechnique from './components/BasicBakingTechniques.jsx';
import CupcakeDecorationMastery from './components/CupcakeDecorationMastery.jsx';
import ArtisanBreadMaking from './components/ArtisanBreadMaking.jsx';
import PastryPerfection from './components/PastryPerfection.jsx';
import ChocolateCreations from './components/ChocolateCreations.jsx';
import AdvancedCakeDecorating from './components/AdvancedCakeDecorating.jsx';
import HealthyBaking from './components/HealthyBaking.jsx';
import BusinessBakingEssentials from './components/BusinessBakingEssentials.jsx';
import DessertPlatingandPresentation from './components/DessertPlatingandPresentation.jsx';
import SeasonalSpecialties from './components/SeasonalSpecialties.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basic-baking-technique" element={<BasicBakingTechnique />} />
        <Route path="/cupcake-decoration-mastery" element={<CupcakeDecorationMastery />} />
        <Route path="/artisan-bread-making" element={<ArtisanBreadMaking />} />
        <Route path="/pastry-perfection" element={<PastryPerfection />} />
        <Route path="/chocolate-creations" element={<ChocolateCreations />} />
        <Route path="/advanced-cake-decorating" element={<AdvancedCakeDecorating />} />
        <Route path="/healthy-baking" element={<HealthyBaking />} />
        <Route path="/business-baking-essentials" element={<BusinessBakingEssentials />} />
        <Route path="/dessert-platingand-presentation" element={<DessertPlatingandPresentation />} />
        <Route path="/seasonal-specialties" element={<SeasonalSpecialties />} />
      </Routes>
    </Router>
  )
}

export default App
