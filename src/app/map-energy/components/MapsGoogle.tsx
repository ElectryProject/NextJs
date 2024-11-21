"use client";

//API Google My Maps
export default function MapsGoogle() {
  return (
    <div className="mt-9 flex flex-col gap-10">
      <h1 className="text-center font-bold text-2xl">Acompanhe os <span className="text-[#E5B43B]">Pontos de Coleta no Mapa</span>!</h1>
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1-QeZrfWszfcdkIPXENnI1YsaqHGHGKU&ehbc=2E312F"
        width="100%"
        height="600"
        style={{ border: "none" }}
        loading="lazy"
        title="Meu Mapa do Google My Maps"
      ></iframe>
    </div>
  );
}
