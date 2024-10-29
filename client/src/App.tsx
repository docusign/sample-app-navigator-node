import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./lang/i18n";
import Home from "./pages/home";
import Agreements from "./pages/agreements";
import AgreementDetails from "./pages/agreementDetails";
import { ConfigProvider } from "antd";
import { ROUTE } from "./constants/routes";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#9e9d9f",
              borderRadius: 100,
              colorBgContainer: "#ffffff",
              fontSize: 14,
              colorPrimaryBg: "#ffffff",
              colorPrimaryBgHover: "#9e9d9f",
              colorBorder: "#9e9d9f",
            },
            components : {
              Select: {
                colorTextPlaceholder: '#9e9d9f',
                colorPrimary: "#cecdd0",
                colorPrimaryBgHover: "#9e9d9f",
                colorPrimaryText: '#9e9d9f',
                hoverBorderColor: '#cecdd0',
                colorBorderSecondary: '#cecdd0',
              },
              DatePicker: {
                colorTextPlaceholder: '#9e9d9f',
                colorPrimary: '#5855FF',
                borderRadius: 100,
                borderRadiusOuter: 100,
              }
            }
          }}
        >
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
        </ConfigProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
