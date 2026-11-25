import { Toaster } from "@/components/ui/sonner";
import router from "@/Routes/Route";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="bottom-right" />
    </>
  );
};

export default App;
