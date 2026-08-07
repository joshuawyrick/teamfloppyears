import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import BoardAndTrain from './pages/BoardAndTrain'
import DogTraining from './pages/DogTraining'
import DogBoarding from './pages/DogBoarding'
import AggressiveDogTraining from './pages/AggressiveDogTraining'
import ReactiveDogTraining from './pages/ReactiveDogTraining'
import PuppyTraining from './pages/PuppyTraining'
import PrivateTraining from './pages/PrivateTraining'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Contact from './pages/Contact'
import BookEvaluation from './pages/BookEvaluation'
import FAQ from './pages/FAQ'
import Facility from './pages/Facility'
import MeetTheTeam from './pages/MeetTheTeam'
import Results from './pages/Results'
import Reviews from './pages/Reviews'
import TrainingMethods from './pages/TrainingMethods'
import SafetyAndCare from './pages/SafetyAndCare'
import ServiceAreas from './pages/ServiceAreas'
import DogObedience from './pages/DogObedience'
import OffLeash from './pages/OffLeash'
import Daycare from './pages/Daycare'
import BoardingReactive from './pages/BoardingReactive'
import Resources from './pages/Resources'
import NotFound from './pages/NotFound'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="board-and-train" element={<BoardAndTrain />} />
          <Route path="dog-training" element={<DogTraining />} />
          <Route path="dog-boarding" element={<DogBoarding />} />
          <Route path="aggressive-dog-training" element={<AggressiveDogTraining />} />
          <Route path="reactive-dog-training" element={<ReactiveDogTraining />} />
          <Route path="puppy-training" element={<PuppyTraining />} />
          <Route path="private-dog-training" element={<PrivateTraining />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="book-evaluation" element={<BookEvaluation />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="facility" element={<Facility />} />
          <Route path="meet-the-team" element={<MeetTheTeam />} />
          <Route path="dog-training-results" element={<Results />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="training-methods" element={<TrainingMethods />} />
          <Route path="safety-and-care" element={<SafetyAndCare />} />
          <Route path="service-areas" element={<ServiceAreas />} />
          <Route path="dog-obedience-training" element={<DogObedience />} />
          <Route path="off-leash-dog-training" element={<OffLeash />} />
          <Route path="dog-daycare" element={<Daycare />} />
          <Route path="boarding-reactive-aggressive-dogs" element={<BoardingReactive />} />
          <Route path="resources" element={<Resources />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
