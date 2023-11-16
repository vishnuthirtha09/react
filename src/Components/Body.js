import React, { useState } from 'react'
import Image from '../Image/down.jpeg'
import ReactPlayer from 'react-player'
const Body = () => {

    const [likes, setLikes] = useState(0) // likes=15
    function count() {
        setLikes(likes + 1);  //(15+1)
    }
    const [text, setText] = useState('')
    function reset() {
        setText('')
    }

    const [fruits, setFruits] = useState([
        { fruit: 'water melon' },
        { fruit: 'apple' },
        {fruit:'mango'}
    ])
     const [index, setIndex] = useState(0)  // 1
    function change() {  //0+1%3
        const newIndex = (index + 1) % fruits.length
        setIndex(newIndex)
    }
  return (
    <div>
    <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <img src={Image} alt="images" style={{ height: '200px', width: '300px'}}/> <br />
        <p>Plumerias are tropical trees famous for their gorgeous flowers<br></br>
        The leaves are obovate shape and the tip of the leaf is pointed. <br></br>
        The yellow flowers of this species are borne in clusters that form<br></br>
        at the ends of the branches on a long thick stalk.</p>
        <p>likes: {likes}</p>
        <div>
    <p>i like this {fruits[index].fruit}</p>
    <button onClick={change}>Change me</button>
    </div>
        {/* destructuring */}
        <button onClick={count}>Like</button>
    </div>
    <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <label htmlFor="Name">Name : </label>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <p>onutput : {text}</p>
        <button onClick={reset}>Reset</button>
    </div>
    <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        {/* pass down url link in url attribuite */}
        <ReactPlayer url={'https://youtu.be/0l_vBgxq_28?si=i_3lJ3Zn1DLlZNIc'} height={200} controls />
        <div>
            <p>Dandelions by Ruth B. </p>
        </div>
    </div>
</div>
  )
}

export default Body
