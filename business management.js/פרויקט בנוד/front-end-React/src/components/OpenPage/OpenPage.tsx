import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const OpenPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="mb-4">ברוכים הבאים</h1>
      <div>
        <button className="btn btn-primary m-2" onClick={() => navigate('/TreatPage')}>הירשם לטיפול</button>
        <button className="btn btn-primary m-2" onClick={() => navigate('/AllWorkshops')}>הירשם לסדנה</button>
      </div>
    </div>
  );
};

export default OpenPage;
