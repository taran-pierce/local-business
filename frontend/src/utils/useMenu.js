import {
  useState,
  useContext,
  createContext,
} from 'react';

const LocalContext = createContext({});
const LocalContextProvider = LocalContext.Provider;

function ContextProvider({ children }) {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  function toggleNavigation() {
    setIsNavigationOpen(!isNavigationOpen);
  }

  function closeNavigation() {
    setIsNavigationOpen(false);
  }

  function openNavigation() {
    setIsNavigationOpen(true);
  }

  return (
    <LocalContextProvider value={{
      isNavigationOpen,
      setIsNavigationOpen,
      toggleNavigation,
      closeNavigation,
      openNavigation,
    }}>
      {children}
    </LocalContextProvider>
  );
}

function useMenu() {
  return useContext(LocalContext);
}

export {
  useMenu,
  ContextProvider,
}
