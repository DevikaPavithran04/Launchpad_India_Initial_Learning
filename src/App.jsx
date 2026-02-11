import "./App.css";
 
function App() {
 
  const downloadFile = () => {
    fetch(
      "https://k5al4gpcdd.execute-api.eu-central-1.amazonaws.com/download?fileName=message.txt"
    )
      .then(response => response.json())
      .then(data => {
        window.location.href = data.downloadUrl;
      })
      .catch(error => {
        alert("Error downloading file");
        console.error(error);
      });
  };
 
  const openStatusTab = () => {
    window.open("/status", "_blank");
  };
 
  return (
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
  );
}
 
export default App;
