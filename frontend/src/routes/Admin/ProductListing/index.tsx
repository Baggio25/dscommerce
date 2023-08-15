import editIcon from "../../../assets/edit.svg";
import deleteIcon from "../../../assets/delete.svg";
import productImg from "../../../assets/computer.png";

import "./styles.css";

export function ProductListing() {
  return (
    <main>
      <section className="dsc-container">
        <h2 className="dsc-section-title dsc-mb-20">Cadastro de Produtos</h2>

        <div className="dsc-btn-page-container dsc-mb-20">
          <div className="dsc-btn dsc-btn-white">Novo</div>
        </div>

        <form className="dsc-search-bar">
          <button type="submit">🔎︎</button>
          <input type="text" placeholder="Nome do produto" />
          <button type="reset">X</button>
        </form>

        <table className="dsc-table dsc-mb-20 dsc-mt-20">
          <thead>
            <th className="dsc-tb576">ID</th>
            <th></th>
            <th className="dsc-tb768">Preço</th>
            <th className="dsc-txt-left">Nome</th>
            <th></th>
            <th></th>
          </thead>
          <tbody>
            <tr>
              <td className="dsc-tb576">341</td>
              <td>
                <img
                  className="dsc-product-listing-image"
                  src={productImg}
                  alt="computer"
                />
              </td>
              <td className="dsc-tb768">R$ 5.000,00</td>
              <td className="dsc-txt-left">Computador Gamer XT</td>
              <td>
                <img
                  className="dsc-product-listing-btn"
                  src={editIcon}
                  alt="edit"
                />
              </td>
              <td>
                <img
                  className="dsc-product-listing-btn"
                  src={deleteIcon}
                  alt="delete"
                />
              </td>
            </tr>
            <tr>
              <td className="dsc-tb576">342</td>
              <td>
                <img
                  className="dsc-product-listing-image"
                  src={productImg}
                  alt="computer"
                />
              </td>
              <td className="dsc-tb768">R$ 5.000,00</td>
              <td className="dsc-txt-left">Computador Gamer XT</td>
              <td>
                <img
                  className="dsc-product-listing-btn"
                  src={editIcon}
                  alt="edit"
                />
              </td>
              <td>
                <img
                  className="dsc-product-listing-btn"
                  src={deleteIcon}
                  alt="delete"
                />
              </td>
            </tr>
          </tbody>
        </table>

        <div className="dsc-next-page">Carregar mais</div>
      </section>
    </main>
  );
}
