import MainLayout from "@/Layouts/MainLayout";
import { Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function FormLyout() {
    const [age, setAge] = React.useState("");
    return (
        <Box
            component="form"
            sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: { xs: "center", md: "space-between" },
                    flexWrap: "wrap",
                }}
            >
                <FormControl sx={{ m: 1, minWidth: { xs: "70%", md: "20%" } }}>
                    <InputLabel id="demo-simple-select-helper-label" required>
                        Select Type
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={age}
                        label="Age"
                    >
                        <MenuItem value={10}>Demo</MenuItem>
                        <MenuItem value={20}>Demo2</MenuItem>
                        <MenuItem value={30}>Demo3</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    required
                    sx={{ m: 1, minWidth: { xs: "70%", md: "20%" } }}
                    id="outlined-password-input"
                    label="Name"
                    type="text"
                    autoComplete=""
                />
                <TextField
                    required
                    sx={{ m: 1, minWidth: { xs: "70%", md: "20%" } }}
                    id="outlined-password-input"
                    label="Value"
                    type="number"
                    autoComplete=""
                />
                <TextField
                    sx={{ m: 1, minWidth: { xs: "70%", md: "20%" } }}
                    id="outlined-password-input"
                    label="Parent Code"
                    type=""
                    autoComplete=""
                />
                <TextField
                    required
                    sx={{ m: 1, minWidth: { xs: "70%", md: "31%" } }}
                    id="outlined-password-input"
                    label="Display Order"
                    type="number"
                    autoComplete=""
                />
                <FormControl sx={{ m: 1, minWidth: { xs: "70%", md: "30%" } }}>
                    <InputLabel id="demo-simple-select-helper-label" required>
                        Status
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={age}
                        label="Age"
                    >
                        <MenuItem value={"Active"}>Active</MenuItem>
                        <MenuItem value={"Inactive"}>Inactive</MenuItem>
                    </Select>
                </FormControl>
                <Button
                    startIcon={<AddIcon />}
                    variant="outlined"
                    sx={{ m: 1, minWidth: { xs: "70%", md: "20%" } }}
                >
                    Add
                </Button>
            </div>
        </Box>
    );
}

export default function Index({ auth, mustVerifyEmail, status }) {
    return (
        <MainLayout user={auth.user}>
            <FormLyout />
            Demo Settings Layout
        </MainLayout>
    );
}
