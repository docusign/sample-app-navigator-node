import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./lang/i18n";
import Home from "./pages/home";
import Agreements from "./pages/agreements";
import AgreementDetails from "./pages/agreementDetails";
import AuthCallback from "../src/pages/home/components/authCallback/authCallback";
import { ConfigProvider } from "antd";
import { ROUTE } from "./constants/routes";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store";
import Loader from "./components/loader/loader";
import { providerTheme } from "./constants/antTheme";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConfigProvider theme={providerTheme}>
          <Router>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path={ROUTE.ROOT} element={<Home />} />
                <Route path={ROUTE.AGREEMENTS} element={<Agreements />} />
                <Route path={ROUTE.AUTH_CALLBACK} element={<AuthCallback />} />
                <Route
                  path={ROUTE.AGREEMENT_DETAILS}
                  element={<AgreementDetails />}
                />
              </Routes>
            </Suspense>
          </Router>
        </ConfigProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
