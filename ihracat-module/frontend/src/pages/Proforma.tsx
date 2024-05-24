import * as React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";

import ProformaTableRow from "../components/Proforma/ProformaTableRow";

import { useCallback, useEffect, useMemo, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { increment } from "../redux/productSlice";

import preparedProductsJson from "../assets/preparedProducts.json";

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
];

interface RootState {
  products: {
    productLine: number;
    productsArray: any;
  };
}

const ViewCountOfProductLine = () => {
  // global veriyi almak için
  const count = useSelector((state: RootState) => state.products.productLine);
  return (
    <>
      <p className="text-xl font-semibold ">{count} adet ürün bulunmakta</p>
    </>
  );
};

const ProformaBodyMap = () => {
  const productsArray = useSelector(
    (state: RootState) => state.products.productsArray
  );
  return (
    <>
      {productsArray.map((data: any, index: any) => (
        <ProformaTableRow key={index} data={data} index={index} />
      ))}
    </>
  );
};

const Proforma = () => {
  console.log("PROFORMA PAGE RENDERED !!!");

  // redux fonksiyonlarını çağırmak için
  const dispatch = useDispatch();

  const handleInsertNewProduct = useCallback(() => {
    dispatch(increment("productLine"));
  }, [dispatch]);

  return (
    <>
      <div className="grid grid-rows-1 grid-flow-col gap-2 bg-teal-100 p-2">
        <div>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 250 }}
            renderInput={(params) => (
              <TextField {...params} label="Alici Secin" />
            )}
          />
        </div>

        <div>
          <Autocomplete
            disablePortal
            id="combo-box"
            options={top100Films}
            sx={{ width: 250 }}
            renderInput={(params) => (
              <TextField {...params} label="Satici Secin" />
            )}
          />
        </div>

        <div>
          <TextField id="filled-basic" label="Fatura Girin" variant="filled" />
        </div>

        <div>
          <TextField id="filled-basic" label="Banka Isim" variant="filled" />
        </div>
      </div>

      <div className="mt-3 bg-slate-200 p-2">
        <div className="grid grid-rows-1 grid-flow-col gap-2">
          <Button variant="outlined" onClick={handleInsertNewProduct}>
            Ürün Ekle
          </Button>

          <ViewCountOfProductLine />

          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className="mt-3">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">SIRA</TableCell>
                <TableCell align="center">ÜRÜN İSİM</TableCell>
                <TableCell align="center">ÜRÜN İÇERİĞİ</TableCell>
                <TableCell align="center">GRUP/DESEN/RENK</TableCell>
                <TableCell align="center">ADET/FİYAT/BİRİM</TableCell>
                <TableCell align="center">TOPLAM TUTAR</TableCell>
                <TableCell align="center">İŞLEMLER</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <ProformaBodyMap />
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default Proforma;
