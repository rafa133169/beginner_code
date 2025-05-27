const Opening: React.FC = () => {
  return (
    <div
      className="w-full h-screen flex flex-col justify-end items-center"
      style={{
        background: 'linear-gradient(180deg, #DF7A92 0%, #FFD0E6 60%, #FDD3D0 100%)',
      }}
    >
      {/* Espacio para el logo */}
      <div className="mb-16 flex flex-col items-center">
        {/* Reemplaza la ruta por la de tu logo */}
        <img
          src="/../public/logopill.png"
          alt="PillControlBand"
          className="w-56 max-w-xs"
        />
      </div>
    </div>
  );
};

export default Opening;