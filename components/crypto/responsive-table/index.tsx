import { Table } from 'antd';
import { FC } from 'react';
import { Current } from '../main-view/currency';

const dataSource = [
  {
    key: '1',
    cantidad: 10,
    precio: 32,
    total: 320,
    fecha: '23 hrs',
  },
  {
    key: '2',
    cantidad: 10,
    precio: 32,
    total: 320,
    fecha: '23 hrs',
  },
  {
    key: '2',
    cantidad: 10,
    precio: 32,
    total: 320,
    fecha: '23 hrs',
  },
  {
    key: '2',
    cantidad: 10,
    precio: 32,
    total: 320,
    fecha: '23 hrs',
  },
  {
    key: '2',
    cantidad: 10,
    precio: 32,
    total: 320,
    fecha: '23 hrs',
  },
  {
    key: '2',
    cantidad: 10,
    precio: 32,
    total: 320,
    fecha: '23 hrs',
  },
  {
    key: '2',
    cantidad: 10,
    precio: 32,
    total: 320,
    fecha: '23 hrs',
  },
];

const columnsF = [
  {
    title: 'Cantidad',
    dataIndex: 'cantidad',
    key: 'cantidad',
  },
  {
    title: 'Precio',
    dataIndex: 'precio',
    key: 'precio',
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
  },
  {
    title: 'Fecha',
    dataIndex: 'fecha',
    key: 'fecha',
  },

];

interface ResponsiveTableProps {
  data?: any;
  columns?: any;
}
interface TabProps {
  current: Current;
  
}

const ResponsiveTable: FC<ResponsiveTableProps> = ({
  data = dataSource,
  columns = columnsF,
}) => {
  return (
    <Table
      columns={columns || columnsF}
      dataSource={data ||  dataSource}
      size="small"
      pagination={{ pageSize: 8 }}
    />
  );
};

export default ResponsiveTable;
