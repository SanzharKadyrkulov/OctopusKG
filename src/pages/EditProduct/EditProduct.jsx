import { Button, CircularProgress, Paper, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  editProduct,
  fetchOneProduct,
} from "../../store/actions/productActions";

const EditProduct = () => {
  const navigate = useNavigate();
  const { product: prevProduct } = useSelector((store) => store.product);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOneProduct(id));
  }, []);
  const [product, setProduct] = useState(prevProduct);
  useEffect(() => {
    setProduct(prevProduct);
  }, [prevProduct]);
  const handleInp = (e) => {
    let obj = {
      ...product,
      [e.target.name]: e.target.value,
    };
    setProduct(obj);
  };

  const handleEdit = (id, product) => {
    dispatch(editProduct(id, product));
    navigate("/admin");
  };
  if (!prevProduct) return <CircularProgress />;
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
      {product ? (
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
          <h1 style={{ textAlign: "center", color: "#1f3952" }}>
            Edit Product
          </h1>
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
              value={product.productName}
              onChange={handleInp}
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
              // inputProps={{ className: classes.input }}
              // error={true}
              color="primary"
            />
            <TextField
              fullWidth
              multiline
              rows={2}
              name="description"
              value={product.description}
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
              value={product.description}
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
              value={product.image}
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
              value={product.price}
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

            <Button onClick={() => handleEdit(id, product)}>
              <SaveIcon style={{ color: "#1f3952" }} />
            </Button>
            <Button onClick={() => navigate("/admin")}>
              <CancelIcon style={{ color: "#1f3952" }} />
            </Button>
          </form>
          {/* </Container> */}
        </Paper>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default EditProduct;
