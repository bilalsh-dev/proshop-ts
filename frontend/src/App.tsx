import { Footer, Header } from "components";

import { Container } from "@/lib/react-bootstrap";
import { Outlet } from "@/lib/react-router-dom";
import { ToastContainer } from "@/lib/react-toastify";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
