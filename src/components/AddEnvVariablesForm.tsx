import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const AddEnvVariablesForm = () => {
    const [formData, setFormData] = useState([
        { name: '', value: '' },
        { name: '', value: '' }
    ]);

    const handleChange = (index:any, field:any, value:any) => {
        const updatedFormData:any = [...formData];
        updatedFormData[index][field] = value;
        setFormData(updatedFormData);
    };

    const handleAddVariable = () => {
        setFormData([...formData, { name: '', value: '' }]);
    };

    const handleRemoveVariable = (index:any) => {
        const updatedFormData = [...formData];
        updatedFormData.splice(index, 1);
        setFormData(updatedFormData);
    };

    const handleSubmit = () => {
        formData.forEach(variable => {
            localStorage.setItem(variable.name, variable.value);
        });
    };

    return (
        <Box sx={{ margin: '0.5rem' }}>
            <form style={{ display: "flex", flexDirection: 'column' }} onSubmit={handleSubmit}>
                {formData.map((variable, index) => (
                    <Box key={index} sx={{ display: "flex", flexDirection: 'row', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <Typography sx={{ marginRight: '0.5rem' }}>Name:</Typography>
                        <TextField
                            label="Name"
                            variant="outlined"
                            value={variable.name}
                            onChange={(e) => handleChange(index, 'name', e.target.value)}
                            sx={{ marginY: '0.5rem', width: "40%" }}
                        />
                        <Typography sx={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}>Value:</Typography>
                        <TextField
                            label="Value"
                            variant="outlined"
                            value={variable.value}
                            onChange={(e) => handleChange(index, 'value', e.target.value)}
                            sx={{ marginY: '0.5rem', width: "50%" }}
                        />
                        <DeleteOutlineOutlinedIcon onClick={() => handleRemoveVariable(index)} />
                    </Box>
                ))}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        gap: 1,
                        margin: "0.3rem",
                    }}
                >
                    <Button
                        size="small"
                        onClick={handleAddVariable}
                        sx={{
                            color: "black",
                            textTransform: "none",
                            fontWeight: 600,
                            border: "1px solid black",
                        }}
                    >
                        +
                    </Button>
                    <Button
                        size="small"

                        sx={{
                            color: "black",
                            textTransform: "none",
                            fontWeight: 600,
                            border: "1px solid black",
                        }}
                    >
                        cancel
                    </Button>
                    <Button
                        size="small"
                        type="submit"
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
            </form>
        </Box>
    );
};

export default AddEnvVariablesForm;
