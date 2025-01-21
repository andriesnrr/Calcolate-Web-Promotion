import React from "react";
import Header1 from "@/Pages/Header";
import { Hero5 } from "@/Pages/Hero";
import { Feature1 } from "@/Pages/Features";
import { Testimonials1 } from "@/Pages/Testimonial";
import { FAQ2 } from "@/Pages/FAQ";
import { Contact1 } from "@/Pages/Contact";
import Footer1 from "@/Pages/Footer";

const Home = () => (
    <div>
        {/* Header */}
        <Header1 />

        {/* Hero Section */}
        <section id="home">
            <Hero5 />
        </section>

        {/* Features Section */}
        <section id="features">
            <Feature1 />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials">
            <Testimonials1 />
        </section>

        {/* FAQ Section */}
        <section id="faq">
            <FAQ2 />
        </section>

        {/* Contact Section */}
        <section id="contact">
            <Contact1 />
        </section>

        {/* Footer */}
        <Footer1 />
    </div>
);

export default Home;
