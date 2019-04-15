const socket=io()

function toApi(Url)
{   var xmlHttp = new XMLHttpRequest()
    xmlHttp.open( "GET", Url, false )
    xmlHttp.send( null )
    return xmlHttp.responseText
}

socket.on('updateClient', ()=>
{   const apiResponse = JSON.parse(toApi('/status'))
    if(apiResponse.a1===true)
    {   document.querySelector('#a1').style.backgroundColor="#f7f939"
        document.querySelector('#i1').src='lampoff.svg'
        document.querySelector('#t1').style.color='#1c1b1b'
    }
    else
    {   document.querySelector('#a1').style.backgroundColor="#383a3a"
        document.querySelector('#i1').src='lampon.svg'
        document.querySelector('#t1').style.color='#878585'
    }
    if(apiResponse.a2===true)
    {   document.querySelector('#a2').style.backgroundColor="#f7f939"
        document.querySelector('#i2').src='lampoff.svg'
        document.querySelector('#t2').style.color='#1c1b1b'
    }
    else
    {   document.querySelector('#a2').style.backgroundColor="#383a3a"
        document.querySelector('#i2').src='lampon.svg'
        document.querySelector('#t2').style.color='#878585'
    }
    if(apiResponse.a3===true)
    {   document.querySelector('#a3').style.backgroundColor="#f7f939"
        document.querySelector('#i3').src='lampoff.svg'
        document.querySelector('#t3').style.color='#1c1b1b'
    }
    else
    {   document.querySelector('#a3').style.backgroundColor="#383a3a"
        document.querySelector('#i3').src='lampon.svg'
        document.querySelector('#t3').style.color='#878585'
    }
    if(apiResponse.a4===true)
    {   document.querySelector('#a4').style.backgroundColor="#f7f939"
        document.querySelector('#i4').src='lampoff.svg'
        document.querySelector('#t4').style.color='#1c1b1b'
    }
    else
    {   document.querySelector('#a4').style.backgroundColor="#383a3a"
        document.querySelector('#i4').src='lampon.svg'
        document.querySelector('#t4').style.color='#878585'
    }
    if(apiResponse.a5===true)
    {   document.querySelector('#a5').style.backgroundColor="#f7f939"
        document.querySelector('#i5').src='lampoff.svg'
        document.querySelector('#t5').style.color='#1c1b1b'
    }
    else
    {   document.querySelector('#a5').style.backgroundColor="#383a3a"
        document.querySelector('#i5').src='lampon.svg'
        document.querySelector('#t5').style.color='#878585'
    }
    if(apiResponse.a6===true)
    {   document.querySelector('#a6').style.backgroundColor="#f7f939"
        document.querySelector('#i6').src='lampoff.svg'
        document.querySelector('#t6').style.color='#1c1b1b'
    }
    else
    {   document.querySelector('#a6').style.backgroundColor="#383a3a"
        document.querySelector('#i6').src='lampon.svg'
        document.querySelector('#t6').style.color='#878585'
    }
    if(apiResponse.a7===true)
    {   document.querySelector('#a7').style.backgroundColor="#f7f939"
        document.querySelector('#i7').src='lampoff.svg'
        document.querySelector('#t7').style.color='#1c1b1b'
    }
    else
    {   document.querySelector('#a7').style.backgroundColor="#383a3a"
        document.querySelector('#i7').src='lampon.svg'
        document.querySelector('#t7').style.color='#878585'
    }
    if(apiResponse.a8===true)
    {   document.querySelector('#a8').style.backgroundColor="#f7f939"
        document.querySelector('#i8').src='lampoff.svg'
        document.querySelector('#t8').style.color='#1c1b1b'
    }
    else
    {   document.querySelector('#a8').style.backgroundColor="#383a3a"
        document.querySelector('#i8').src='lampon.svg'
        document.querySelector('#t8').style.color='#878585'
    }
    if(apiResponse.a9===true)
    {   document.querySelector('#a9').style.backgroundColor="#f7f939"
        document.querySelector('#i9').src='lampoff.svg'
        document.querySelector('#t9').style.color='#1c1b1b'
    }
    else
    {   document.querySelector('#a9').style.backgroundColor="#383a3a"
        document.querySelector('#i9').src='lampon.svg'
        document.querySelector('#t9').style.color='#878585'
    }
    if(apiResponse.a10===true)
    {   document.querySelector('#a10').style.backgroundColor="#f7f939"
        document.querySelector('#i10').src='lampoff.svg'
        document.querySelector('#t10').style.color='#1c1b1b'
    }
    else
    {   document.querySelector('#a10').style.backgroundColor="#383a3a"
        document.querySelector('#i10').src='lampon.svg'
        document.querySelector('#t10').style.color='#878585'
    }
    if(apiResponse.a11===true)
    {   document.querySelector('#a11').style.backgroundColor="#f7f939"
        document.querySelector('#i11').src='lampoff.svg'
        document.querySelector('#t11').style.color='#1c1b1b'
    }
    else
    {   document.querySelector('#a11').style.backgroundColor="#383a3a"
        document.querySelector('#i11').src='lampon.svg'
        document.querySelector('#t11').style.color='#878585'
    }
    if(apiResponse.a12===true)
    {   document.querySelector('#a12').style.backgroundColor="#f7f939"
        document.querySelector('#i12').src='lampoff.svg'
        document.querySelector('#t12').style.color='#1c1b1b'
    }
    else
    {   document.querySelector('#a12').style.backgroundColor="#383a3a"
        document.querySelector('#i12').src='lampon.svg'
        document.querySelector('#t12').style.color='#878585'
    }
})

function getClickedButton(buttonId)
{   console.log('click',buttonId)
    socket.emit('buttonClicked', buttonId)
}
