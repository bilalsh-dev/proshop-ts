import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>welcome to proshop</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
