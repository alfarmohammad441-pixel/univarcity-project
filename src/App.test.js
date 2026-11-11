import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import App from './App.jsx';
import Authprovider from "./context/Authcontext";

test('renders the login page', () => {
  render(
    <MemoryRouter initialEntries={["/login"]}>
      <Authprovider>
        <App />
      </Authprovider>
    </MemoryRouter>
  );

  expect(screen.getByText("Welcome Back!")).toBeInTheDocument();
});
