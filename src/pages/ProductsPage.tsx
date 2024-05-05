import { useContext } from 'react';
import { CreateProduct } from '../components/CreateProduct';
import { ErrorMessage } from '../components/ErrorMessage';
import Loader from '../components/Loader';
import { Modal } from '../components/Modal';
import Product from '../components/Product';
import { useProducts } from '../hooks/products';
import { IProduct } from '../models';
import { ModalContext } from '../context/ModalContext';


export function ProductsPage() {
  const { products, error, loading, addProduct } = useProducts();
  const { modal, open, close } = useContext(ModalContext);

  const createHandler = (product: IProduct) => {
    close();
    addProduct(product);
  }

  /* getCard(); */
  return (
    <div className='container mx-auto max-w-2l pt-5' >
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map((product) => <Product product={product} key={product.id} />)}
      {modal && <Modal title="Create new product" onClose={close}>
        <CreateProduct onCreate={createHandler} />
      </Modal>}

      <button className="fixed px-4 py-2 bottom-5 right-5 rounded-full bg-red-700 text-2xl text-white" onClick={open} > +</button>
    </div >

  );
}
