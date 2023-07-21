import { Divider, Space } from "antd";
import Field from "../Field";
import { sortData } from "../../constant";

export default function Section({ data }) {
  const newComponents = sortData(data.components);
  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      <div className="section">
        <h2>{data.section}</h2>
        <div className="field">
          {newComponents.map((field, index) => (
            <Field data={field} />
          ))}
        </div>
      </div>
      <Divider />
    </Space>
  );
}
