import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend} from 'recharts';
import data from './data';

function TotalBar () {
  return (
    <div>
    <BarChart width={730} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Legend />
      <Bar dataKey="incomes" fill="#8884d8" />
      <Bar dataKey="expenses" fill="#82ca9d" />
    </BarChart>
    </div>
  )
}
export default TotalBar;
