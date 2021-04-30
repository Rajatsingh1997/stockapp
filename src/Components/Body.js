import React, { useEffect, useState } from "react";
import "./Body.css";
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
import Pagination from "./Pagination";
function Body() {
  const [notes, getNotes] = useState([]);
  const[final,setFinal]=useState([]);
  const [showPerPage, setShowPerPage] = useState(5);
  const [pagination, setPagination] = useState({
    start: 1,
    end: showPerPage,
  });
  const [search, setSearch] = useState("");
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
  console.log(notes, "ttttttttttttttttt");
  const onPaginationchange = (start, end) => {
    setPagination({ start: start, end: end });
  };
const handleSearch=(e)=>{
const temp=[...notes]
const tempsecond=temp.filter(val=>val['2. name']?.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1)

getNotes(tempsecond)
}
 const handleDelele=(index)=>{
 const updatedNotes=[...notes]
 const list=updatedNotes.filter((val,key)=>key!==index)
  getNotes(list)
  }

  return (
    <div className="mt-4">
      <Container>
        <Navbar bg="white" variant="light" className="forBorder">
          <Navbar.Brand href="#home">Stock Details Table</Navbar.Brand>
          <Nav className="mr-auto" className="ml-5">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search By Company Name"
                className="mr-sm-2"
                onChange={(e)=>handleSearch(e)}
              />
            </Form>
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
              notes.length &&
              notes.slice(pagination.start, pagination.end).map((val, key) => {
                return (
                  <React.Fragment key={key}>
                  {console.log(val,'valvalval',val['2. name'])}
                    <tr>
                      <td className="text-center align">{val['2. name']}</td>
                      <td> <Button variant="primary" size="sm" className="buttonSmall">
                      {val['1. symbol']}
    </Button>{' '}</td>
                      <td> {val['6. marketClose']} <Button variant="primary" size="sm" className="float-right deleteButton" onClick={()=>handleDelele(key)}>
       Delete
    </Button>{' '}</td>
                      <td className="text-center">{val['8. currency']}</td>
                    </tr>
                  </React.Fragment>
                );
              })}
          </tbody>
        </Table>
        <Pagination
          showPerPage={showPerPage}
          seaching={search}
          onPaginationchange={onPaginationchange}
        />
      </Container>
    </div>
  );
}

export default Body;
