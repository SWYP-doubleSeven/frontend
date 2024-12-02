import classNames from "classnames/bind";

import styles from "./bar.module.scss";

const cn = classNames.bind(styles);

import { ResponsiveBar } from "@nivo/bar";

const Bar = () => {
  const data = [
    { category: "커피", value: 21000 },
    { category: "디저트", value: 18250 },
    { category: "밥", value: 32000 },
    { category: "술", value: 27500 },
    { category: "담배", value: 19750 },
    { category: "음료", value: 24000 },
    { category: "야식", value: 30500 },
    { category: "차비", value: 14000 },
    { category: "취미", value: 22750 },
    { category: "쇼핑", value: 29000 },
    { category: "영화", value: 17500 },
    { category: "화장품", value: 15250 },
    { category: "미용", value: 12000 },
    { category: "덕질", value: 23500 },
    { category: "여행", value: 26000 },
  ];

  return (
    <div className={cn("container")}>
      <ResponsiveBar
        data={data}
        keys={["value"]}
        indexBy="category"
        layout="horizontal"
        margin={{ top: 0, right: 0, bottom: 0, left: 50 }}
        padding={0.5}
        colors={[
          "#ffd09b", // coffee
          "#fff7d1", // dessert
          "#ffe5e5", // meal
          "#ffb0b0", // alcohol
          "#ff8c8c", // smoke
          "#ffad84", // drink
          "#fdffae", // chicken
          "#dee5d4", // taxi
          "#bacd92", // game
          "#75a47f", // shopping
          "#b6ffa1", // movie
          "#d4fafc", // cosmetic
          "#d2e0fb", // hair
          "#8eaccd", // fandom
          "#3a98b0", // travel
        ]}
        colorBy="indexValue"
        borderRadius={3}
        enableGridY={false}
        theme={{
          labels: {
            text: {
              fontSize: 16,
              fill: "#000000",
            },
          },
          legends: {
            text: {
              fontSize: 12,
              fill: "#000000",
            },
          },
          axis: {
            legend: {
              text: {
                fontSize: 20,
                fill: "#000000",
              },
            },
            ticks: {
              text: {
                fontSize: 16,
                fill: "#ffffff",
              },
            },
          },
        }}
        axisBottom={{
          tickSize: 0,
        }}
        axisLeft={{
          tickSize: 0,
          tickPadding: 5,
          tickRotation: 0,
          legend: "value",
          legendPosition: "middle",
          legendOffset: -60,
        }}
      />
    </div>
  );
};

export default Bar;
