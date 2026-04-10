import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/contact-schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.flatten() },
        { status: 400 },
      );
    }

    // TODO: Send email using Resend, SendGrid, or similar service
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "contact@marcelhudy.com",
    //   to: "hudymarcel@gmail.com",
    //   subject: `[Portfolio] ${result.data.subject}`,
    //   text: `Name: ${result.data.name}\nEmail: ${result.data.email}\n\n${result.data.message}`,
    // });

    console.log("Contact form submission:", result.data);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
