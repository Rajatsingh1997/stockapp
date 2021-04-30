import React,{useEffect,useState} from 'react'
import "./Maincompo.css"
import axios from "axios";
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Table,
  Button
} from "react-bootstrap";
import { Link} from "react-router-dom";

function Maincompo() {
    const [notes, getNotes] = useState([]);
    useEffect(() => {
        getAllNotes();
      }, []);
      const getAllNotes = () => {
        axios
          .get(
            `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=BA&apikey=demo`
          )
          .then((response) => {
            const allNotes = response.data.bestMatches;
            getNotes(allNotes);
          })
          .catch((error) => console.error(`Error: ${error}`));
      };
    return (
        <div className="mt-4">
        <Container>
          <Navbar bg="white" variant="light" className="forBorder">
            <Navbar.Brand href="#home">Stock Details Table</Navbar.Brand>
            <Nav className="mr-auto" className="ml-5">
            </Nav>
          </Navbar>
          <Table striped bordered hover size="sm" className="forBottamshadow">
            <thead className="text-center colorForword">
              <tr>
                <th>Company Name</th>
                <th>Symbol</th>
                <th>Market cap</th>
                <th>Current Price</th>
              </tr>
            </thead>
            <tbody className="text-align forBottamshadow">
              {notes &&
                notes?.length &&
                notes?.map((val, key) => {
                  return (
                    <React.Fragment key={key}>
                    {console.log(val,'valvalval',val['2. name'])}
                      <tr>
                        <td className="text-center align">{val['2. name']}</td>
                        <td> <Button variant="primary" size="sm" className="buttonSmall">
                        {val['1. symbol']}
      </Button>{' '}</td>
                        <td> {val['6. marketClose']} 
                        <Link to="/view">
                        <Button variant="primary" size="sm" className="float-right viewButton">
         view
      </Button></Link></td>
                        <td className="text-center">{val['8. currency']}</td>
                      </tr>
                    </React.Fragment>
                  );
                })}
            </tbody>
          </Table>
        </Container>
      </div>
    )
}

export default Maincompo
