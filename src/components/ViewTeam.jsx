import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from './NavBar'

const ViewTeam = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.get("http://localhost:3000/view-team").then(
            (response) => {
                changeData(response.data)
            }
        ).catch()
    }

    useEffect(
        () => {
            fetchData()
        }, []
    )

    return (
        <div className="container">
             <NavBar />

            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Team ID</th>
                                <th>Team Name</th>
                                <th>Team Leader</th>
                                <th>Leader Email</th>
                                <th>Leader Phone</th>
                                <th>College Name</th>
                                <th>Members</th>
                                <th>Project Title</th>
                                <th>Problem Statement Track</th>
                                <th>Technology Stack</th>
                                <th>Mentor Name</th>
                                <th>Registration Date</th>
                                <th>Table / Station No.</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                data.map((value, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{value.teamId}</td>
                                            <td>{value.teamName}</td>
                                            <td>{value.teamLeader}</td>
                                            <td>{value.leaderEmail}</td>
                                            <td>{value.leaderPhone}</td>
                                            <td>{value.collegeName}</td>
                                            <td>{value.numberOfMembers}</td>
                                            <td>{value.projectTitle}</td>
                                            <td>{value.problemStatementTrack}</td>
                                            <td>{value.technologyStack}</td>
                                            <td>{value.mentorName}</td>
                                            <td>{value.registrationDate}</td>
                                            <td>{value.tableStationNumber}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>

                    </table>

                </div>
            </div>
        </div>
    )
}

export default ViewTeam