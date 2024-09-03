import React, { useState, useEffect } from "react";
import { BarChart } from "@mui/x-charts";

const HPBar = ({ characters }) => {
  const [hpList, setHpList] = useState([]);
  const [nameList, setNameList] = useState([]);

  useEffect(() => {
    const hps = [];
    const names = [];

    characters.forEach(char => {
      hps.push(char.hp);
      names.push(char.name);
    });

    setHpList(hps);
    setNameList(names);
  }, [characters]);

  if (hpList.length !== nameList.length) {
    return <p>Something went wrong in the BarChart</p>;
  }

  return (
    <div>
      <BarChart
        xAxis={[{ scaleType: 'band', data: nameList }]}
        series={[{ data: hpList }]}
        width={500}
        height={300}
      />
    </div>
  );
};

export default HPBar;

