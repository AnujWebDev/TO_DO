import express from "express";
import { addContact } from "../controllers/contact.js";
import { getContacts } from "../controllers/contact.js";
import { updateById } from "../controllers/contact.js";
import { deleteById } from "../controllers/contact.js";
import { getContactById } from "../controllers/contact.js";
const router=express();

router.get('/',(req,res)=>{
    res.json("Converting into MVC Structure...!");
});

router.post('/addcontact', addContact);

router.get('/getcontacts',getContacts);

router.put('/:id',updateById);

router.delete('/:id',deleteById);

router.get("/:id",getContactById);

export default router;