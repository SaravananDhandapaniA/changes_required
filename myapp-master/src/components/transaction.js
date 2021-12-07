  import React,{useState,useEffect} from 'react'
  import './css/transaction.css';
  
 const Transaction = ()=>{
   const axios = require('axios');
   const[booktranscation,setbooktranscation]=useState([]);
  
 const getbookTransaction = async()=>{
   try{
     const transdata = await axios.get("http://localhost:5016/transcation");
 //console.log(data.data);
 setbooktranscation(transdata.data);
 }catch(e){
   console.log(e);
 }
 };
 useEffect(()=>{
   getbookTransaction();
 },[]);

   return(
  <div className="transaction">
      <h2>Transaction details</h2>
      <table id="heading" className="tscTable">
      <thead>
       <tr>
          <th>TranscationId</th>
          <th> UserId</th>
          <th> BookId </th>
          <th>BookName</th>
          <th>IssueDate</th>
           <th>duedate</th>
          <th>renewdate</th>
        </tr>
      </thead>
      <tbody>
      {booktranscation.map((item)=>{
      return(
        <tr>
           <td>{item.TranscationId}</td>
           <td>{item.UserId} </td>
            <td>{item.BookId} </td>
            <td>{item.BookName} </td>
            <td>{item.IssueDate}</td>
            <td> {item.duedate}</td>
            <td> {item.renewdate}</td>
        </tr>)
        })}
        </tbody>
      </table>
      </div>
      
   );
};
 
  
 
 export default Transaction;
 
 
