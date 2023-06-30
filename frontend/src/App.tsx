

import { HeaderClient } from "./components/HeaderClient";
import { ButtomPrimary } from "./components/ButtonPrimary";

import "./App.css";
import { ButtomInverse } from "./components/ButtonInverse";
import { ProductDetailsCard } from "./components/ProductDetailsCard";

function App() {
  return (
    <>
      <HeaderClient />
      <main>
        <section className="dsc-container">
          <ProductDetailsCard />
          
          <div className="dsc-btn-page-container">
            <ButtomPrimary />
            <ButtomInverse />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
