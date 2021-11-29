import { Pagination } from '@material-ui/lab';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const pageTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: '#6ac045' },
  },
});

function PageNo({ setPage, numOfPages }) {
  const pageHandler = (pageNum) => {
    setPage(pageNum);
    window.scroll(0, 0);
  };
  return (
    <>
      <ThemeProvider theme={pageTheme}>
        <Pagination
          color="primary"
          count={numOfPages}
          shape="rounded"
          onChange={(e) => pageHandler(e.target.textContent)}
        />
      </ThemeProvider>
    </>
  );
}

export default PageNo;
