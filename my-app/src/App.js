import Banner from "./components/Banner";
import Card from "./components/Card";
import CardSection from "./components/CardSection";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import videos from "./json/db.json"

function App() {
  return (
    <>
    <Header />
    <Banner image="home"/>
    <Container>
    <h2>Geografia </h2>
    <CardSection >
      {
        videos.map((video) => <Card id={video.id} key={video.id}/>)
      }
    </CardSection>
    </Container>
    <Footer />
  </>
  );
}
export default App;