// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import classes from "./App.css";
import ImageCard from "./components/ImageCard";
import { IconContext } from "react-icons";
import NavigationBar from "./components/NavigationBar";
import {
  FormControl,
  InputGroup,
  Row,
  Button,
  Container,
} from "react-bootstrap";
// import Saved from './components/Saved';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./components/theme";
import DarkModeToggle from "react-dark-mode-toggle";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {
  const API_URL = "https://picsum.photos/v2/list?limit=6";
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [visible, setVisible] = useState();
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState("light");

  const [isDarkMode, setIsDarkMode] = useState(() => false);

  const themeToggle = () => {
    theme === "light"
      ? setTheme("dark") && setIsDarkMode(() => true)
      : setTheme("light") && setIsDarkMode(() => false);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setVisible(false);
      });
  }, []);

  if (isLoading)
    return <h2 className="justify-content-md-center">Photos Loading...</h2>;

  if (error) return <h2>Error..</h2>;

  const filterAuthor = images.filter((image) => {
    return image.author.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <IconContext.Provider value={{ color: "#5d80f2", size: "2em" }}>
          <NavigationBar />

          <Button
            size="sm"
            className={classes.Button}
            variant="light"
            onClick={() => themeToggle()}
          >
            <DarkModeToggle
              onChange={setIsDarkMode}
              checked={isDarkMode}
              size={65}
              speed={2.4}
            />
          </Button>

          <Container>
            <Row className="justify-content-md-center my-5">
              <InputGroup className="mb-3">
                <FormControl
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search author"
                  aria-label="search author"
                />
              </InputGroup>
            </Row>
          </Container>

          <div className="container mx-auto">
            <div className="grid grid-cols-3 gap-4">
              {filterAuthor.slice(0, visible).map((image) => (
                <ImageCard key={image.id} image={image} />
              ))}
            </div>
          </div>
        </IconContext.Provider>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
