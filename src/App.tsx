import Footer from "./components/Footer"
import OrderSummary from "./components/OrderSummary"

function App() {
  return (
    <main className="bg-no-repeat bg-contain bg-[#E0E8FF] bg-[url('/images/pattern-background-mobile.svg')] md:bg-[url('/images/pattern-background-desktop.svg')] min-h-screen flex flex-col justify-center items-center font-redhatdisplay gap-8">
      <OrderSummary />
      <Footer />
    </main>
  )
}

export default App
