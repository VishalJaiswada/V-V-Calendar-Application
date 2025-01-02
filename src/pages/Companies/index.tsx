import React from 'react';
import { CompanyList } from './CompanyList';
import { AddCompanyButton } from './AddCompanyButton';

export function Companies() {
  return (
    <div style={{ backgroundColor: '#92a8d1', minHeight: '100vh', padding: '20px' }}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Companies</h1>
          <AddCompanyButton />
        </div>
        <CompanyList />
      </div>
    </div>
  );
}
