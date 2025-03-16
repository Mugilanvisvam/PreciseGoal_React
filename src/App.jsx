import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopBar from './Components/TopBar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About'; 
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import MutualFund from './Components/Products/MutualFund';
import Insurance from './Components/Products/Insurance';
import Loan from './Components/Products/Loan';
import StructuredProduct from './Components/Products/StructuredProduct';
import CrorepatiCalculator from './Components/Calculators/CrorepatiCalculator';
import SIPCalculator from './Components/Calculators/SIPCalculator';
import StepUpSIPCalculator from './Components/Calculators/StepUpSIPCalculator';
import GoalTopUpSIPCalculator from './Components/Calculators/GoalTopUpSIPCalculator';
import TargetAmountSIPCalculator from './Components/Calculators/TargetAmountSIPCalculator';
import SIPAnnualIncreaseCalculator from './Components/Calculators/SIPAnnualIncreaseCalculator';
import RetirementPlanningCalculator from './Components/Calculators/RetirementPlanningCalculator';
import PPFCalculator from './Components/Calculators/PPFCalculator';
import EPFCalculator from './Components/Calculators/EPFCalculator';
import AssetAllocationCalculator from './Components/Calculators/AssetAllocationCalculator';
function App() {
  return (
    <Router>
      <div className="App">
        <TopBar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Services />} />
          <Route path="/mutualfund" element={<MutualFund />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/loan" element={<Loan />} />
          <Route path="/structuredProduct" element={<StructuredProduct />} />
          <Route path="/becomeacrorepaticalculator" element={<CrorepatiCalculator />} />
          <Route path="/sipcalculatorcalculator" element={<SIPCalculator />} />
          <Route path="/mfsipstepupcalculator" element={<StepUpSIPCalculator />} />
          <Route path="/goalbasedtopupsipcalculator" element={<GoalTopUpSIPCalculator />} />
          <Route path="/targetamountsipcalculator" element={<TargetAmountSIPCalculator />} />
          <Route path="/sipwithannualincreasecalculator" element={<SIPAnnualIncreaseCalculator />} />
          <Route path="/retirementplanningcalculator" element={<RetirementPlanningCalculator />} />
          <Route path="/ppfcalculatorcalculator" element={<PPFCalculator />} />
          <Route path="/epfcalculatorcalculator" element={<EPFCalculator />} />
          <Route path="/assetallocationcalculator" element={<AssetAllocationCalculator />} />



        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
