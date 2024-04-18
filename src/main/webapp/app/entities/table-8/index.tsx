import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Table8 from './table-8';
import Table8Detail from './table-8-detail';
import Table8Update from './table-8-update';
import Table8DeleteDialog from './table-8-delete-dialog';

const Table8Routes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<Table8 />} />
    <Route path="new" element={<Table8Update />} />
    <Route path=":id">
      <Route index element={<Table8Detail />} />
      <Route path="edit" element={<Table8Update />} />
      <Route path="delete" element={<Table8DeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default Table8Routes;
