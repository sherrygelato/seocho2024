import "./App.css";
import My from "./components/My";
import { SessionProvider } from "./hooks/session-context";

function App() {

  return (
    <>
      <SessionProvider>
        <My/>
      </SessionProvider>
    </>
  );
}

export default App;