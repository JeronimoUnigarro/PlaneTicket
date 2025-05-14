"use client";

import React from "react";
import { Plane } from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";

const BoardingPass = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FF8300] p-4">
      <div className="relative flex flex-col md:flex-row w-full max-w-2xl bg-white rounded-xl shadow-lg overflow-hidden">
        
        {/* Sección QR */}
        <div className="relative p-6 flex-shrink-0 border-b md:border-b-0 md:border-r border-dashed border-gray-300 flex items-center justify-center">
          {/* Círculos troquelados */}
          <div className="hidden md:block absolute -top-3 right-0 translate-x-1/2 w-6 h-6 bg-[#FF8300] rounded-full z-10 border-4 border-white"></div>
          <div className="hidden md:block absolute -bottom-3 right-0 translate-x-1/2 w-6 h-6 bg-[#FF8300] rounded-full z-10 border-4 border-white"></div>
          {/* Círculos móviles (versión vertical) */}
          <div className="md:hidden absolute left-0 bottom-0 translate-y-1/2 w-6 h-6 bg-[#FF8300] rounded-full z-10 border-4 border-white"></div>
          <div className="md:hidden absolute right-0 bottom-0 translate-y-1/2 w-6 h-6 bg-[#FF8300] rounded-full z-10 border-4 border-white"></div>

          <div className="w-32 h-32 bg-white flex items-center justify-center">
            <QRCodeCanvas value="https://jetairways.com/boarding/NikitaSharma" size={110} />
          </div>
        </div>

        {/* Sección principal */}
        <div className="flex-grow p-6">
          {/* Encabezado de aerolínea (versión móvil) */}
          <div className="md:hidden mb-4 text-right">
            <p className="text-sm font-bold text-blue-900">JET AIRWAYS</p>
          </div>

          {/* Ruta del vuelo */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-sm text-gray-600">Mumbai, India</p>
              <h1 className="text-4xl font-bold text-blue-900">BOM</h1>
            </div>

            <div className="flex items-center mx-2">
              <div className="w-10 h-px bg-gray-300"></div>
              <Plane className="mx-1 text-gray-500 rotate-90" size={18} />
              <div className="w-10 h-px bg-gray-300"></div>
            </div>

            <div className="text-right">
              <p className="text-sm text-gray-600">Amsterdam, Netherlands</p>
              <h1 className="text-4xl font-bold text-blue-900">AMS</h1>
            </div>
          </div>

          {/* Fechas y horas */}
          <div className="flex justify-between mb-6">
            <div>
              <p className="text-xs text-gray-500">
                Wed, July 27<sup>th</sup>
              </p>
              <p className="font-semibold text-gray-700">1:00 AM</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">
                Thu, July 27<sup>th</sup>
              </p>
              <p className="font-semibold text-gray-700">8:30 AM</p>
            </div>
          </div>

          {/* Línea divisoria */}
          <div className="border-t border-dashed border-gray-300 mb-4"></div>

          {/* Información del pasajero */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs">
            <div>
              <p className="text-gray-500">Passenger</p>
              <p className="font-medium text-gray-700">Nikita Sharma</p>
            </div>
            <div>
              <p className="text-gray-500">Seat</p>
              <p className="font-medium text-gray-700">4A</p>
            </div>
            <div>
              <p className="text-gray-500">Terminal</p>
              <p className="font-medium text-gray-700">D</p>
            </div>
            <div>
              <p className="text-gray-500">Gate</p>
              <p className="font-medium text-gray-700">32</p>
            </div>
            <div>
              <p className="text-gray-500">Boarding</p>
              <p className="font-medium text-gray-700">12:40 PM</p>
            </div>
          </div>
        </div>

        {/* Barra lateral derecha (solo en pantallas grandes) */}
        <div className="hidden md:flex bg-blue-900 text-white min-w-[40px] relative">
          <div className="absolute -rotate-90 whitespace-nowrap top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-bold tracking-widest">
            BOARDING PASS ✈ JET AIRWAYS
          </div>
        </div>
      </div>

      {/* Franja azul en la parte inferior (solo en móviles) */}
      <div className="md:hidden bg-blue-900 text-white p-4 text-center mt-4">
        BOARDING PASS ✈ JET AIRWAYS
      </div>
    </div>
  );
};

export default BoardingPass;
