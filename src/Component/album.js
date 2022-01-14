import react,{useEffect, useState} from 'react';
import {Button,Card} from 'react-bootstrap'
import axios  from 'axios';

function Album(props) {
    const [state ,setState]=useState([]);

    const fetch=async ()=>{
        const response=await axios.get('https://jsonplaceholder.typicode.com/albums');
        const {data}=response;
        console.log("fetch msg",response);
        setState(data);
    }
    const postAlbum= async(e)=>{
        const newAlbum={title:prompt("Enter new album's title")}
        const response=await axios.post(`https://jsonplaceholder.typicode.com/albums`,newAlbum); 
        const allAlbum=[...state,response.data];
        setState(allAlbum);
        console.log(response.data);
        alert("Scroll down(at the end ) to see the newly added album")
    }
    const deletAlbum= async( ID,e)=>{
        const response=await axios.delete(`https://jsonplaceholder.typicode.com/albums/${ID}`); 
        console.log("delete",response)
        // const items=[...state];
        const items=state.filter((item)=>item.id!==ID)
        setState([...items])
    }
    const update= async( id,e)=>{
        const newTitle={title:prompt("Enter title which you want to display")}
        const response= await axios.put(`https://jsonplaceholder.typicode.com/albums/${id}`,newTitle); 
        const item=state[id-1];
        item.title=response.data.title;
        setState([...state])
        console.log("Updated data",response.data);
       
    }
    // const update= async( id,e)=>{
    //     const newTitle={title:prompt("Enter title which you want to display")}
    //     const response= await axios.put(`https://jsonplaceholder.typicode.com/albums/${id}`,newTitle); 
    //     setState([...state,{title:response.data.title}])
    //     console.log("Updated data",response.data);
    //     alert('Album updated successfully');
    // }
    useEffect(()=>{
        fetch();
    },[])
    console.log("state",state)
  return (
        <>  
            <div className='postItems' style={styles.postItems}>
            <Button variant="secondary" className='' onClick={(e)=>postAlbum(e)}>Make Post</Button>
            </div>
            <div className='AlbumWrapper' style={styles.AlbumWrapper}>
                
                {
                state.map((currentEle)=> {
                    return (
                        <div className='Wrapper'  >                   
                            <Card style={styles.CardWrapper}>
                                <Card.Img style={{height:"170px"}} variant="top" src={props.image} />
                                <Card.Body style={{height:"100px"}}>
                                    <Card.Title style={{textTransform:"capitalize",fontSize:".9rem",height:"50px"}}>{currentEle.title}</Card.Title>
                                    <div className='ButtonWrapper' style={styles.ButtonWrapper}>
                                        <Button variant="info" className='me-4' onClick={(e)=>update(currentEle.id,e)}>Update</Button>
                                        
                                        <Button variant="secondary" className='' onClick={(e)=>deletAlbum(currentEle.id,e)}>Delete</Button>
                                    </div>
                                </Card.Body>
                            </Card>                  
                        </div>      
                    )
                })
            }
            </div>
        </>
  );
}
const styles={
        postItems:{
            margin:"80px 0 10px 0",
            display:'flex',
            justifyContent:'flex-end',
            flexDirection:'row',
            alignItems:"center",
            padding:"0 40px 0 0"

        },
        AlbumWrapper:{
            display:'flex',
            justifyContent:'center',
            flexDirection:'row',
            padding:"0 10px",
            alignItems:"center",
            flexWrap:"wrap",
            margin:"0 0 0 0"
           
        },   
        CardWrapper:{
         width: '15rem',
         height:'300px',
         padding:"10px",
         margin:"15px 15px", 
       },
       ButtonWrapper:{
        height:"40px",
       }       
}
export default Album;
