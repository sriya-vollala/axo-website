import alexa from '../../assets/alexa.jpg';

function AlexaG() {
    return(
        <>
        <div className='card2'>
            <img src={alexa} alt="President"
                style={{
                    width: '200px',
                    height: '250px',
                    objectFit: 'cover',
                    margin: '40px',

                }}
            />
            <p className="phil-info bold">Chapter<br></br>President<br></br></p>
            <p className="phil-info">Alexa Gonzalez</p>
        </div>
         
        </>
       
    )
    
}

export default AlexaG;