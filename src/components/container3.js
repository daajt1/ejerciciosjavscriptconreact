import React from 'react'

const defaultPerson = {
    name : {
        first: "h1",
        last: "h2"
    },
    favActivity: "be myself"
};

function logActivity(person = defaultPerson) {
   console.log(`${person.name.first} loves 
   ${person.favActivity}
   `)
} 