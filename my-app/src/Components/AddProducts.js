import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { omit } from "lodash";

import { Paper } from "@mui/material";
function AddProducts() {
  
  //form validation
  const validate = (e, name, value) => {
    //A function to validate each input values

    switch (name) {
      case "productName":
        if (value===null) {
          // we will set the error state

          setErrors({
            ...errors,
            productName: "Enter dish name",
          });
        } else {
          // set the error state empty or remove the error for username input

          //omit function removes/omits the value from given object and returns a new object
          let newObj = omit(errors, "productName");
          setErrors(newObj);
        }
        break;
      case "price":
        if (value.length === null) {
          // we will set the error state

          setErrors({
            ...errors,
            price: "Enter price",
          });
        } else {
          // set the error state empty or remove the error for username input

          //omit function removes/omits the value from given object and returns a new object
          let newObj = omit(errors, "price");
          setErrors(newObj);
        }
        break;

        // case 'email':
        //     if(
        //         !new RegExp( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
        //     ){
        //         setErrors({
        //             ...errors,
        //             email:'Enter a valid email address'
        //         })
        //     }else{

        //         let newObj = omit(errors, "email");
        //         setErrors(newObj);

        //     }
        // break;

        // case 'password':
        // if (
        //   !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
        // ) {
        //   setErrors({
        //     ...errors,
        //     password:
        //       "Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers",
        //   });
        // } else {
        //   let newObj = omit(errors, "password");
        //   setErrors(newObj);
        // }
        // break;

      default:
        break;
    }
  };
  //form values
  const [values, setValues] = useState({});
  //form errors
  const [errors, setErrors] = useState({});
  const formValidate = (e) => {
    e.persist();
    let name = e.target.name;
    let val = e.target.value;
    validate(e, name, val);
    setValues({
      ...values,
      [name]: val,
    });
    
  };
  //others
  const auth = localStorage.getItem("users");
  var userId = JSON.parse(auth)._id;
  const [category, setCategory] = useState("");
  const [deliveryType, setDeliverType] = useState("");
  const [dishName, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const insertProducts = async(e) => {
    setProduct(values.productName)
    setPrice(values.price)
   
    if (e) e.preventDefault();
console.log("values",Object.keys(values))
    if (Object.keys(errors).length === 0 && (values.productName && values.price) !== null) {
      let response = await fetch("http://localhost:4200/addProduct", {
      method: "post",
      body: JSON.stringify({ category, deliveryType, dishName, price, userId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(await response.json());
    } else {
      alert("Please enter values");
    }
  };
  const handleChange = (e) => {
    setCategory(e.target.value);
  };
  const handleType = (e) => {
    setDeliverType(e.target.value);
  };
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Box
            maxWidth={600}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
            }}
            p={6}
          >
            <Paper
              elevation={16}
              sx={{ backgroundColor: "pink", padding: "2em" }}
            >
              <Typography variant="h5">Add New Product</Typography>

              <Box component="form" sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      type="text"
                      label="Product Name"
                      variant="standard"
                      fullWidth
                      name="productName"
                      
                      // onChange={(e) => setProduct(e.target.value)}
                      onChange={formValidate}
                    />
                    {errors.productName && <h3>{errors.productName}</h3>}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="number"
                      label="Price"
                      variant="standard"
                      placeholder="Digits only"
                      name="price"
                      fullWidth
                      // onChange={(e) => setPrice(e.target.value)}
                      onChange={formValidate}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                      <InputLabel id="demo-select-small">Category</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={category}
                        label="Category"
                        onChange={handleChange}
                      >
                        <MenuItem value=""></MenuItem>
                        <MenuItem value="Desi">Desi</MenuItem>
                        <MenuItem value="Fast Food">Fast Food</MenuItem>
                        <MenuItem value="Chinese">Chinese</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                      <InputLabel id="demo-select-small">
                        Delivery Type
                      </InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={deliveryType}
                        label="Delivery Type"
                        onChange={handleType}
                      >
                        <MenuItem value=""></MenuItem>
                        <MenuItem value="Paid">Paid</MenuItem>
                        <MenuItem value="Free">Free</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>

                <Button
                  variant="contained"
                  sx={{ mt: 3, mb: 3 }}
                  onClick={insertProducts}
                >
                  Add Product
                </Button>
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default AddProducts;
