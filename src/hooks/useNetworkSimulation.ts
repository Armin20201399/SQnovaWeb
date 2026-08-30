import { useState, useEffect, useRef, useCallback } from 'react';

export function useNetworkSimulation(enabled: boolean) {
  const [zeroVal, setZeroVal] = useState('0.0%');
  const [uptimeVal, setUptimeVal] = useState('99.99%');
  const [hubPing, setHubPing] = useState(58);
  const [euPings, setEuPings] = useState([85, 95, 90]);
  const [iranPings, setIranPings] = useState([12, 15, 19]);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const start = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    intervalRef.current = setInterval(() => {
      setEuPings(prev => prev.map(p => Math.max(60, Math.min(120, p + Math.floor(Math.random() * 9) - 4))));
      setIranPings(prev => prev.map(p => Math.max(8, Math.min(40, p + Math.floor(Math.random() * 7) - 3))));
      setHubPing(prev => Math.max(54, Math.min(64, prev + Math.floor(Math.random() * 5) - 2)));
    }, 2000);

    const scheduleNext = () => {
      const delay = Math.floor(Math.random() * 1000) + 1000;
      timeoutRef.current = setTimeout(() => {
        const possibleLoss = ['0.0%', '0.1%', '0.0%', '1.0%', '0.0%'];
        setZeroVal(possibleLoss[Math.floor(Math.random() * possibleLoss.length)]);
        const possibleUptime = ['99.99%', '99.98%', '99.97%', '99.96%', '99.95%'];
        setUptimeVal(possibleUptime[Math.floor(Math.random() * possibleUptime.length)]);
        scheduleNext();
      }, delay);
    };
    scheduleNext();
  }, []);

  useEffect(() => {
    if (!enabled) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      return;
    }
    start();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [enabled, start]);

  return { zeroVal, uptimeVal, hubPing, euPings, iranPings };
}