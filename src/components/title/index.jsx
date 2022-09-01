import './style.css';

const Title = ({id}) => {

    const idd = id < 10 ? `0${id}` : id;
    return(
        <div id="title">
            <h1>Advice #{idd}</h1>
        </div>
    )
};

export default Title;