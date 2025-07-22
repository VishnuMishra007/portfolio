export const Footer: React.FC = () => {
    return(
        <footer>
            <span className="text-xs">© {new Date().getFullYear()} VishnuMishra007. All rights reserved.</span>
            <a className="text-xs hover:underline hover:text-blue-400" href="https://github.com/VishnuMishra007" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '1rem' }}>
                GitHub
            </a>
            <a className="text-xs hover:underline hover:text-blue-400" href="https://www.linkedin.com/in/vishnu-mishra-0a7a2a158/" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '1rem' }}>
                LinkedIn
            </a>
        </footer>
    );
}