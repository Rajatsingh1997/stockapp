import React, { useState, useEffect } from "react";
import { Pagination } from "react-bootstrap";

function Pagenation({ showPerPage, onPaginationchange, seaching }) {
  const [counter, setCounter] = useState(1);
  const[total,setTotal]=useState(9)
  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationchange(value - showPerPage, value);
  }, [counter]);
  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (Math.ceil(total / showPerPage) === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };
  console.log(showPerPage, "pppppppppppppp");
  return (
    <div className="d-flex  justify-content-end">
      <Pagination>
 <Pagination.Prev 
      onClick={() => onButtonClick("prev")}
          disabled={counter === 1 ? true : false}
 />
 <Pagination.Next 
      onClick={() => onButtonClick("next")}
          disabled={counter === Math.ceil(total / showPerPage) ? true : false}
 />
</Pagination>
    </div>
  );
}
export default Pagenation;