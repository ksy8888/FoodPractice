import {Fragment,useState,useEffect} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";

function Home() {
    //1. 변수 설정 => 변경시 자동 화면에 영향 => 일반 변수 => useState() : return 호출하는 메소드
    // let a = []
    const [category,setCategory]=useState([])//[변수,setter]
    // data:{category:[]}
    useEffect(() => {
        // 자동으로 호출 = mounted:function(){} => window.onload=function()
        // componentDidMount()
        axios.get('http://localhost/food/category1')
            .then(response=>{
                setCategory(response.data)
            })
    }, []);
    //이벤트 처리
    const changeCategory=(cno)=> {
        if (cno === 1) {
            axios.get('http://localhost/food/category1')
                .then(response => {
                    console.log(response.data)
                    setCategory(response.data)
                })
        } else if (cno === 2) {
            axios.get('http://localhost/food/category2')
                .then(response => {
                    console.log(response.data)
                    setCategory(response.data)
                })
        } else if (cno === 3) {
            axios.get('http://localhost/food/category3')
                .then(response => {
                    console.log(response.data)
                    setCategory(response.data)

                })
        }
    }
    const html=category.map((c,key)=>

        <div className="col-md-4" key={c.cno}>
            <div className="thumbnail">
                <NavLink to={"/food/food_list/"+c.cno}>   {/*App.js의 명과 일치*/}
                    <img src={c.poster} alt="Lights" style={{"width":"100%"}}/>
                    <div className="caption">
                        <p>{c.title}</p>
                    </div>
                </NavLink>
            </div>
        </div>


    )
    /*
     JSX = JavaScript+XML
     React.createElement('row',Reavt.createElement('input',''))
     */
    return(
        <Fragment>
            <div className={"row"}>
                <div className={"text-center"}>
                    <input type={"button"} className={"btn btn-sm btn-danger"} value={"믿고보는 맛집 리스트"} onClick={()=>changeCategory(1)}/>
                    <input type={"button"} className={"btn btn-sm btn-info"} value={"지역별 맛집 리스트"} onClick={()=>changeCategory(2)}/>
                    <input type={"button"} className={"btn btn-sm btn-success"} value={"메뉴별 맛집 리스트"} onClick={()=>changeCategory(3)}/>
                </div>
            </div>
            <div style={{"height":"20px"}}></div>
            <div className={"row"}>
                {html}
            </div>
        </Fragment>
    )
}
export default Home