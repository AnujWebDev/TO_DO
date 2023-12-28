import { Contact } from "../modals/contact.js";

export const addContact=(async(req,res)=>{
    // res.json("Add Contact is working...!");
    const {name,gmail,phone,ctype} =req.body;
    let contact = await Contact.findOne({gmail});
    let phoneNumber = await Contact.findOne({phone});
    if(contact || phoneNumber) return res.json({message:"Contact Already Existed...!"});
    contact = await Contact.create({
        name,
        gmail,
        phone,
        ctype
    })
    res.json({message:'Contact Saved',contact});
})

export const getContacts=(async(req,res)=>{
    // console.log("getContacts is working");
    const contact=await Contact.find();
    res.json({message:'All fetched Contacts',contact});
})

export const updateById=(async(req,res)=>{
    const contactId=req.params.id;
    let contact= await Contact.findById(contactId);
    if(!contact)return res.json({message:"Invalid id....!"});
    const {name,gmail,phone,ctype}=req.body;
    contact.name=name;
    contact.gmail=gmail;
    contact.phone=phone;
    contact.ctype=ctype;

    await contact.save();
    res.json({message:"Updated",contact});
});

export const deleteById=(async(req,res)=>{
    // console.log("delete route is working");
    const contactId=req.params.id;
    let contact=await Contact.findById(contactId);
    if(!contact) return res.json({message:'id already deleted'});
    await Contact.deleteOne();
    res.json(
        {
            success:true,
            message:'Contact deleted Succesfully'
        }
    )
    
});

export const getContactById=(async(req,res)=>{
    const Id=req.params.id;
    let contact= await Contact.findById(Id);
    if(!contact)return res.json({message:"id not exist....!"});
    res.json({contact});
})
