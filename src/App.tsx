import { useAuth } from "context/auth-context";
import { UnauthenticatedApp } from "unauthenticated-app";
import { AuthenticatedApp } from "authenticated-app";
import { FullPageErrorFallback } from "components/libs";
import { ErrorBoundary } from "components/error-boundary";
// import "./App.css";
function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      <ErrorBoundary fallbackRender={FullPageErrorFallback}>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </ErrorBoundary>
    </div>
  );
}

export default App;
