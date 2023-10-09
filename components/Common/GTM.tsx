import Script from 'next/script';

function GTM() {
    return (
        <>
            {/* Google Tag Manager */}
            <Script
                id="gtm-script"
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtm.js?id=GTM-W996R7FZ`}
                async
            >
                {`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-W996R7FZ');
                `}
            </Script>
            {/* End Google Tag Manager */}
            {/* Google Tag Manager (noscript) */}
            <noscript
                dangerouslySetInnerHTML={{
                    __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W996R7FZ"
                    height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                }}
            />
            {/* End Google Tag Manager (noscript) */}
        </>
    );
}

export default GTM;
