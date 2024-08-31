"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import cer1 from "../../assets/1.png";
import cer2 from "../../assets/2.png";
import { usePDF } from "react-to-pdf";
import "./page.css";
import { doctors } from "../../../lib/data"; 
import { decode } from 'jwt-decode'; 

const Certificate = () => {
  const [patientData, setPatientData] = useState(null);
  const [doctorData, setDoctorData] = useState(null);
  const [code, setCode] = useState("");
  const { toPDF, targetRef } = usePDF({ filename: "prescription.pdf" });

  const decodeToken = (token) => {
    try {
      const decoded = decode(token);
      console.log(decoded); 
      return decoded;
    } catch (error) {
      console.error("Invalid token:", error);
      return null;
    }
  };

  const fetchDoctorData = (userId) => {
    const doctor = doctors.find((doc) => doc.id === userId);
    if (doctor) {
      setDoctorData({
        doctorName: doctor.doctorName,
        doctorSpecialization: doctor.speciality,
      });
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      const decoded = decodeToken(token);
      if (decoded && decoded.userId) {
        fetchDoctorData(decoded.userId);
      }
    }
  }, []);

  const handleFetchData = async () => {
    try {
      const response = await fetch("/api/doctor/patient-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      if (response.ok) {
        const { data } = await response.json();
        setPatientData(data);
      } else {
        console.error("Error fetching patient data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter 10-digit code"
      />
      <button onClick={handleFetchData}>Fetch Patient Data</button>
      <button onClick={() => toPDF()}>Download</button>
      <br />
      <div className="container" ref={targetRef}>
        <Image src={cer1} alt="certificate 1" width={800} className="pres" />

        <div className="content">
          {doctorData && (
            <>
              <div className="doctorName font abs">{doctorData.doctorName}</div>
              <div className="doctorSpecialization font abs">{doctorData.doctorSpecialization}</div>
            </>
          )}
          {patientData ? (
            <>
              <div className="patientName font abs">{patientData.patientName}</div>
              <div className="patientDob font abs">{patientData.patientDateOfBirth}</div>
              <div className="patientPhone font abs">{patientData.patientPhoneNumber}</div>
              <div className="patientGender font abs">{patientData.patientGender}</div>
              <div className="patientEmail font abs">{patientData.patientEmail}</div>
              <div className="patientAddress font abs">{patientData.patientAddress}</div>
            </>
          ) : (
            <p>No patient data available.</p>
          )}
        </div>

        <Image src={cer2} alt="certificate 2" width={800} />
      </div>
    </div>
  );
};

export default Certificate;
