const express=require("express")
const router=express.Router()
const {peoples}=require('../data')


router.get('/',(req,res)=>
    {
    res.json(peoples)
    })
    
router.get('/:Id',(req,res)=>
    {
        const {Id}=req.params
        const returnItem=peoples.find(item=>{return item.id === Number(Id) } )
        res.json(returnItem)
    })

router.post('/add-peopls',(req,res)=>
{
const newp=req.body
const newarr=[...peoples,newp]
res.json(newarr)
})

router.put('/update-peopls',(req,res)=>
{
   const changeId = req.body.id
const newarr=peoples.map((item)=>{if (item.id===Number(changeId))
return req.body
return item})
res.json(newarr)
})

router.delete('/delete-peopls',(req,res)=>
{
        const deletItem = req.body.id
        const newarr=peoples.filter(item=>item.id!=Number(deletItem))
        res.json(newarr)
})

module.exports=router
