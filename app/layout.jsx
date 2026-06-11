import '../styles/mirror-house.css';

export const metadata = {
    title: {
        template: '%s | The Silver Seraphim',
        default: 'The Silver Seraphim'
    },
    description: 'What the camera sees. What the mirror keeps. — thesilverseraphim.com'
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="mh-root">{children}</body>
        </html>
    );
}
