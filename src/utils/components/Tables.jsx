import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  TextField,
  IconButton,
  Stack,
  Collapse,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  TiArrowUnsorted,
  TiArrowSortedUp,
  TiArrowSortedDown,
} from "react-icons/ti";
import { theme } from "../../utils/index";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#e6f2ff",
    color: theme.palette.common.black,
    fontSize: 14,
    
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // "&:nth-of-type(odd)": {
  //   backgroundColor: theme.palette.action.hover,
  // },
  // "&:last-child td, &:last-child th": {
  //   border: 0,
  // },
}));

const Tables = ({
  columns,
  filteredData,
  handleFilterChange,
  handleChangeRowsPerPage,
  handleChangePage,
  page,
  rowsPerPage,
  filter,
}) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [orderBy, setOrderBy] = useState("");
  const [order, setOrder] = useState("");
  const collapseInitial = { open: false, index: -1 };

  const [collapseOpen, setCollapseOpen] = useState(collapseInitial);

  const handleRequestSort = (property) => {
    const isAsc =
      orderBy === property && order === "asc"
        ? true
        : orderBy === property && order === "desc"
        ? false
        : "";
    setOrder(isAsc === "" ? "asc" : isAsc ? "desc" : "");
    setOrderBy(property);
  };

  const handleTableCollapse = (rowIndex) => {
    setCollapseOpen((prev) => {
      if (prev.index === rowIndex)
        return { ...prev, index: rowIndex, open: !prev.open };
      else return { ...prev, index: rowIndex, open: true };
    });
  };

  const sortedData = !!order
    ? filteredData.slice().sort((a, b) => {
        const aValue = a[orderBy];
        const bValue = b[orderBy];

        if (order === "asc")
          return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
        else return bValue < aValue ? -1 : bValue > aValue ? 1 : 0;
      })
    : filteredData;

  return (
    <div>
      <TextField
        id="filter"
        label="Search..."
        variant="outlined"
        margin="normal"
        size="small"
        value={filter}
        onChange={(e) => {
          handleFilterChange(e);
          setCollapseOpen(collapseInitial);
        }}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column, index) => {
                return column?.isMobileDisable && isMobile ? null : (
                  <StyledTableCell key={index}>
                    <Stack
                      sx={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      {column.label}

                      {!column?.isSortDisable ? (
                        <IconButton
                          size="small"
                          onClick={() => handleRequestSort(column.id)}
                        >
                          {order === "asc" && orderBy === column.id ? (
                            <TiArrowSortedUp style={{ color: "black" }} />
                          ) : order === "desc" && orderBy === column.id ? (
                            <TiArrowSortedDown style={{ color: "black" }} />
                          ) : (
                            <TiArrowUnsorted style={{ color: "black" }} />
                          )}
                        </IconButton>
                      ) : null}
                    </Stack>
                  </StyledTableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? sortedData.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : sortedData
            ).map((row, rowIndex) => (
              <React.Fragment key={rowIndex}> 
                <StyledTableRow
                  key={row.id}
                  onClick={() => handleTableCollapse(rowIndex)}
                >
                  {columns.map((column) => {
                    return column?.isMobileDisable && isMobile ? null : (
                      <StyledTableCell key={column.id}>
                        {column?.cell ? column?.cell(row) : row[column.id]}
                      </StyledTableCell>
                    );
                  })}
                </StyledTableRow>

                {isMobile ? (
                  <TableRow>
                    <TableCell style={{ minHeight: 0, padding: 0 }} colSpan={2}>
                      <Collapse
                        in={
                          collapseOpen.open && rowIndex === collapseOpen.index
                        }
                        timeout="auto"
                        unmountOnExit
                        sx={{ padding: 2 }}
                      >
                        {columns.map((column) => {
                          return column?.isMobileDisable ? (
                            <Stack
                              sx={{
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                borderBottom: "1px solid gray",
                                padding: "8px 0",
                              }}
                            >
                              <Typography
                                sx={{
                                  fontWeight: "600",
                                  textTransform: "capitalize",
                                  flex: 0.5,
                                }}
                              >
                                {column.label}
                              </Typography>
                              <Typography sx={{ flex: 1 }}>
                                {column?.cell
                                  ? column?.cell(row)
                                  : row[column.id]}
                              </Typography>
                            </Stack>
                          ) : null;
                        })}
                      </Collapse>
                    </TableCell>
                  </TableRow>
                ) : null}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 20, 30]}
        component="div"
        count={filteredData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(e, newPage) => {
          handleChangePage(e, newPage);
          setCollapseOpen(collapseInitial);
        }}
        onRowsPerPageChange={(e) => {
          handleChangeRowsPerPage(e);
          setCollapseOpen(collapseInitial);
        }}
      />
    </div>
  );
};

export default Tables;
