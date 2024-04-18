import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Table6 from './table-6';
import Table6Detail from './table-6-detail';
import Table6Update from './table-6-update';
import Table6DeleteDialog from './table-6-delete-dialog';

const Table6Routes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<Table6 />} />
    <Route path="new" element={<Table6Update />} />
    <Route path=":id">
      <Route index element={<Table6Detail />} />
      <Route path="edit" element={<Table6Update />} />
      <Route path="delete" element={<Table6DeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default Table6Routes;
