import React,{useState,useEffect} from 'react'
import './css/book.css'
const UserId = '1';
const current = new Date();
  const Issuedate = `${current.getFullYear()}/${current.getMonth()+1}/${current.getDate()+1}`;
  const duedate = `${current.getFullYear()}/${current.getMonth()+1}/${current.getDate()+16}`;


const Books = ()=>{
  const axios = require('axios');
  const[books,setbooks]=useState([]);

 
const getbookdata = async()=>{
  try{
    const data = await axios.get("http://localhost:5016/books");
    setbooks(data.data);
}catch(e){
  console.log(e);
}
};


useEffect(()=>{
  getbookdata();
},[]);

function add(transdata){
  axios.post("http://localhost:5016/transcation",
          {
            BookId:transdata.BookId,
            BookName:transdata.title,
            UserId:UserId,
            IssueDate:Issuedate,
            duedate:duedate,
            renewdate:duedate      
          }
        )
  console.log(transdata);
}
  return(
 <div className="Books">
     <h2>Book details</h2>
     <table id="heading" className="bookTable">
      <thead>
       <tr>
          <th> BookId </th>
          <th>title</th>
          <th>author</th>
           <th>edition</th>
          <th>publisher</th>
          <th>genre</th>
          <th>url</th>
          <th>add</th>
        </tr>
      </thead>
      <tbody>
      {books.map((bookitem)=>{
      return(
        <tr>
        <td>{bookitem.BookId} </td>
        <td>{bookitem.title}</td>
        <td> {bookitem.author} </td>
        <td>{bookitem.edition} </td>
        <td>{bookitem.publisher} </td>
        <td>{bookitem.genre}</td>
        <td> {bookitem.url}</td>
         <td> <button onClick={()=>add(bookitem)}>add</button></td>
          
        </tr>)
        })}
        </tbody>
      </table>
     </div>
     
  );
};
export default Books;