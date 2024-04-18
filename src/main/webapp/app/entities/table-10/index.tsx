import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Table10 from './table-10';
import Table10Detail from './table-10-detail';
import Table10Update from './table-10-update';
import Table10DeleteDialog from './table-10-delete-dialog';

const Table10Routes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<Table10 />} />
    <Route path="new" element={<Table10Update />} />
    <Route path=":id">
      <Route index element={<Table10Detail />} />
      <Route path="edit" element={<Table10Update />} />
      <Route path="delete" element={<Table10DeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default Table10Routes;
