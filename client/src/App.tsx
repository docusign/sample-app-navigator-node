import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./lang/i18n";
import Home from "./pages/home";
import Agreements from "./pages/agreements";
import AgreementDetails from "./pages/agreementDetails";
import { ROUTE } from "./constants/routes";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path={ROUTE.ROOT} element={<Home />} />
              <Route path={ROUTE.AGREEMENTS} element={<Agreements />} />
              <Route
                path={ROUTE.AGREEMENT_DETAILS}
                element={<AgreementDetails />}
              />
            </Routes>
          </Suspense>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;