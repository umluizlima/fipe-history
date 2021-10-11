const Footer = () => (
  <div className="container mx-auto">
    <div className="mt-6 border-t-2 border-gray-300">
      <div className="text-center py-6 flex flex-col sm:flex-row justify-between px-6">
        <p className="mb-2 text-base text-gray-500">
          Projetado por <a target="_blank" rel="noopener noreferrer" href="https://umluizlima.dev/" className="font-bold text-blue-600 hover:text-blue-800">umluizlima</a>
        </p>
        <p className="mb-2 text-base text-gray-500">
          Código disponível no <a target="_blank" rel="noopener noreferrer" href="https://github.com/umluizlima/fipe-history/" className="font-bold text-blue-600 hover:text-blue-800">GitHub</a>
        </p>
      </div>
    </div>
  </div>
);

export default Footer;
