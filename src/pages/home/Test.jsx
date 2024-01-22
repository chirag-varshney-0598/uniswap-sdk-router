import { Box, Button, Typography, Container } from "@mui/material";
import React, { useState, useCallback } from "react";
import { CurrentConfig } from "./config";
import { quote } from "./libs/quote";

export default function Test() {
  const [outputAmount, setOutputAmount] = useState();

  const onQuote = useCallback(async () => {
    setOutputAmount(await quote());
  }, []);

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: "center",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Box
          mt={3}
          sx={{ border: "1px solid ", borderRadius: "12px", padding: "20px" }}
        >
          <Typography variant="body2">{`Quote input amount: ${CurrentConfig.tokens.amountIn} ${CurrentConfig.tokens.in.symbol}`}</Typography>
          <Typography variant="body2">{`Quote output amount: ${
            outputAmount ? outputAmount : "0"
          } ${CurrentConfig.tokens.out.symbol}`}</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={onQuote}
            style={{ background: "red", color: "white", marginTop: "10px" }}
          >
            Get Data
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
