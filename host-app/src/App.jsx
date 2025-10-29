import { Suspense, lazy } from "react";

const RemoteWidgetApp = lazy(() => import("remote/WidgetApp"));

function App() {
  return (
    <div>
      <h1>Host App</h1>
      <Suspense fallback={<div>Loading remote widget app...</div>}>
        <RemoteWidgetApp />
      </Suspense>
    </div>
  );
}

export default App;
