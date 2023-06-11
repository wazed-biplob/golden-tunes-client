import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
import AuthProviders from "./Providers/AuthProviders";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import VarsProviders from "./Providers/VarsProviders";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <VarsProviders>
        <QueryClientProvider client={queryClient}>
          <>
            <div className="max-w-screen-xl mx-auto">
              <RouterProvider router={router} />
            </div>
          </>
        </QueryClientProvider>
      </VarsProviders>
    </AuthProviders>
  </React.StrictMode>
);
