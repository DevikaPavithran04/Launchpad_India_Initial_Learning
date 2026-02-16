import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();

  // Function to download file
  const downloadFile = () => {
    fetch(
      "https://k5al4gpcdd.execute-api.eu-central-1.amazonaws.com/download?fileName=message.txt"
    )
      .then(response => response.json())
      .then(data => {
        // Navigate to the download URL
        window.location.href = data.downloadUrl;
      })
      .catch(error => {
        alert("Error downloading file");
        console.error(error);
      });
  };

  // Function to navigate to status page
  const openStatusTab = () => {
    navigate("/status"); // Using React Router navigation
  };

  return (
    <div className="download-page">
      <div className="card">
       <i className="fa-solid fa-cloud-arrow-down icon"></i>

      <h2>Download File</h2>
      <p>Click the button below to securely download your file</p>

      <button onClick={downloadFile}>
        <i className="fa-solid fa-download"></i>
        Download
      </button>

      <button onClick={openStatusTab}>
        <i className="fa-solid fa-table"></i>
        Status Table
      </button>
    </div>
    </div>
  );
}

export default App;

