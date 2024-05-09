import { useState } from "react";
import {
    Box,
    Button,
    Drawer,
    IconButton,
    Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import AddEnvVariablesForm from "./AddEnvVariablesForm";

const EditEnvironmentVariableDrawer = ({ isOpen, onClose }: any) => {
    const [showForm, setShowForm] = useState(false);

    const handleAddClick = () => {
        setShowForm(true);
    };

    return (
        <Drawer
            style={{
                width: "50%",
            }}
            PaperProps={{
                style: {
                    width: "50%",
                    backgroundColor: "#fff",
                },
            }}
            open={isOpen}
            onClose={onClose}
            anchor="right"
            transitionDuration={300}
        >
            {/* Close button */}
            <IconButton
                onClick={onClose}
                sx={{
                    position: "absolute",
                    top: "8px",
                    right: "8px",
                }}
            >
                <CloseIcon />
            </IconButton>

            <Box
                sx={{
                    backgroundColor: "#FFFFFF",
                    zIndex: 10,
                    width: "90%",
                    border: "1px solid lightgray",
                    borderRadius: "8px",
                    marginTop: "5rem",
                    marginLeft: "3rem",
                }}
            >
                {showForm ? (
                    <AddEnvVariablesForm/>
                ) : (
                    <>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                                backgroundColor: "#f1f1f1",
                                zIndex: 10,
                                height: "50%",
                                width: "95%",
                                border: "1px solid lightgray",
                                borderRadius: "8px",
                                margin: "1rem",
                            }}
                        >
                            <FileUploadOutlinedIcon />
                            <Typography sx={{ fontWeight: "bold" }}>
                                Click or drag file(s) here to upload
                            </Typography>
                        </Box>
                        <Typography sx={{ marginLeft: "1rem" }}>
                            Upload a .env file. It should not be greater than 5KB
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "end",
                                gap: 1,
                                margin: "0.3rem",
                            }}
                        >
                            <Button
                                size="small"
                                onClick={onClose}
                                sx={{
                                    color: "black",
                                    textTransform: "none",
                                    fontWeight: 600,
                                    border: "1px solid black",
                                }}
                            >
                                Cancel
                            </Button>
                            <Button
                                size="small"
                                onClick={handleAddClick}
                                sx={{
                                    backgroundColor: "#8c1aff",
                                    color: "white",
                                    textTransform: "none",
                                    display: "block",
                                    fontWeight: 600,
                                    "&:hover": {
                                        backgroundColor: "#8c1aff",
                                        color: "white",
                                    },
                                }}
                            >
                                Add
                            </Button>
                        </Box>
                    </>
                )}
            </Box>
        </Drawer>
    );
};

export default EditEnvironmentVariableDrawer;
