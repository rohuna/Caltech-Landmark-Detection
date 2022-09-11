import { useRef, useState } from 'react';
import { inferenceModel } from '../utils/predict';
import styles from '../styles/Home.module.css';
import { landmarkClasses } from '../data/landmarkClasses'
import Landmark from "../interfaces/Landmark"
import Info from "./Info"
import loadingGif from "../public/Rolling.gif"


const InputAndInference = () => {

  const imgDisplayRef = useRef<HTMLImageElement>(null);
  const [landmark, setLandmark] = useState<Landmark>();
  const [loadingInference, setLoading] = useState(false);

  const submitInference = async (url : string) => {

    var [inferenceResult,inferenceTime] = await inferenceModel(url);

    var topResult =  inferenceResult.indexOf(Math.max(...inferenceResult));
    
    setLoading(false)
    setLandmark(landmarkClasses[topResult])
  };

  const processImage = (e: React.SyntheticEvent) => {
    setLoading(true)
    let target = e.target as HTMLInputElement;
    let url = URL.createObjectURL(target.files![0]);
    const imgDisplay = imgDisplayRef.current;
    imgDisplay!.src = url

    imgDisplay!.onload = () => {
      submitInference(url)
    }
  }

  return (
    <>
      <input type="file" id = "img-upload" accept="image/*" capture = "environment" onChange = {processImage}/>
      <img ref = {imgDisplayRef} id = {styles.imgDisplay}/>
      <div>
        {loadingInference && <img src = {loadingGif.src} className = {styles.loadingGif}/>}
        {landmark !== undefined && <Info landmark = {landmark}/>}
      </div>
    </>
  )

};

export default InputAndInference;
