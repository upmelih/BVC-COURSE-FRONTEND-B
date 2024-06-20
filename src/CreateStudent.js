import React from 'react'

const CreateStudent = () => {
  return (
    <form style={{ marginBottom: "50px" }}>

      
       
          <p> Sutedent ID    <span style={{marginLeft:'125px'}}><input  type="text" /></span> </p>
          <p> First Name     <span style={{marginLeft:'133px'}}><input  type="text" /></span> </p>
          <p> Last Name      <span style={{marginLeft:'134px'}}><input  type="text" /></span> </p>
          <p> Email          <span style={{marginLeft:'171px'}}><input  type="text" /></span> </p>
          <p> Phone Number   <span style={{marginLeft:'100px'}}><input  type="text" /></span></p>
          
        <div style={{display:'flex',
                    flexDirection:"column",
                    flexWrap:"wrap",
                    justifyContent:"space-between",
                    marginLeft:"300px"

        }}>
          <button style={{
              backgroundColor: "black",
              color: "white",
              width: "80px",
              height:"20px",
              borderRadius: "5px",
              marginTop:"25px",
              
            }} >Go Back</button>
          <button style={{
              backgroundColor: "black",
              color: "white",
              width: "80px",
              height:"20px",
              borderRadius: "5px",
              marginTop:"10px",
              
            }}>Create</button>
            </div>
          
        </form>
  )
}

export default CreateStudent