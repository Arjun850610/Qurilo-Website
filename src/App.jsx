import CompletedProjectsSection from './pages/HighlightSection'
import CRM from './pages/CRM'
import DevelopmentSection from './pages/DevelopmentSection'
import ERP from './pages/ERP'

const App = () => {
  return (
    <div className='w-full'>
      <CRM />
      {/* <ERP /> */}
      <CompletedProjectsSection />
      <DevelopmentSection />
    </div>
  )
}

export default App  