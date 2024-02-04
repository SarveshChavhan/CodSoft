function customRender(reactElement, container)
{
    /*
    const docElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('herf',reactElement.props.href) 
    domelement.setAttribute('target',reactElement.props.target)
    container.appendChild(domElement)
    */
}

const reactElement={
    type: 'a',
    props:{
        href:"https://www.google.com",
        target: '_blank' 
    },
   children:'Click me to visit google'
}

const mainContainer=document.querySelector('#root')

customRender(reactElement, mainContainer)
