export default function Header() {
    return (
        <header className="bg-gray-900 text-white p-4">
            <h1 className="text-xl font-bold">My Portfolio</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="/" className="hover:text-gray-400">About Me</a></li>
                    <li><a href="/projects" className="hover:text-gray-400">Projects</a></li>
                    <li><a href="/contact" className="hover:text-gray-400">Get in Touch</a></li>
                </ul>
            </nav>
        </header>
    );
}
