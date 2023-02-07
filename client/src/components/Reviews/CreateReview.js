import React,{useState,useEffect} from 'react'
import AddIcon from '@mui/icons-material/Add';

function CreateReview(props) {
    const [images,setImages] = useState([]);
    const [imageURLs,setImageURLs] = useState([]);
    const [reviews, setReview] = useState({
        title:"",
        description:"",
    })

    useEffect(() => {
        if(images.length < 1) return;
        const newImageURLs = [];
        images.forEach(image => newImageURLs.push(URL.createObjectURL(image)));
        setImageURLs(newImageURLs);
    }, [images]);
    
    function onImageChange(event){
        setImages([...event.target.files]);
    }

    function handleSubmit(event){
        reviews.image=imageURLs;
        props.handleAdd(reviews);
        console.log(reviews);
        event.preventDefault();
        setReview({
            title:"",
            description:""
        });
        setImages([]);
        setImageURLs([]);
    }

    function handleChange(event){
        const {name,value} = event.target;
        setReview(prevValue =>{
            
                return{
                ...prevValue,
                [name]:value
            }
        
        })
    }
    return (
        <div>
            <form className='card'>
                <input type="text" name="title" value={reviews.title} onChange={handleChange} placeholder="Title" />
                <textarea type="text" name="description" value={reviews.description} onChange={handleChange} placeholder="Description..." />
                <input type="file" name="image" multiple accept='image/*' onChange={onImageChange}  />
                {imageURLs.map(imgSrc => <img src={imgSrc} alt="-" />)}
                <button className='card-add-button' type='submit' onClick={handleSubmit}>
                    <AddIcon></AddIcon>
                </button>
            </form>
        </div>
    )
}

export default CreateReview