import React, { useState, createContext, useContext } from "react";
import { dummyPatients, dummyVisits } from "../utils/dummyUsers";

const PatientContext = createContext();

const PatientProvider = ({ children }) => {

    const [patients, setPatients] = useState(dummyPatients);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [visits, setVisits] = useState(dummyVisits);


    const addPatient = (newPatient) => {
        setPatients((prevPatients) => [...prevPatients, { id: `patient${prevPatients.length} + 1`, ...newPatient }])
    };

    const updatePatient = (updatedPatient) => {
        setPatients((prevPatients) => prevPatients.map((p) => p.id === updatedPatient.id ? updatedPatient : p));
        if (selectedPatient && selectedPatient.id === updatedPatient.id) {
            setSelectedPatient(updatedPatient);
        }
    };

    const deletePatient = (patientId) => {
        setPatients((prevPatients) => prevPatients.filter((p) => p.id !== patientId));
        setVisits((prevVisits) => prevVisits.filter((v) => v.patientId !== patientId));
        setSelectedPatient(null);
    };

    const addVisit = (newVisit) => {
        setVisits((prevVisits) => [...prevVisits, { id: `visitId${prevVisits.length + 1}`, ...newVisit }]);
    };

    const updateVisit = (updatedVisit) => {
        setVisits((prevVisits) => prevVisits.map((v) => v.id === updatedVisit.id ? updatedVisit : v));
    };

    const deleteVisit = (visitId) => {
        setVisits((prevVisits) => prevVisits.filter((v) => v.id !== visitId));
    };

    const getVisitsByPatientId = (patientId) => {
        return visits.filter((v) => v.patientId === patientId);
    };

    let value = {
        patients, setSelectedPatient, selectedPatient, addPatient, updatePatient, deletePatient,
        addVisit, updateVisit, deleteVisit, getVisitsByPatientId
    }


    return (
        <PatientContext.Provider value={value}>
            {children}
        </PatientContext.Provider>
    );
};

export { PatientProvider };

export const usePatient = () => {
    return useContext(PatientContext);
};