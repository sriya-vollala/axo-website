import ava from '../../assets/ava.jpg';

function AvaL() {
    return(
        <>
        <div className='card2'>
            <img src={ava} alt="VP CRS"
                style={{
                    width: '200px',
                    height: '250px',
                    objectFit: 'cover',
                    margin: '40px',

                }}
            />
            <p className="phil-info bold">Vice President<br></br> Chapter Relation Standards</p>
            <p className="phil-info">Ava Leon</p>
        </div>
         
        </>
       
    )
    
}

export default AvaL;