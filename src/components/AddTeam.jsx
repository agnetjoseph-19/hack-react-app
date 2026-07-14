import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const AddTeam = () => {

    const [input, changeInput] = useState(
        {
            teamId: "",
            teamName: "",
            teamLeader: "",
            leaderEmail: "",
            leaderPhone: "",
            collegeName: "",
            numberOfMembers: "",
            projectTitle: "",
            problemStatementTrack: "",
            technologyStack: "",
            mentorName: "",
            registrationDate: "",
            tableStationNumber: ""
        }
    )

    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(input)
        axios.post("http://localhost:3000/add-team", input).then(
            (response) => {
                console.log(response.data)
                alert("Team added successfully")
            }
        ).catch(
            (error) => {
                console.error("Error adding team:", error)
                alert("Failed to add team")
            }
        )
    }

    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">

                            <div className="col col-6">
                                <label className="form-label">Team ID</label>
                                <input type="text" className="form-control" name="teamId" value={input.teamId} onChange={inputHandler} />
                            </div>

                            <div className="col col-6">
                                <label className="form-label">Team Name</label>
                                <input type="text" className="form-control" name="teamName" value={input.teamName} onChange={inputHandler} />
                            </div>

                            <div className="col col-6">
                                <label className="form-label">Team Leader</label>
                                <input type="text" className="form-control" name="teamLeader" value={input.teamLeader} onChange={inputHandler} />
                            </div>

                            <div className="col col-6">
                                <label className="form-label">Leader Email</label>
                                <input type="email" className="form-control" name="leaderEmail" value={input.leaderEmail} onChange={inputHandler} />
                            </div>

                            <div className="col col-6">
                                <label className="form-label">Leader Phone</label>
                                <input type="tel" className="form-control" name="leaderPhone" value={input.leaderPhone} onChange={inputHandler} />
                            </div>

                            <div className="col col-6">
                                <label className="form-label">College Name</label>
                                <input type="text" className="form-control" name="collegeName" value={input.collegeName} onChange={inputHandler} />
                            </div>

                            <div className="col col-6">
                                <label className="form-label">Number of Members</label>
                                <input type="number" className="form-control" name="numberOfMembers" value={input.numberOfMembers} onChange={inputHandler} />
                            </div>

                            <div className="col col-6">
                                <label className="form-label">Project Title</label>
                                <input type="text" className="form-control" name="projectTitle" value={input.projectTitle} onChange={inputHandler} />
                            </div>

                            <div className="col col-6">
                                <label className="form-label">Problem Statement Track</label>
                                <input type="text" className="form-control" name="problemStatementTrack" value={input.problemStatementTrack} onChange={inputHandler} />
                            </div>

                            <div className="col col-6">
                                <label className="form-label">Technology Stack</label>
                                <input type="text" className="form-control" name="technologyStack" value={input.technologyStack} onChange={inputHandler} />
                            </div>

                            <div className="col col-6">
                                <label className="form-label">Mentor Name</label>
                                <input type="text" className="form-control" name="mentorName" value={input.mentorName} onChange={inputHandler} />
                            </div>

                            <div className="col col-6">
                                <label className="form-label">Registration Date</label>
                                <input type="date" className="form-control" name="registrationDate" value={input.registrationDate} onChange={inputHandler} />
                            </div>

                            <div className="col col-6">
                                <label className="form-label">Table / Station Number</label>
                                <input type="text" className="form-control" name="tableStationNumber" value={input.tableStationNumber} onChange={inputHandler} />
                            </div>

                            <div className="col col-12">
                                <button className="btn btn-success" onClick={readValue}>Submit</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTeam