import kate from '../../assets/kate.jpg';

function KateM() {
    return(
        <>
        <div className='card2'>
            <img src={kate} alt="VP New Mem Ed"
                style={{
                    width: '200px',
                    height: '250px',
                    objectFit: 'cover',
                    margin: '40px',
                }}
            />
            <p className="phil-info bold">Vice President<br></br> New Member Education</p>
            <p className="phil-info">Kate McGarty</p>
        </div>
        </>
       
    )
    
}

export default KateM;