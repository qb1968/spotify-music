import {useState, useEffect} from 'react'
import ReactDom from 'react-dom'

const Loader = (props) => {
    const [node] = useState(document.createElement('div'))
    const loader = document.querySelector('#loader')

    useEffect(() => {
        if(props.show) {
            loader.classList.remove('hide')
            document.body.classList.add('loader-open')
        } else{
          loader.classList.add('hide')
          document.body.classList.remove('loader-open')
        }
    }, [loader,props.show])
    return ReactDom.createPortal(props.children,node)
}

export default Loader