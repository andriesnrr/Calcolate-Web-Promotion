import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

const Footer1 = () => (
    <footer className="bg-[#0D1F23] text-white py-8">
        <div className="container mx-auto text-center">
            <p>© {new Date().getFullYear()} Calcolate. All Rights Reserved.</p>
            <div className="mt-4">
                <InertiaLink href="/terms" className="text-gray-400 hover:underline">
                    Terms of Service
                </InertiaLink>{" "}
                |{" "}
                <InertiaLink href="/privacy" className="text-gray-400 hover:underline">
                    Privacy Policy
                </InertiaLink>
            </div>
        </div>
    </footer>
);

export default Footer1;
