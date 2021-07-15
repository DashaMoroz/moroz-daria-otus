const ROWS_COUNT: number = 3;
const COLS_COUNT: number = 3;
const field: HTMLDivElement = document.querySelector('.field')!;

function generateCols(row: Element, colsCount: number, rowId: number): void {
  for (let i: number = 0; i < colsCount; i++) {
    const id: number = rowId * 3 + i;
    const col: HTMLDivElement = document.createElement('div');
    col.id = `c-${id}`;
    col.dataset.id = String(id);
    col.className = 'cell';
    row.appendChild(col);
  }
}

function generateRows(rowsCount: number, colsCount: number): void {
  for (let i: number = 0; i < rowsCount; i++) {
    const row: HTMLDivElement = document.createElement('div');
    row.className = 'row';
    generateCols(row, colsCount, i);
    field.appendChild(row);
  }
}

generateRows(ROWS_COUNT, COLS_COUNT);
