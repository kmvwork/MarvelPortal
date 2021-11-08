import img from './error.gif'

const ErrorMessage = () => {
    return (
        <img
            src={img}
            style={{display: 'block', width: '230px', height: '230px', objectFit: 'contain', margin: '0 auto'}}
            alt={'Error'}
        />
    )
}

export default ErrorMessage