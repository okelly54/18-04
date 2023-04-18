"use strict";
(function() {
    const output = document.getElementById("output");
    const address = "http://localhost:8080";

    function createPerson(fullName, oldNess, occupation, notNiNumber) {
        // creates a person with the specified values
        // could use a form to enter the values and ensure validation
    }

    function getById(id) {
        // takes person id
        // returns person with the specific id
    }

    function update(id, fullName, oldness, occupation, notNiNumber) {
        // takes person id
        // changes specified values of person with the specified id
        // could use a form to get the user to choose what exactly they want to change
    }

    function getAll() {
        // returns all person(s) that exist
    }

    function remove(id) {
        // takes person id
        // removes person with the specified id
    }


    // need something to getAll person
    // get specific person by id
    // create person
    // update person
    // delete person by id
    // fullName, oldNess, occupation and notNiNumber

    

})









// const BASE_URL = "";

// (function () {

//     function displayOutput(element, {data}) {
//         document.getElementById(element).innerText = JSON.stringify(data, undefined, 2);
//     }

//     document.getElementById('createButton').addEventListener('click', function () {
//         let data = {};
//         document.querySelectorAll('#create > input').forEach(el => data[el.name] = el.value);
//         axios.post(BASE_URL + '/duck/createDuck', data)
//             .then(res => displayOutput("createOutput", res)
//             ).catch(err => console.error(err));
//     });

//     document.getElementById('readButton').addEventListener('click', function () {
//         axios.get(BASE_URL + '/duck/getAll')
//             .then(res =>
//                 document.getElementById('readOutput').innerText = JSON.stringify(res.data)
//             ).catch(err => console.error(err));
//     });

//     document.getElementById('deleteButton').addEventListener('click', function () {
//         axios.delete(`${BASE_URL}/duck/deleteDuck/${document.getElementById('deleteInput').value}`)
//             .then(res =>
//                 displayOutput("deleteOutput", res)
//             ).catch(err => console.error(err));
//     });
// })()