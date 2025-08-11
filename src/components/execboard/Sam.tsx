import sam from '../../assets/sam.jpg';

function SamH() {
    return(
        <>
        <div className='card2'>
            <img src={sam} alt="Panhel Delegate"
                style={{
                    width: '200px',
                    height: '250px',
                    objectFit: 'cover',
                    margin: '40px',
                }}
            />
            <p className="phil-info bold">Panhellenic<br></br> Delegate<br></br></p>
            <p className="phil-info">Sam Halloran</p>
        </div>
         
        </>
       
    )
    
}

export default SamH;