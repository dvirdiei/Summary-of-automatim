import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import NerodeTheoremPage from './pages/NerodeTheoremPage';
import PumpingLemmaPage from './pages/PumpingLemmaPage';
import DFAPage from './pages/DFAPage';
import NFAPage from './pages/NFAPage';
import RegexPage from './pages/RegexPage';
import GenericTopicPage from './pages/GenericTopicPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nerode" element={<NerodeTheoremPage />} />
          <Route path="/pumping" element={<PumpingLemmaPage />} />
          <Route path="/dfa" element={<DFAPage />} />
          <Route path="/nfa" element={<NFAPage />} />
          <Route path="/regex" element={<RegexPage />} />
          
          {/* Generic route for other topics */}
          <Route path="/cfg" element={<GenericTopicPage />} />
          <Route path="/pda" element={<GenericTopicPage />} />
          <Route path="/turing" element={<GenericTopicPage />} />
          <Route path="/subset-construction" element={<GenericTopicPage />} />
          <Route path="/minimization" element={<GenericTopicPage />} />
          <Route path="/cyk" element={<GenericTopicPage />} />
          <Route path="/lexical-analysis" element={<GenericTopicPage />} />
          <Route path="/pattern-matching" element={<GenericTopicPage />} />
          <Route path="/protocol-verification" element={<GenericTopicPage />} />
          <Route path="/topic/:topicId" element={<GenericTopicPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;