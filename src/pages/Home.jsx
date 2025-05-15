import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Carrusel */}
      <section className="carousel">
        <h1>Bienvenido al Cine</h1>
        <p>Disfruta de tus películas favoritas en nuestras salas exclusivas.</p>
      </section>

      {/* Sección de Salas */}
      <section className="salas">
        <h2>Nuestras Salas</h2>
        <div className="sala-list">
          <div className="sala-card">
            <h3>Sala 1</h3>
            <p>Capacidad: 50 personas</p>
          </div>
          <div className="sala-card">
            <h3>Sala 2</h3>
            <p>Capacidad: 70 personas</p>
          </div>
          <div className="sala-card">
            <h3>Sala 3</h3>
            <p>Capacidad: 100 personas</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;