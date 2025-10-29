import { Suspense, lazy } from "react";

const RemoteWidget = lazy(() => import("remote/Widget"));

function App() {
  return (
    <div>
      <h1>Host App</h1>
      <Suspense fallback={<div>Loading remote widget...</div>}>
        <RemoteWidget />
      </Suspense>
    </div>
  );
}

export default App;
