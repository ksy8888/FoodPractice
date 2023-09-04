import {Fragment} from "react";
import {NavLink} from "react-router-dom";
import {useEffect,useState} from "react";
import {useParams} from "react-router";

function FoodDetail() {
    //전송된 데이터 받기
    const {fno} = useParams();
    const [foodDetail, setFoodDetail] = useState({})
    useEffect(()=>{

    },{})
    return(
        <h1>FoodDetail</h1>
    )
}
export default FoodDetail