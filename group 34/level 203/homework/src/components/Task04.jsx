import { useEffect, useState } from "react"

export default function Task04(){
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        function handleOnline(){setIsOnline(true)};
        function handleOffline(){setIsOnline(false)};
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        }
    }, []);

    return (
        <div>
            <p className="text-[30px] font-[500]">{isOnline ? 'Online🟢' : 'Offline🔴'}</p>
        </div>
    )
}