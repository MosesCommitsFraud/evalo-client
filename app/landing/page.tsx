import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="border-b border-gray-200 dark:border-gray-700">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <Image
                            src="/next.svg"
                            alt="Evalo Logo"
                            width={120}
                            height={30}
                            className="dark:invert"
                        />
                        <span className="font-bold text-xl ml-2 text-gray-800 dark:text-white">Evalo</span>
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        <Link href="/features" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                            Features
                        </Link>
                        <Link href="/pricing" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                            Pricing
                        </Link>
                        <Link href="/docs" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                            Documentation
                        </Link>
                        <Link href="/blog" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                            Blog
                        </Link>
                    </nav>
                    <div className="flex items-center space-x-4">
                        <Link
                            href="/dashboard"
                            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
                        >
                            Dashboard
                        </Link>
                        <Link
                            href="/login"
                            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </header>

            <main className="flex-1">
                <section className="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
                    <div className="container mx-auto px-6 text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                            Sentiment Analysis for Education
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
                            Discover what your students really think about your courses and improve teaching effectiveness with data-driven insights.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                href="/dashboard"
                                className="px-8 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 font-medium text-lg"
                            >
                                Get Started
                            </Link>
                            <Link
                                href="/demo"
                                className="px-8 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 font-medium text-lg"
                            >
                                View Demo
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-white dark:bg-gray-900">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                            How Evalo Works
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Collect Feedback</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Gather feedback from your students through our intuitive interface or integrate with your existing systems.
                                </p>
                            </div>
                            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Analyze Sentiment</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Our advanced AI analyzes the sentiment of student feedback to identify patterns and trends.
                                </p>
                            </div>
                            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Improve Teaching</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Use actionable insights to enhance your teaching methods and improve student satisfaction.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-gray-50 dark:bg-gray-800">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                            Ready to Transform Your Teaching?
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
                            Join thousands of educators who use Evalo to improve their courses and teaching effectiveness.
                        </p>
                        <Link
                            href="/dashboard"
                            className="px-8 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 font-medium text-lg"
                        >
                            Get Started Now
                        </Link>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Evalo</h3>
                            <p className="text-gray-400">
                                Advanced sentiment analysis for education, helping educators improve their teaching experience.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Product</h3>
                            <ul className="space-y-2">
                                <li><Link href="/features" className="text-gray-400 hover:text-white">Features</Link></li>
                                <li><Link href="/pricing" className="text-gray-400 hover:text-white">Pricing</Link></li>
                                <li><Link href="/testimonials" className="text-gray-400 hover:text-white">Testimonials</Link></li>
                                <li><Link href="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Resources</h3>
                            <ul className="space-y-2">
                                <li><Link href="/docs" className="text-gray-400 hover:text-white">Documentation</Link></li>
                                <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
                                <li><Link href="/community" className="text-gray-400 hover:text-white">Community</Link></li>
                                <li><Link href="/support" className="text-gray-400 hover:text-white">Support</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Company</h3>
                            <ul className="space-y-2">
                                <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                                <li><Link href="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
                                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                                <li><Link href="/legal" className="text-gray-400 hover:text-white">Legal</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400">© 2025 Evalo. All rights reserved.</p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <Link href="#" className="text-gray-400 hover:text-white">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                </svg>
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.059 10.059 0 01-3.127 1.184A4.92 4.92 0 0016.953 2a4.928 4.928 0 00-4.927 4.927c0 .39.044.765.127 1.124A13.98 13.98 0 013.093 3.12a4.917 4.917 0 001.524 6.57 4.88 4.88 0 01-2.23-.616v.061a4.926 4.926 0 003.95 4.828 4.993 4.993 0 01-2.224.084 4.935 4.935 0 004.6 3.42A9.886 9.886 0 010 19.54a13.944 13.944 0 007.548 2.208c9.055 0 14.01-7.503 14.01-14.01 0-.213-.005-.425-.014-.636A10.008 10.008 0 0024 4.59z" />
                                </svg>
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                </svg>
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}