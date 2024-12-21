// import axios from "axios";

// export async function getAllData() {
//     try {
//         const response = await fetch('http://localhost:3000/data');
//         return response.json();
//     } catch (e) {
//         console.log(e);
//     }
// }

// // export async function getData(id) {
// //     try {
// //         const response = await fetch('http://localhost:3000/data/$(id)');
// //         return response.json();
// //     } catch (e) {
// //         console.log(e);
// //     }
// // }

// // export async function getData(id) {
// //     try {
// //         const response = await fetch(`http://localhost:3000/data/${id}`);
// //         return response.json();
        
// //     } catch (e) {
// //         console.error(e)
// //         return null; // or return an empty object
// //     }
// // }

// export class DataService{
//     static serverURL=`http://localhost:3000`;



//     static getDataView(id){
//         let DataURL=`${this.serverURL}/data/${id}`;
//         return axios.get(DataURL);
//     }
// }