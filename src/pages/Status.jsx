import { useEffect, useState } from "react";
import "../App.css";
 
function Status() {
  const [data, setData] = useState([]);
 
  useEffect(() => {
    fetch("https://k5al4gpcdd.execute-api.eu-central-1.amazonaws.com/status")
      .then(res => res.json())
      .then(setData)
      .catch(() => alert("Failed to load DynamoDB data"));
  }, []);
 
  if (data.length === 0) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }
 
  const headers = Object.keys(data[0]).filter(
    key => key !== "file_id"
  );
 
  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ textAlign: "center", color: "white" }}>
        📊 DynamoDB Status Dashboard
      </h2>
 
      <div className="dashboard">
        <table>
          <thead>
            <tr>
              <th>S.NO</th>
              {headers.map(h => (
                <th key={h}>{h.replaceAll("_", " ").toUpperCase()}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                {headers.map(h => (
                  <td key={h}>{row[h] ?? "-"}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
 
export default Status;