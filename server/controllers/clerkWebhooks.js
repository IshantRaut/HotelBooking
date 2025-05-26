import { response } from 'express';
import User from '../models/User.js';
import { Webhook } from 'svix';

const clerkWebhooks = async ()=>{
    try {
        // Initialize the Webhook with your Clerk secret
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

        //Getting headers

        const headers = {
            "svix-id":req.headers['svix-id'],
            "svix-timestamp":req.headers['svix-timestamp'],
            "svix-signature":req.headers['svix-signature'],

        };

        // Getting the body of the request
        await whook.verify(JSON.stringify(req.body), headers);
        // Extract the event type and data
        const {data,type} = req.body
        const userData = {
            _id:data.id,
            email:data.email_addresses[0].email_address,
            username:data.firstname + " " + data.lastname,
            image:data.image_url,
        }

        switch(type){
            case 'user.created':{
                // Create a new user in your database
                await User.create(userData);
                break;
            }
            case 'user.updated':{
                // Update the existing user in your database
                await User.findByIdAndUpdate(data.id, userData);
               
                break;
            }
            case 'user.deleted':{
                // Update the existing user in your database
                await User.findByIdAndDelete(data.id);
               
                break;
            }
            default:
                break;
        }
        response.json({success:true,message:"Webhook processed successfully"});
    } catch (error) {
        console.log("Error processing webhook:", error.message);
        response.json({success:false,message:"Error processing webhook",error:error.message});
    }
}
export default clerkWebhooks;