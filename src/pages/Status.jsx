import { useEffect, useState } from "react";
import "../App.css";

function Status() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch DynamoDB data
  useEffect(() => {
    fetch("https://k5al4gpcdd.execute-api.eu-central-1.amazonaws.com/status")
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch(() => alert("Failed to load DynamoDB data"));
  }, []);

  if (data.length === 0) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px", color: "white" }}>
        Loading...
      </h2>
    );
  }

  const headers = Object.keys(data[0]).filter(
    (key) => key !== "file_id"
  );

  const filteredData = data.filter((item) =>
    Object.values(item)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="status-container">

      <div className="status-card">

        {/* Title */}
        <h2 className="dashboard-title">
          DynamoDB Status Dashboard
        </h2>

        {/* Search Box */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Search anything..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-box"
          />
        </div>

        {/* Table */}
        <div style={{ overflowX: "auto" }}>
          <table>
            <thead>
              <tr>
                <th>S.NO</th>
                {headers.map((h) => (
                  <th key={h}>
                    {h.replaceAll("_", " ").toUpperCase()}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan={headers.length + 1}>
                    No matching records found
                  </td>
                </tr>
              ) : (
                filteredData.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    {headers.map((h) => (
                      <td key={h}>{item[h] ?? "-"}</td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default Status;

 
