import Album from "./Component/album";
import alimg from './image/album.jpg'
import Header from "./Component/Header"


function App() {
  return (
    <>
      <div className="App" style={styles}>
        <Header className="Header"/>
        <Album image={alimg}/>
      </div>
    </>
  );
}

const styles={
  //margin:"50px"
}
export default App;
