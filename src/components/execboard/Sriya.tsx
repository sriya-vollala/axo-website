import sriya from '../../assets/sriya.jpg';

function SriyaV() {
    return(
        <>
        <div className='card2'>
            <img src={sriya} alt="VP Finance"
                style={{
                    width: '200px',
                    height: '250px',
                    objectFit: 'cover',
                    margin: '40px',

                }}
            />
            <p className="phil-info bold">Vice President<br></br> Finance</p>
            <p className="phil-info">Sriya Vollala</p>
        </div>
        
        </>
       
    )
    
}

export default SriyaV;