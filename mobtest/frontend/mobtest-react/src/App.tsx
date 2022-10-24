import { QueryClient, QueryClientProvider } from "react-query";
import ModalButton from "./components/ModalButton";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ModalButton />
      </QueryClientProvider>
    </div>
  );
}

export default App;
