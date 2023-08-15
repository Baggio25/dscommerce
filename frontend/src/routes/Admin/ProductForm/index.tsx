

import "./styles.css";

export function ProductForm() {
  return (
    <main>
      <section className="dsc-container">
        <div className="dsc-product-form-container">
          <form className="dsc-card dsc-form">
            <h2>Login</h2>
            <div className="dsc-form-controls-container">
              <div>
                <input
                  className="dsc-form-control"
                  type="text"
                  placeholder="Nome"
                  autoFocus
                />
              </div>
              <div>
                <input
                  className="dsc-form-control"
                  type="text"
                  placeholder="Preço"
                />
              </div>
              <div>
                <input
                  className="dsc-form-control"
                  type="text"
                  placeholder="Imagem"
                />
              </div>
              <div>
                <select className="dsc-form-control dsc-select" required>
                  <option disabled selected>
                    Categorias
                  </option>
                  <option>Eletrônicos</option>
                  <option>Informática</option>
                </select>
              </div>
              <div>
                <textarea
                  className="dsc-form-control dsc-text-area"
                  placeholder="Descrição"
                ></textarea>
              </div>
            </div>

            <div className="dsc-product-form-buttons">
              <button type="submit" className="dsc-btn dsc-btn-white">
                Cancelar
              </button>
              <button type="submit" className="dsc-btn dsc-btn-blue">
                Salvar
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
