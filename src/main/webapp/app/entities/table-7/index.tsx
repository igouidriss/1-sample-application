import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Table7 from './table-7';
import Table7Detail from './table-7-detail';
import Table7Update from './table-7-update';
import Table7DeleteDialog from './table-7-delete-dialog';

const Table7Routes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<Table7 />} />
    <Route path="new" element={<Table7Update />} />
    <Route path=":id">
      <Route index element={<Table7Detail />} />
      <Route path="edit" element={<Table7Update />} />
      <Route path="delete" element={<Table7DeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default Table7Routes;
