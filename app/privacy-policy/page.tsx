import Head from "next/head";

export default function Privacy() {
    return (
        <>
            <Head>
                <title>Privacy Policy | AutoService Software</title>
                <meta name="description" content="Privacy Policy of AutoService - custom software for automotive businesses" />
            </Head>
            <main className=" mx-auto px-6 py-12 text-white bg-[#0b0c19] min-h-screen">
                <h1 className="text-3xl font-bold mb-8 text-center">Privacy Policy</h1>

                <section className="space-y-6 text-gray-300">
                    <p>
                        At <strong>AutoService</strong>, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website and services.
                    </p>

                    <h2 className="text-xl font-semibold text-white">1. Information We Collect</h2>
                    <ul className="list-disc list-inside ml-4">
                        <li>Personal details you provide through contact forms (name, email, phone)</li>
                        <li>Project and business-related information you share with us</li>
                        <li>Usage data through tools like Google Analytics</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-white">2. How We Use Your Information</h2>
                    <p>We use your information to:</p>
                    <ul className="list-disc list-inside ml-4">
                        <li>Communicate about your project or inquiry</li>
                        <li>Provide custom software solutions for your business</li>
                        <li>Improve our website and services</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-white">3. Data Protection</h2>
                    <p>
                        We use industry-standard practices to secure your data. Access to your data is limited and protected through authentication and encrypted storage when applicable.
                    </p>

                    <h2 className="text-xl font-semibold text-white">4. Sharing of Information</h2>
                    <p>
                        We do <strong>not</strong> sell, trade, or rent your personal information to others. We only share data if required by law or to provide essential services (e.g., secure hosting, analytics).
                    </p>

                    <h2 className="text-xl font-semibold text-white">5. Cookies</h2>
                    <p>
                        We may use cookies to improve user experience. You can disable cookies in your browser settings.
                    </p>

                    <h2 className="text-xl font-semibold text-white">6. Third-Party Tools</h2>
                    <p>
                        We may use third-party services such as Google Analytics, Calendly, or CRM tools to improve service and communication. These tools may collect anonymized usage data.
                    </p>

                    <h2 className="text-xl font-semibold text-white">7. Your Rights</h2>
                    <p>
                        You have the right to request access to your data, correct it, or request deletion. Contact us anytime at: <a href="mailto:mustakimnagori076@gmail.com" className="underline text-blue-400">mustakimnagori076@gmail.com</a>
                    </p>

                    <h2 className="text-xl font-semibold text-white">8. Updates to This Policy</h2>
                    <p>
                        We may update this Privacy Policy as our services evolve. Updates will be posted on this page with a revised effective date.
                    </p>

                    <p className="text-sm text-gray-400 pt-4">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>
                </section>
            </main>
        </>
    );
}
