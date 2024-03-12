import "./barChartBox.scss";
import "../../data.ts";
import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";

const CustomBar = Bar as any;
const CustomTooltip = Tooltip as any;

type Props = {
  title: string;
  color: string;
  dataKey: string;
  chartData: object[];
};

const BarChartBox = (props: Props) => {
  return (
    <div className="barChartBox">
      <h3>{props.title}</h3>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={props.chartData}>
            <CustomTooltip
              contentStyle={{ background: "#2e3447", borderRadius: "5px" }}
              lableStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <CustomBar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;
