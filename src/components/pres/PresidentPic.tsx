import PresPics from '../../assets/PresPic.png';

function PresPic() {
    return (
        <img src={PresPics} alt="Alexa Gonzolez" className="about-pic2"
        style={{
            width: 'auto',
            height: '680px',
            objectFit: 'cover',
            margin: '40px',
        }}
        />
    ) 
}

export default PresPic;