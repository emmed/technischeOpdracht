import React, { useState, useEffect } from "react";
import ImageCard from "./ImageCard";
import { IconContext } from "react-icons";
import { FormControl, InputGroup, Row, Container } from "react-bootstrap";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./theme";
import DarkModeToggle from "react-dark-mode-toggle";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function Homepage() {
  const API_URL = "https://picsum.photos/v2/list";
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [visible, setVisible] = useState();
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState("light");
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  const themeToggle = () => {
    isDarkMode ? setTheme("dark") : setTheme("light");
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

  useEffect(() => {
    themeToggle();
  }, [isDarkMode]);

  if (isLoading)
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );

  if (error) return <h2>Error..</h2>;

  const filterAuthor = images.filter((image) => {
    return image.author.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <IconContext.Provider value={{ color: "gray", size: "1.5em" }}>
          <Container>
            <DarkModeToggle
              className=" "
              onChange={setIsDarkMode}
              checked={isDarkMode}
              size={65}
              speed={2}
            />
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

export default Homepage;
