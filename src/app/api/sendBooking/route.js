import nodemailer from "nodemailer";

export async function POST(request) {
    const data = await request.formData();

    const fullName = data.get('fullName');
    const email = data.get('email');
    const phone = data.get('phone');
    const pickupDate = data.get('pickupDate');
    const dropoffDate = data.get('dropoffDate');
    const paymentMethod = data.get('paymentMethod');
    const notes = data.get('notes');
    const carName = data.get('carName');
    const price = data.get('price');

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: `"${fullName}" <${email}>`,
        to: "tailogant@gmail.com",
        subject: `New Car Booking - ${carName}`,
        html: `
            <h2>New Car Booking Details</h2>
            <p><b>Car:</b> ${carName} (${price})</p>
            <p><b>Name:</b> ${fullName}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phone}</p>
            <p><b>Pick-up Date:</b> ${pickupDate}</p>
            <p><b>Drop-off Date:</b> ${dropoffDate}</p>
            <p><b>Payment Method:</b> ${paymentMethod}</p>
            <p><b>Notes:</b> ${notes}</p>
        `
        // Optional CC agar customer ko bhi email bhejna hai:
        // cc: email,
    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error("Email Error:", error);
        return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
    }
}
