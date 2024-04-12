import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import{QueryClient, QueryClientProvider} from "@tanstack/react-query";
import "./assets/reset.css";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
   <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>);
