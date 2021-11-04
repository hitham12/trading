import React from "react";
import { Area, Bar, Line } from "react-chartjs-2";

const Chart = (props) => {
  return (
    <div>
      <Bar
        data={{
          labels:['red','black','green','yellow','orange','purple', ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio : false
        }}
      />
    </div>
  );
};

export default Chart;