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
import Equity from './Components/Products/Equity';
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
import InflationCalculator from './Components/Calculators/InflationCalculator';
import HumanLifeValueCalculator from './Components/Calculators/HumanLifeValueCalculator';
import LumpsumTargetCalculator from './Components/Calculators/LumpsumTargetCalculator';
import LumpsumCalculator from './Components/Calculators/LumpsumCalculator';
import EducationPlanner from './Components/Calculators/EducationPlanner';
import NetWorthCalculator from './Components/Calculators/NetWorthCalculator';
import DisclaimerPage from './Components/Disclaimer';
import PrivacyPolicy from './Components/PrivacyPolicy';
import TermsAndConditions from './Components/TermsAndConditions';

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
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/terms&condition" element={<TermsAndConditions />} />
          <Route path="/mutualfund" element={<MutualFund />} />
          <Route path="/equity" element={<Equity />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/loan" element={<Loan />} />
          <Route path="/structuredproducts" element={<StructuredProduct />} />
          <Route path="/become-a-crorepati-calculator" element={<CrorepatiCalculator />} />
          <Route path="/sip-calculator" element={<SIPCalculator />} />
          <Route path="/mf-sip-step-up-calculator" element={<StepUpSIPCalculator />} />
          <Route path="/goal-based-top-up-sip-calculator" element={<GoalTopUpSIPCalculator />} />
          <Route path="/target-amount-sip-calculator" element={<TargetAmountSIPCalculator />} />
          <Route path="/sip-with-annual-increase-calculator" element={<SIPAnnualIncreaseCalculator />} />
          <Route path="/retirement-planning-calculator" element={<RetirementPlanningCalculator />} />
          <Route path="/ppf-calculator" element={<PPFCalculator />} />
          <Route path="/epf-calculator" element={<EPFCalculator />} />
          <Route path="/asset-allocation-calculator" element={<AssetAllocationCalculator />} />
          <Route path="/home-loan-emi-calculator" element={<HomeLoanCalculator />} />
          <Route path="/personal-loan-emi-calculator" element={<PersonalLoanCalculator />} />
          <Route path="/car-loan-emi-calculator" element={<CarLoanCalculator />} />
          <Route path="/education-loan-emi-calculator" element={<EducationLoanCalculator />} />
          <Route path="/goal-setting-calculator" element={<GoalSettingCalculator />} />
          <Route path="/financial-goal-planner-calculator" element={<CompositeGoalPlanner />} />
          <Route path="/cost-inflation-index-calculator" element={<CostInflationIndexCalculator />} />
          <Route path="/compounding-calculator" element={<CompoundingCalculator />} />
          <Route path="/spending-less-calculator" element={<SpendingLessCalculator />} />
          <Route path="/future-value-inflation-calculator" element={<InflationCalculator />} />
          <Route path="/human-life-value-calculator" element={<HumanLifeValueCalculator />} />
          <Route path="/lumpsum-target-calculator" element={<LumpsumTargetCalculator />} />
          <Route path="/lumpsum-calculator" element={<LumpsumCalculator />} />
          <Route path="/children-education-planner-calculator" element={<EducationPlanner />} />
          <Route path="/net-worth-calculator" element={<NetWorthCalculator />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
