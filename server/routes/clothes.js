const express=require("express")
const router=express.Router()
const {clothesData}=require('../data')


router.get('/',(req,res)=>
    {
    res.json(clothesData)
    })
    
router.get('/:Id',(req,res)=>
    {
        const {Id}=req.params
        const returnItem=clothesData.find(item=>{return item.id === Number(Id) } )
        res.json(returnItem)
    })

router.post('/add-clothes',(req,res)=>
     {
        const newarr=[...clothesData,req.body]
        res.json(newarr)
     })

router.put('/update-clothes',(req,res)=>
    {
        const changeId = req.body.id
        const newarr=clothesData.map((item)=>{if (item.id===Number(changeId))
        return req.body
        return item})
        res.json(newarr)
    })
     
router.delete('/delete-clothes',(req,res)=>
    {
            const deletItem = req.body.id
            const newarr=clothesData.filter(item=>item.id!=Number(deletItem))
            res.json(newarr)
    })
module.exports=router