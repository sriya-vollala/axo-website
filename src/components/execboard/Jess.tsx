import jess from '../../assets/jess.jpg';

function JessH() {
    return(
        <>
        <div className='card2'>
            <img src={jess} alt="VP Facility Operations"
                style={{
                    width: '200px',
                    height: '250px',
                    objectFit: 'cover',
                    margin: '40px',
                }}
            />
            <p className="phil-info bold">Vice President<br></br> Facility Operations</p>
            <p className="phil-info">Jess Herron</p>
        </div>
         
        </>
       
    )
    
}

export default JessH;