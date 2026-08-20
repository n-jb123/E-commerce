"use client";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase, IconButton, Paper } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";
export const SearchBar = () => {
  const [inputSearch, setInputSearch] = useState<string>("");
  const router = useRouter();
  const handleSearch = (value: string) => {
    const trimmed = value.trim();
    router.push(`/ecommerce/search?q=${encodeURIComponent(trimmed)}`);
  };
  return (
    <Paper
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch(inputSearch);
      }}
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: { xs: "100%", md: 400 },
        borderRadius: "8px",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        value={inputSearch}
        onChange={(e) => {
          setInputSearch(e.target.value);
        }}
        placeholder="Search"
        inputProps={{ "aria-label": "search products" }}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
