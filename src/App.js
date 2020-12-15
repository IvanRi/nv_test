import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./utils/globalStyles";
import { theme } from "./utils/theme";
import Home from "./components/templates/Home";
//redux config
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppLayout>
          <Home />
        </AppLayout>
      </ThemeProvider>
    </Provider>
  );
}

const AppLayout = styled.div`
  background-color: ${({ theme }) => theme.palette.background};
  overflow: auto;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default App;
