
import React, { useState, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Upload, Loader2, AlertCircle } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export const AILab: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [resultVideo, setResultVideo] = useState<string | null>(null);
  const [aspectRatio, setAspectRatio] = useState<'16:9' | '9:16'>('16:9');
  const [error, setError] = useState<string | null>(null);
  const [loadingMsg, setLoadingMsg] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setResultImage(null);
        setResultVideo(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const editImage = async () => {
    if (!image || !prompt) return;
    setIsEditing(true);
    setLoadingMsg('PROCESANDO IMAGEN...');
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const base64Data = image.split(',')[1];
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            { inlineData: { data: base64Data, mimeType: 'image/png' } },
            { text: `Modify the textile pattern based on: ${prompt}. Objective professional style.` }
          ]
        }
      });
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          setResultImage(`data:image/png;base64,${part.inlineData.data}`);
          break;
        }
      }
    } catch (err) { setError('ERROR_IMAGEN_S01'); } finally { setIsEditing(false); }
  };

  const generateVideo = async () => {
    if (!image) return;
    if (!(await (window as any).aistudio.hasSelectedApiKey())) {
      await (window as any).aistudio.openSelectKey();
      return;
    }
    setIsAnimating(true);
    setLoadingMsg('RENDERIZANDO SECUENCIA VEO');
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const base64Data = image.split(',')[1];
      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: prompt || 'Movimiento abstracto de tela cinematográfico.',
        image: { imageBytes: base64Data, mimeType: 'image/png' },
        config: { numberOfVideos: 1, resolution: '720p', aspectRatio: aspectRatio }
      });
      while (!operation.done) {
        await new Promise(r => setTimeout(r, 10000));
        operation = await ai.operations.getVideosOperation({ operation: operation });
      }
      const res = await fetch(`${operation.response?.generatedVideos?.[0]?.video?.uri}&key=${process.env.API_KEY}`);
      setResultVideo(URL.createObjectURL(await res.blob()));
    } catch (err) { setError('ERROR_VIDEO_VEO'); } finally { setIsAnimating(false); }
  };

  return (
    <section className="min-h-screen pt-32 px-8 md:px-16 lg:px-24 bg-white border-t border-black">
      <div className="max-w-screen-2xl mx-auto flex flex-col gap-24 pb-32">
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4">
             <span className="text-black text-sm font-900 uppercase tracking-[0.4em]">SECCIÓN 05</span>
          </div>
          <div className="lg:col-span-8 flex flex-col gap-8">
            <h2 className="text-black text-6xl md:text-8xl font-900 tracking-tighter leading-none uppercase">ESTUDIO AI</h2>
            <p className="text-black text-2xl font-300 max-w-2xl uppercase">Prototipado digital para la industria textil experimental.</p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-black overflow-hidden">
          {/* Controles: Columna Izquierda */}
          <div className="lg:col-span-5 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-black flex flex-col gap-12 bg-white">
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="aspect-square border border-black flex flex-col items-center justify-center cursor-pointer hover:bg-neutral-gray transition-colors relative group overflow-hidden"
            >
              <input type="file" ref={fileInputRef} hidden onChange={handleFileUpload} accept="image/*" />
              {image ? (
                <ImageWithFallback src={image} alt="Carga" containerClassName="w-full h-full grayscale group-hover:grayscale-0" className="w-full h-full object-cover" />
              ) : (
                <div className="text-center p-6">
                  <Upload className="w-12 h-12 mx-auto mb-4" />
                  <p className="text-[10px] font-900 uppercase tracking-[0.2em]">Carga_Fuente</p>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <label className="text-[10px] font-900 uppercase tracking-widest border-b border-black pb-1">Parámetros de entrada</label>
                <textarea 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="w-full border border-black p-4 text-[12px] font-400 focus:bg-neutral-gray outline-none transition-all uppercase placeholder:text-text-muted/30"
                  placeholder="Instrucciones de modificación técnica..."
                  rows={4}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <button onClick={editImage} disabled={isEditing || isAnimating || !image} className="bg-black text-white py-4 text-[11px] font-900 uppercase tracking-widest hover:bg-primary hover:text-black transition-all disabled:opacity-20">Editar_Patrón</button>
                 <button onClick={generateVideo} disabled={isEditing || isAnimating || !image} className="border border-black text-black py-4 text-[11px] font-900 uppercase tracking-widest hover:bg-black hover:text-white transition-all disabled:opacity-20">Anim_Secuencia</button>
              </div>
            </div>
          </div>

          {/* Pantalla de Resultados: Columna Derecha */}
          <div className="lg:col-span-7 bg-neutral-gray p-8 md:p-12 flex flex-col items-center justify-center relative min-h-[500px]">
            <div className="w-full h-full border border-black bg-white flex items-center justify-center overflow-hidden relative shadow-inner">
               {isEditing || isAnimating ? (
                 <div className="text-center z-10 bg-white/80 backdrop-blur-sm p-10 border border-black">
                   <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4" />
                   <p className="text-[11px] font-900 uppercase tracking-[0.3em]">{loadingMsg}</p>
                 </div>
               ) : resultImage ? (
                 <ImageWithFallback src={resultImage} alt="Salida AI" containerClassName="w-full h-full" className="w-full h-full object-cover" />
               ) : resultVideo ? (
                 <video src={resultVideo} controls autoPlay loop className="w-full h-full object-cover" />
               ) : (
                 <div className="text-center opacity-20 group">
                    <p className="text-[10px] font-900 uppercase tracking-[0.5em] transition-all group-hover:tracking-[0.8em]">Esperando_Señal_Entrada</p>
                 </div>
               )}
            </div>
            {error && (
              <div className="absolute bottom-4 left-4 right-4 bg-red-600 text-white p-4 text-[11px] font-900 flex items-center gap-3 uppercase tracking-tighter border border-black shadow-xl z-20 animate-fade-in">
                <AlertCircle className="w-5 h-5 flex-shrink-0"/> 
                <span>Error_Sistema: {error}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
