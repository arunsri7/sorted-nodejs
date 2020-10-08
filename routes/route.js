import express from 'express'
const router = express.Router()
import {BubbleSort} from './sorting-algorithms.js'

router.get('/bubbleSort',(request,response)=>{
    let a = BubbleSort(request.body.array)
    response.send(a)
});


export default router;