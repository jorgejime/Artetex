
import React, { useState, useEffect } from 'react';
import { Loader2, ImageOff } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string | null | undefined;
  alt: string;
  className?: string;
  containerClassName?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ 
  src, 
  alt, 
  className = "", 
  containerClassName = "" 
}) => {
  const [status, setStatus] = useState<'loading' | 'error' | 'loaded'>(src ? 'loading' : 'error');

  useEffect(() => {
    if (!src) {
      setStatus('error');
    } else {
      setStatus('loading');
    }
  }, [src]);

  const handleLoad = () => setStatus('loaded');
  const handleError = () => setStatus('error');

  return (
    <div className={`relative overflow-hidden bg-neutral-gray flex items-center justify-center ${containerClassName}`}>
      {status === 'loading' && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-gray z-10 animate-pulse">
          <Loader2 className="w-6 h-6 animate-spin text-text-muted opacity-20" />
        </div>
      )}

      {status === 'error' ? (
        <div className="flex flex-col items-center justify-center p-8 text-center bg-black w-full h-full text-white">
          <ImageOff className="w-8 h-8 mb-4 opacity-30" />
          <p className="text-[10px] font-900 uppercase tracking-[0.3em] opacity-50">IMAGEN NO DISPONIBLE</p>
          <p className="text-[8px] font-400 mt-2 opacity-30 uppercase">Error de servidor o ruta inválida</p>
        </div>
      ) : (
        <img
          src={src || undefined}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`${className} transition-opacity duration-700 ${status === 'loaded' ? 'opacity-100' : 'opacity-0'}`}
        />
      )}
    </div>
  );
};
