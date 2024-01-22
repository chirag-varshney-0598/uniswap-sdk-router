import { Box, Button, TextField, Typography, Container } from "@mui/material";

import React, { useState, useCallback } from "react";
// import {
//   prepareWriteContract,
//   writeContract,
//   waitForTransaction,
// } from "@wagmi/core";
// import toast from "react-hot-toast";
import { CurrentConfig } from "./config";
import { quote } from "./libs/quote";

export const contractABI = [
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "safe", type: "address" },
      {
        indexed: false,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
    ],
    name: "AddDelegate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "safe", type: "address" },
      {
        indexed: false,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
    ],
    name: "RemoveDelegate",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR_TYPEHASH",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "NAME",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VERSION",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "delegate", type: "address" }],
    name: "addDelegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "module", type: "address" }],
    name: "enableModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "contract GnosisSafe", name: "safe", type: "address" },
    ],
    name: "executeSwap",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getChainId",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "safe", type: "address" },
      { internalType: "uint256", name: "start", type: "uint256" },
      { internalType: "uint256", name: "pageSize", type: "uint256" },
    ],
    name: "getDelegators",
    outputs: [
      { internalType: "address[]", name: "results", type: "address[]" },
      { internalType: "uint256", name: "next", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "safe", type: "address" },
      { internalType: "uint256", name: "start", type: "uint256" },
      { internalType: "uint256", name: "pageSize", type: "uint256" },
    ],
    name: "getTraders",
    outputs: [
      { internalType: "address[]", name: "results", type: "address[]" },
      { internalType: "uint256", name: "next", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    name: "incomingDelegationHashes",
    outputs: [{ internalType: "address", name: "delegates", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    name: "outgoingDelegationHashes",
    outputs: [{ internalType: "address", name: "traders", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "delegate", type: "address" }],
    name: "removeDelegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
export default function Test() {
  // const [address, setAddress] = useState("");
  // const [isProcessing, setIsProcessing] = useState(false);
  // const senTransactionsHandler = async () => {
  //   try {
  //     setIsProcessing(true);
  //     const { request } = await prepareWriteContract({
  //       address: "0x9564932634b4fB7594883C285f7BBC307d0a548B",
  //       abi: contractABI,
  //       functionName: "addDelegate",
  //       args: [address],
  //     });
  //     const { hash } = await writeContract(request);
  //     await waitForTransaction({
  //       hash,
  //     });
  //     toast.success("Added Susscessfully!");
  //     setIsProcessing(false);
  //   } catch (error) {
  //     console.log(error);
  //     toast.error(error.message);
  //     setIsProcessing(false);
  //   }
  // };

  const [outputAmount, setOutputAmount] = useState();

  const onQuote = useCallback(async () => {
    setOutputAmount(await quote());
  }, []);

  return (
    <Container maxWidth="xs">
      {/* <Box mt={10}>
        <Typography variant="body2">Enter address</Typography>
        <TextField
          placeholder="Enter Address..."
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Button
          color="primary"
          disabled={!address || isProcessing}
          variant="contained"
          onClick={senTransactionsHandler}
        >
          {isProcessing ? "Please wait..." : "Submit"}
        </Button>
      </Box> */}

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
