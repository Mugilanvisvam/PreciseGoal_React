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
import HomeLoanCalculator from './Components/Calculators/HomeLoanCalculator';
import PersonalLoanCalculator from './Components/Calculators/PersonalLoanCalculator';
import CarLoanCalculator from './Components/Calculators/CarLoanCalculator';
import EducationLoanCalculator from './Components/Calculators/EducationLoanCalculator';
import GoalSettingCalculator from './Components/Calculators/GoalSettingCalculator';
import CompositeGoalPlanner from './Components/Calculators/CompositeGoalPlanner';
import CostInflationIndexCalculator from './Components/Calculators/CostInflationIndexCalculator';
import CompoundingCalculator from './Components/Calculators/CompoundingCalculator';
import SpendingLessCalculator from './Components/Calculators/SpendingLessCalculator';
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
          <Route path="/homeloanemicalculator" element={<HomeLoanCalculator />} />
          <Route path="/personalloanemicalculator" element={<PersonalLoanCalculator />} />
          <Route path="/carloanemicalculator" element={<CarLoanCalculator />} />
          <Route path="/educationloanemicalculator" element={<EducationLoanCalculator />} />
          <Route path="/goalsettingcalculator" element={<GoalSettingCalculator />} />
          <Route path="/financialgoalplannercalculator" element={<CompositeGoalPlanner />} />
          <Route path="/costinflationindexcalculator" element={<CostInflationIndexCalculator />} />
          <Route path="/compoundingcalculatorcalculator" element={<CompoundingCalculator />} />
          <Route path="/spendinglesscalculatorcalculator" element={<SpendingLessCalculator />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
