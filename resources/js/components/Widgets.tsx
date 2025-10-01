import { useAppearance } from '@/hooks/use-appearance';
import type { InfoT } from '@/types';
import { usePage } from '@inertiajs/react';
import React, { useEffect } from 'react';

type WidgetProps<T = any> = {
    apiUrl: string;
    apiKey: string;
    darkMode: boolean;
    lang: string;
} & T;

function useWidgets() {
    const { info } = usePage<{ info: InfoT }>().props;
    const { isDark } = useAppearance();
    useEffect(() => {
        const scriptId = 'lbs-widgets-script';
        if (document.getElementById(scriptId)) return;
        const script = document.createElement('script');
        script.id = scriptId;
        script.async = true;
        script.src = info.lbsupp_api_url + '/widgets-dist/lbs-widgets.js?a=' + Date.now();
        document.body.appendChild(script);
    }, [info.lbsupp_api_url]);
    return { apiUrl: info.lbsupp_api_url, apiKey: info.lbsupp_api_key, darkMode: isDark, lang: 'en' };
}

export function WidgetChat(props: React.HTMLAttributes<HTMLDivElement>) {
    const { apiUrl, apiKey, darkMode, lang } = useWidgets();
    const Chat = (props: WidgetProps) => React.createElement('x-lbs-chat', props);
    return (
        <div {...props}>
            <Chat apiUrl={apiUrl} apiKey={apiKey} darkMode={darkMode} lang={lang} />
        </div>
    );
}

export function WidgetFlyer(props: React.HTMLAttributes<HTMLDivElement>) {
    const { apiUrl, apiKey, darkMode, lang } = useWidgets();
    const Flyer = (props: WidgetProps) => React.createElement('x-lbs-flyer', props);
    return (
        <div {...props}>
            <Flyer apiurl={apiUrl} apikey={apiKey} darkmode={darkMode} lang={lang} />
        </div>
    );
}
