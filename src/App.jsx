
import Header from "./Header";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="flex items-center py-10 h-screen flex-col  lg:w-full
    ">
      <Header />
      <Toaster
        gutter={24}
        toastOptions={{
          success: {
            style: {
              background: "tale",
              color: "black",
            },
          },
          error: {
            style: {
              background: "tale",
              color: "black",
            },
          },
        }}
      />
    </div>
  );
}

export default App;
