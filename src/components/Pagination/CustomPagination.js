import React from "react";
import { createTheme, ThemeProvider } from '@material-ui/core';
import Pagination  from '@material-ui/lab/Pagination';

const darckTheme = createTheme({
palette:{
    type:"dark"
}

})



const CustomPagination = ({setPage,numOfPages =10}) => {

    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
      };

    return (
        <div
        style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
            <ThemeProvider theme={darckTheme}>
           <Pagination count={numOfPages}
            onchange={(e) => handlePageChange(e.target.textContent)}
            color="primary"
            hideNextButton
            hidePrevButton
           />
           </ThemeProvider>
        </div>
    );
}

export default CustomPagination
