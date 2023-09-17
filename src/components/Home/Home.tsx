import { FC } from "react";
import { Button } from "antd";

import { getDataReport } from "../../stores/report.slice";
import { useDispatch, useSelector } from "../../hooks/redux";

import { Table } from "./Table";
import './Home.scss';

const Home: FC = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.reports);

  const onClick = () => {
    dispatch(getDataReport());
  }
  console.log(data)
  return (
    <div className="home-page">
      <div className="home-control">
        <Button loading={loading} onClick={onClick}>GET REPORT</Button>
      </div>

      {data.fields && data.rows ? <Table fields={data.fields} rows={data.rows}/> : null}
    </div>
  );
}

export { Home };
