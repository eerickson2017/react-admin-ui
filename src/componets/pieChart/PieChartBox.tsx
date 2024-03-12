import "./pieChart.scss";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Mobile", value: 400, color: "#0088fe" },
  { name: "Desktop", value: 300, color: "#00c49f" },
  { name: "Laptop", value: 300, color: "#ffbb28" },
  { name: "Tablet", value: 200, color: "#ff8042" },
];
const CustomPie = Pie as any;
const CustomTooltip = Tooltip as any;

const PieChartBox = () => {
  return (
    <div className="pieChartBox">
      <h1>Leads by Source</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={280}>
          <PieChart>
            <CustomTooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />

            <CustomPie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </CustomPie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="listItems">
        {data.map((source) => (
          <div className="listItem">
            <div className="title">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="50" fill={source.color} />
              </svg>
              <p>{source.name}</p>
            </div>
            <p>{source.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
