import react from 'react'
import {Navbar,Container} from "react-bootstrap"
function Header() {
    return (
      <>      
            <Navbar style={styles} fixed="top">
                <Container fluid >
                    <Navbar.Brand href="#" className="mainText" style={styles.mainText}>Album List</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <span className='explainText' style={styles.explainText}>A Collection Of Albums</span>
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
      </>
    );
  }
const styles={
    backgroundColor:"white",
    padding:"3px 30px",
    boxShadow:"0 5px 10px 1px #eee",

    mainText:{
        fontSize:"1.9rem",
        fontWeight:"bold",
        fontFamily:'Crimson Text',
        color:"red"
    },
    explainText:{
        fontFamily:'Crimson Text',
        color:"DodgerBlue"
    }
}
  export default Header;