import useAuth from "./hooks/useAuth";
import AppRouter from "./routes/AppRouter";

function App() {
  const {loading} = useAuth()

  if(loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    )
  }
  

  return (
    <div className="min-h-screen">
      <AppRouter />
    </div>
  );
}

export default App;
