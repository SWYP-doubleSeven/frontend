// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/line
import { ResponsiveLine } from "@nivo/line";
import classNames from "classnames/bind";

import styles from "./line.module.scss";

const cn = classNames.bind(styles);

const Line = () => {
  const data = [
    {
      id: "time",
      color: "#FF9954",
      data: [
        {
          x: "0",
          y: 0,
        },
        {
          x: "2",
          y: 0,
        },
        {
          x: "4",
          y: 0,
        },
        {
          x: "6",
          y: 10000,
        },
        {
          x: "8",
          y: 7000,
        },
        {
          x: "10",
          y: 12000,
        },
        {
          x: "12",
          y: 9000,
        },
        {
          x: "14",
          y: 6000,
        },
        {
          x: "16",
          y: 0,
        },
        {
          x: "18",
          y: 4000,
        },
        {
          x: "20",
          y: 30000,
        },
        {
          x: "22",
          y: 0,
        },
        {
          x: "24",
          y: 2000,
        },
      ],
    },
  ];

  return (
    <div className={cn("container")}>
      <ResponsiveLine
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        // yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 5,
          tickRotation: 0,
          legend: "transportation",
          legendOffset: 36,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 0,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendOffset: -40,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        pointSize={5}
        pointColor={{ theme: "background" }}
        pointBorderWidth={5}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={false}
        useMesh={true}
        enableGridX={false}
        enableGridY={false}
      />
    </div>
  );
};

export default Line;
