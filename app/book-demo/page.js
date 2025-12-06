'use client'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useEffect } from "react"

export default function BookDemo() {
    useEffect(() => {
        (function (C, A, L) {
            let p = function (a, ar) { a.q.push(ar); };
            let d = C.document;
            C.Cal = C.Cal || function () {
                let cal = C.Cal;
                let ar = arguments;
                if (!cal.loaded) {
                    cal.ns = {};
                    cal.q = cal.q || [];
                    d.head.appendChild(d.createElement("script")).src = A;
                    cal.loaded = true;
                }
                if (ar[0] === L) {
                    const api = function () { p(api, arguments); };
                    const namespace = ar[1];
                    api.q = api.q || [];
                    if (typeof namespace === "string") {
                        cal.ns[namespace] = cal.ns[namespace] || api;
                        p(cal.ns[namespace], ar);
                        p(cal, ["initNamespace", namespace]);
                    } else p(cal, ar);
                    return;
                }
                p(cal, ar);
            };
        })(window, "https://cal.id/embed-link/embed.js", "init");

        Cal("init", "default", { origin: "https://cal.id" });

        Cal.ns["default"]("inline", {
            elementOrSelector: "#my-cal-inline",
            config: { "layout": "month_view" },
            calLink: "syncflo-ai/product-walkthrough",
        });

        Cal.ns["default"]("ui", { "cssVarsPerTheme": { "light": { "cal-brand": "#007ee5" }, "dark": { "cal-brand": "#fafafa" } }, "hideEventTypeDetails": false, "layout": "month_view" });
    }, [])

    return (
        <div className="bg-primary min-h-screen text-white font-sans selection:bg-neon-blue/30 overflow-x-hidden flex flex-col">
            <Navbar />

            <main className="flex-grow pt-32 pb-20 container mx-auto px-6">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
                        Book a <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Demo</span>
                    </h1>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        Schedule a personalized walkthrough of SyncFlo AI. See how our voice agents and WhatsApp automation can transform your business.
                    </p>
                </div>

                <div style={{ width: "100%", height: "100%", overflow: "scroll" }} id="my-cal-inline"></div>
            </main>

            <Footer />
        </div>
    )
}
