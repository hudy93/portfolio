"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { contactFormSchema, ContactFormValues } from "@/lib/contact-schema";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Send, ArrowLeftIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ContactForm = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus("loading");
    try {
      const formData = new FormData();
      formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY!);
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("subject", data.subject);
      formData.append("message", data.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      if (!result.success) throw new Error("Failed to send message");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-12 xl:py-24">
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello
            </div>
            <h1 className="h1 max-w-md mb-8">Let&apos;s Work Together.</h1>
            <p className="subtitle max-w-[400px]">
              Have a project in mind or just want to say hello? Fill out the
              form and I&apos;ll get back to you as soon as possible.
            </p>
          </div>
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>
        <div className="grid xl:grid-cols-2 gap-12 items-start">
        <div className="max-w-[600px] mx-auto xl:mx-0">
          {status === "success" ? (
            <div className="text-center py-12">
              <MailIcon className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="h3 mb-4">Message Sent!</h3>
              <p className="subtitle">
                Thank you for reaching out. I&apos;ll get back to you soon.
              </p>
              <Link href="/">
                <Button variant="secondary" className="gap-x-2">
                  <ArrowLeftIcon size={18} /> Back to Home
                </Button>
              </Link>
            </div>
          ) : (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-y-4"
              >
                <div className="flex gap-4 flex-col md:flex-row">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="What is this about?"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message..."
                          className="min-h-[150px] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <p className="text-sm text-muted-foreground">
                  By submitting this form, you agree to the processing of your
                  data as described in our{" "}
                  <Link
                    href="/datenschutz"
                    className="underline hover:text-primary"
                  >
                    privacy policy
                  </Link>
                  .
                </p>
                {status === "error" && (
                  <p className="text-destructive text-sm">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}
                <Button
                  type="submit"
                  className="gap-x-2 max-w-[166px]"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                  <Send size={18} />
                </Button>
              </form>
            </Form>
          )}
        </div>
        <div className="hidden xl:flex justify-center items-start">
          <Image
            src="/hero/contact-hudy.png"
            alt="Marcel Hudy"
            width={400}
            height={400}
            className="rounded-[30px]"
            priority
          />
        </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
