import ReactDOM from "react-dom/client"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import App from "./App"
import "./index.css"
import { ThemeProvider } from "@mui/material"
import { theme } from "./utils/index"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <App />
      <ToastContainer />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </ThemeProvider>
)
