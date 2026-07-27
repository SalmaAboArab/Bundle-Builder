// function App() {
//   return <h1>Bundle Builder</h1>;
// }

// export default App;

import { Button, Container, Typography } from "@mui/material";
import { useToast } from "./hooks/useToast";

function App() {
  const toast = useToast();

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom color="primary">
        Bundle Builder
      </Typography>

      <Button
        variant="contained"
        onClick={() => {
          toast.success("System saved successfully.");
          toast.error("Something went wrong.");
        }}
      >
        MUI Works!
      </Button>
    </Container>
  );
}

export default App;
