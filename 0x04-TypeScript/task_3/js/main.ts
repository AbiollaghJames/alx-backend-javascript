import { RowID, RowElement } from './interface';
import CRUD from './crud';

const row: RowElement {
  firstName: 'Guilaume',
  lastName: 'Salva',
}

const newRowID: RowID = CRUD.insertRow(row);
row.age = 23;
const updateRow: RowElement = row;

CRUD.updateRow(newRowID, updateRow);
CRUD.deleteRow(newRowID);

