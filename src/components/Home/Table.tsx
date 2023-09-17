import { FC } from "react";
import { Table as TableAnt } from 'antd';

import { TableProps } from "./types";

export const Table: FC<TableProps> = (props) => {
  const columns = props.fields.map((i) => ({
    title: i.name,
    dataIndex: i.name,
  }));
  
  return (
    <TableAnt
      className="home-table"
      columns={columns}
      dataSource={props.rows}
      scroll={{ y: 'calc(100vh - 230px)' }}
      rowKey={props.fields[0].name}
    />
  )
}

