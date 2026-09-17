const DISPLAY = {
    col: 10,
    row: 22,
    cell: 30,
    hiddenRows: 2,
    background: "black",
    border: "gray",
};

DISPLAY.field = {
    x: 0,
    y: 0,
    width: DISPLAY.col * DISPLAY.cell,
    height: DISPLAY.row * DISPLAY.cell - DISPLAY.hiddenRows * DISPLAY.cell,
    hiddenRows: DISPLAY.hiddenRows,
};

DISPLAY.canvas = {
    width: DISPLAY.field.width,
    height: DISPLAY.field.height,
};

export default DISPLAY;