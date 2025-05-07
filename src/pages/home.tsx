import React from 'react';

export default function Home() {
    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <iframe
                src="/mainPage.html"
                style={{ width: '100%', height: '100%', border: 'none' }}
            />
        </div>
    );
}
