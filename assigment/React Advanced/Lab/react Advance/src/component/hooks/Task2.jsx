import React, { useEffect, useState } from "react";
import Header from "../../coman/Header";

function Task2() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  return (
    <div className="bg-light min-vh-100">
      <Header />

      <div className="container py-5">
        <div className="text-center mb-3">
          <h2 className="fw-bold text-primary">User List</h2>
        </div>

        {/* Main Card */}
        <div className="card border-2 shadow-lg"style={{ borderRadius: "15px" }}>
          <div className="card-body p-4">

            {loading ? (
              <div className="text-center py-4">
                <div className="spinner-border text-primary"style={{ width: "3rem", height: "3rem" }}></div>
                <p className="mt-3 fw-semibold">Fetching Users...</p>
              </div>
            ) : (
              <div className="table-responsive">
                <table className="table align-middle text-center">
                  <thead style={{ background: "#0d6dfd94", color: "white" }}>
                    <tr>
                      <th>ID</th>
                      <th>User Name</th>
                      <th>Email Address</th>
                      <th>City</th>
                    </tr>
                  </thead>

                  <tbody>
                    {user.map((data) => (
                      <tr key={data.id} className="table-row" style={{ transition: "0.3s" }}>
                        <td className="fw-bold text-primary">
                          #{data.id}
                        </td>

                        <td className="fw-semibold">
                          {data.name}
                        </td>

                        <td className="text-muted">
                          {data.email}
                        </td>

                        <td>
                          <span className="badge px-3 py-2"
                            style={{background:"linear-gradient(45deg,#6f42c1,#0d6efd)",}}>{data.address.city}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

export default Task2;