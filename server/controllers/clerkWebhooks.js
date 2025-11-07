import User from '../models/User.js';
import { Webhook } from 'svix';

const clerkWebhooks = async (req, res) => {
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    const headers = {
      "svix-id": req.headers['svix-id'],
      "svix-timestamp": req.headers['svix-timestamp'],
      "svix-signature": req.headers['svix-signature'],
    };

    // Verify signature using raw body Buffer
    whook.verify(req.body, headers);

    // Parse the raw body to JSON
    const evt = JSON.parse(req.body.toString());
    const { data, type } = evt;

    const userData = {
      _id: data.id,
      email: data.email_addresses[0].email_address,
      username: data.first_name + " " + data.last_name,
      image: data.image_url,
    };

    console.log("Received webhook type:", type);
    console.log("User data:", userData);

    switch (type) {
      case 'user.created':
        await User.create(userData);
        break;
      case 'user.updated':
        await User.findByIdAndUpdate(data.id, userData);
        break;
      case 'user.deleted':
        await User.findByIdAndDelete(data.id);
        break;
      default:
        break;
    }

    return res.status(200).json({ success: true, message: "Webhook processed successfully" });
  } catch (error) {
    console.error("Error processing webhook:", error.message);
    return res.status(500).json({ success: false, message: "Error processing webhook", error: error.message });
  }
};

export default clerkWebhooks;
