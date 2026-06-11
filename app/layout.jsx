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
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Cormorant+Garant:ital,wght@0,300;0,400;1,300;1,400;1,500&family=Cormorant+SC:wght@300;400&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="mh-root">{children}</body>
        </html>
    );
}
