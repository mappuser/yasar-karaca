const dotenv=require('dotenv').config() //to use environment variables from .env file
const path=require('path')
const express=require('express')
const app=express()
const mongoose = require('mongoose');
const server=require('http').createServer(app) // create a nodejs server
const socketio=require('socket.io')
const io=socketio(server)
const publicDirPath=path.join(__dirname, '/public') //set public path

app.use(express.static(publicDirPath)) //set "public" folder as publicly available
var onStart =0
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });

mongoose.connect(process.env.DB_URL, {useNewUrlParser:true}).then(() =>
{   console.log("Database connected")
},
(err)=>
{   console.log("Error in database connection. ", err)
});

const LampStatus = mongoose.model('lampstatu',
{   a1:{ type:Boolean, default:false },
    a2:{ type:Boolean, default:false },
    a3:{ type:Boolean, default:false },
    a4:{ type:Boolean, default:false },
    a5:{ type:Boolean, default:false },
    a6:{ type:Boolean, default:false },
    a7:{ type:Boolean, default:false },
    a8:{ type:Boolean, default:false },
    a9:{ type:Boolean, default:false },
    a10:{ type:Boolean, default:false },
    a11:{ type:Boolean, default:false },
    a12:{ type:Boolean, default:false }
});

const updateStatus = async(buttonId)=>
{   const status = await LampStatus.find({_id:"5cb06f09953ee93304ae34d0"})
    if(status[0][buttonId]===true)
    {   await LampStatus.updateOne({_id:"5cb06f09953ee93304ae34d0"},{ $set: { [buttonId]: false } })
    }
    else
    {   await LampStatus.updateOne({_id:"5cb06f09953ee93304ae34d0"}, { $set: { [buttonId]: true } })
    }
}

const getStatus = ()=>
{   const res = LampStatus.find({_id:"5cb06f09953ee93304ae34d0"})
    return res
}

const createCollection = async()=>
{   await new LampStatus({_id:"5cb06f09953ee93304ae34d0"}).save()
}

io.on('connection', async (socket)=>
{   console.log('New connection')
    var str = await getStatus()
    if(str.length===0 && onStart==0)
    {   onStart=1
        createCollection()
    }
    var statusObj = await getStatus()
    io.emit('updateClient', statusObj[0])
    socket.on('buttonClicked', async(buttonId)=>
    {   await updateStatus(buttonId)
        statusObj = await getStatus()
        io.emit('updateClient', statusObj[0])
        console.log(buttonId)
    })
})

app.get('/status',  async(req, res)=>
{   const stts = await getStatus()
    res.json(stts[0])
})

server.listen(process.env.PORT, ()=>{console.log(`Listening Port ${process.env.PORT}`)})
