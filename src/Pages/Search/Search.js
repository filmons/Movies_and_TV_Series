import { createTheme, TextField } from "@material-ui/core";
import { useState } from "react";
import { ThemeProvider } from "@material-ui/styles";

function Search() {
	const [type, settype] = useState(0);



    const darckTheme = createTheme({
        palette:{
            type:"dark"
        }
        
        })

	return (
		<div>

            <ThemeProvider theme={darckTheme}>


			<TextField
				style={{ flex: 1 }}
				className="searchBox"
				label="Search"
				variant="filled"
				//onChange={(e) => setSearchText(e.target.value)}
			/>
                </ThemeProvider>
		</div>
	);
}

export default Search;
