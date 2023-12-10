import OrderSummary from "./components/OrderSummary"

function App() {
  return (
    <main className="bg-no-repeat bg-contain bg-[#E0E8FF] bg-[url('/images/pattern-background-mobile.svg')] md:bg-[url('/images/pattern-background-desktop.svg')] min-h-screen flex justify-center items-center font-redhatdisplay">
      <OrderSummary />
    </main>
  )
}

export default App
