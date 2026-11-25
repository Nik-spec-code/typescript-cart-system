import { Toaster } from "@/components/ui/sonner";
import router from "@/Routes/Route";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
};

export default App;
