import { useState, useEffect } from 'react'

export default function Results(props) {
    const [allocated, setAllocated] = useState({})


    // Election data (number of votes for each party)
    console.log("data in result component: ", props.partiesData)

    let votes = {
        // partyA: 3630000,
        // partyB: 2990000,
        // partyC: 1450000,
        // partyD: 840000,
        // partyE: 720000,

    }

    if (props.partiesData.length > 0) {
        props.partiesData.forEach(item => {
            votes[item.name] = parseInt(item.votes)
        })
    }





    console.log(votes)

    useEffect(() => {
        if (JSON.stringify(votes) !== '{}') {
            dhondtMethod(460, votes)
        }

    }, [])


    function dhondtMethod(seats, votes) {

        // Function to calculate mandates using the D'Hondt method
        function calculateMandates(votes, seats) {
            const parties = Object.keys(votes)
            const mandates = {}
            const quotients = {}

            parties.forEach((party) => {
                quotients[party] = votes[party] / 1; // Initially, the quotient for each party is the number of votes
            })

            for (let i = 0; i < seats; i++) {
                const winningParty = parties.reduce((a, b) =>
                    quotients[a] > quotients[b] ? a : b
                )

                mandates[winningParty] = (mandates[winningParty] || 0) + 1
                quotients[winningParty] = votes[winningParty] / (mandates[winningParty] + 1)
            }

            return mandates
        }

        const allocatedMandates = calculateMandates(votes, seats)

        console.log("Allocated mandates:")
        console.log(allocatedMandates)
        setAllocated(allocatedMandates)


        console.log(Object.keys(allocatedMandates).map(party => {
            return `${party} : ${allocatedMandates[party]}`
        }))

    }

    const resultsHTML = Object.keys(allocated).map(party => {
        return (
            <p>{party} : {allocated[party]}</p>
        )
    })

    return (
        <>
            {resultsHTML}

        </>
    )
}