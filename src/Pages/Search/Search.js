import { Button, createTheme, TextField } from "@material-ui/core";
import { useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import SearchIcon from '@material-ui/icons/Search';

function Search() {
	const [type, settype] = useState(0);

	const darckTheme = createTheme({
		palette: {
			type: "dark",
		},
	});

	return (
		<div>
			<ThemeProvider theme={darckTheme}>
				<div style={{ display:"flex"}}>
					<TextField
						style={{ flex: 1 }}
						className="searchBox"
						label="Search"
						variant="filled"
						//onChange={(e) => setSearchText(e.target.value)}
					/>
                    <Button 
                    variant="contained"
                    style={{ marginLeft: 10 }}
                    
                    > <SearchIcon/> </Button>
                    
				</div>
			</ThemeProvider>
		</div>
	);
}

export default Search;
