import { Button, Paper, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../store/actions/productActions";
import { useDispatch } from "react-redux";

const AddProduct = () => {
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleInp = (e) => {
    let obj = {
      ...product,
      [e.target.name]: e.target.value,
    };
    setProduct(obj);
  };

  const handleAdd = (product) => {
    dispatch(addProduct(product));
    navigate("/admin");
  };

  return (
    <div
      style={{
        padding: "40px",
        height: "100vh",
        // backgroundImage: `url(https://www.kolpaper.com/wp-content/uploads/2020/12/Final-Fantasy-Wallpaper-HD.jpg)`,
        // backgroundSize: "cover",
        // backgroundRepeat: "no-repeat",
        backgroundColor: "#fff",
        width: "100%",
      }}
    >
      <Paper
        style={{ backgroundColor: "rgba(52, 52, 52, 0)" }}
        elevation={3}
        sx={{
          padding: "40px",
          color: "primary",
          margin: "0px auto",
          maxWidth: "400px",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#1f3952" }}>Add Product</h1>
        {/* <Container className={classes.container}> */}
        {/* <img width='370px' src={product.image ? product.image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbYqFDRbG4yyRvKGbVNNTVYr8kQqj3fvS5WQ&usqp=CAU'} alt="" /> */}
        <form
          noValidate
          autoComplete="off"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <TextField
            fullWidth
            name="productName"
            variant="outlined"
            label="Title"
            // InputLabelProps={{ className: classes.input__label }}
            style={{
              marginTop: 10,
              color: "green !important",
              border: "1px solid grey",
              borderRadius: "10px",
            }}
            id="outlined-error"
            onChange={handleInp}
            // inputProps={{ className: classes.input }}
            // error={true}
            color="primary"
          />
          <TextField
            fullWidth
            multiline
            rows={2}
            name="description"
            variant="outlined"
            label="Description"
            // InputLabelProps={{ className: classes.input__label }}
            onChange={handleInp}
            style={{
              marginTop: 10,
              color: "green !important",
              border: "1px solid grey",
              borderRadius: "10px",
            }}
            // inputProps={{ className: classes.input }}
            color="primary"
          />

          <TextField
            fullWidth
            name="type"
            variant="outlined"
            label="Type"
            // InputLabelProps={{ className: classes.input__label }}
            onChange={handleInp}
            style={{
              marginTop: 10,
              color: "green !important",
              border: "1px solid grey",
              borderRadius: "10px",
            }}
            // inputProps={{ className: classes.input }}
            color="primary"
          />
          <TextField
            name="image"
            fullWidth
            variant="outlined"
            label="Image"
            // InputLabelProps={{ className: classes.input__label }}
            onChange={handleInp}
            style={{
              marginTop: 10,
              color: "green !important",
              border: "1px solid grey",
              borderRadius: "10px",
            }}
            // inputProps={{ className: classes.input }}
            color="primary"
          />

          <TextField
            name="price"
            type="number"
            fullWidth
            variant="outlined"
            label="Price"
            // InputLabelProps={{ className: classes.input__label }}
            onChange={handleInp}
            style={{
              marginTop: 10,
              color: "green !important",
              border: "1px solid grey",
              borderRadius: "10px",
            }}
            // inputProps={{ className: classes.input }}
            color="primary"
          />

          <Button onClick={() => handleAdd(product)}>
            <SaveIcon style={{ color: "#1f3952" }} />
          </Button>

          <Button onClick={() => navigate("/admin")}>
            <CancelIcon style={{ color: "#1f3952" }} />
          </Button>
        </form>
        {/* </Container> */}
      </Paper>
    </div>
  );
};

export default AddProduct;
