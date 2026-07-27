// function App() {
//   return <h1>Bundle Builder</h1>;
// }

// export default App;

import { Button, Container, Typography } from "@mui/material";
import { useSnackbar } from "notistack";

function App() {
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom color="primary">
        Bundle Builder
      </Typography>

      <Button
        variant="contained"
        onClick={() => {
          enqueueSnackbar("System saved successfully!", {
            variant: "success",
          });
        }}
      >
        MUI Works!
      </Button>
    </Container>
  );
}

export default App;
